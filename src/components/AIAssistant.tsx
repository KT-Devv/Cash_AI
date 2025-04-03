import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Mic } from 'lucide-react';

type Message = {
  type: 'user' | 'assistant';
  content: string;
  timestamp?: number;
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : [{
      type: 'assistant',
      content: 'Hi there! I\'m your AI banking assistant. How can I help you today?',
      timestamp: Date.now()
    }];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Expanded hardcoded responses
  const HARDCODED_RESPONSES: { [key: string]: string } = {
    'hello': 'Hello! Welcome to BankBot. How can I assist you today?',
    'hi': 'Hi there! What banking service do you need help with?',
    'help': 'I can help with:\n- Account balances\n- Transaction history\n- Bill payments\n- Loan information\n- Card services\nHow can I assist you?',
    'account balance': 'Your current checking account balance is $4,230.15.\nSavings account: $12,450.89',
    'transactions': 'Recent transactions (last 7 days):\n- Jul 15: POS $45.67 (Coffee Shop)\n- Jul 14: Transfer $500.00 (Savings)\n- Jul 13: Deposit $2,300.00',
    'transfer money': 'To transfer money:\n1. Go to Transfers menu\n2. Select recipient\n3. Enter amount\n4. Confirm details\nWould you like me to guide you through it?',
    'loan rates': 'Current interest rates:\n- Personal Loan: 6.99% APR\n- Mortgage: 5.25% APR\n- Auto Loan: 4.75% APR',
    'credit card': 'Your Visa Platinum (****1234):\n- Balance: $1,234.56\n- Available credit: $8,765.44\n- Due date: August 15th',
    'bill pay': 'Bill payment services:\n1. Select "Pay Bills" in menu\n2. Choose payee\n3. Enter amount\n4. Schedule payment date\nNeed help with a specific bill?',
    'routing number': 'Our bank routing number is 021000021\nThis is used for direct deposits and wire transfers',
    'branch location': 'Nearest branch:\n123 Main Street\nOpen Mon-Fri 9AM-5PM\nWould you like directions?',
    'bye': 'Thank you for banking with us! Have a wonderful day!',
    'default': 'I specialize in banking services. Please ask about:\n- Account balances\n- Transfers\n- Loans\n- Cards\n- Bill payments'
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const formatMessageContent = (content: string) => {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  const handleError = (error: unknown) => {
    console.error(error);
    setMessages(prev => [...prev, {
      type: 'assistant',
      content: 'Sorry, I encountered an error. Please try again.',
      timestamp: Date.now()
    }]);
  };

  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim().toLowerCase();
    const newMessage: Message = {
      type: 'user',
      content: userMessage,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const response = HARDCODED_RESPONSES[userMessage] || HARDCODED_RESPONSES['default'];
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: response,
        timestamp: Date.now()
      }]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Open chat"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-96 max-w-[calc(100vw-2rem)] flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-blue-600" />
              <h3 className="font-semibold text-slate-900">AI Banking Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-500 hover:text-slate-700"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]">
            {messages.map((message, index) => (
              <div
                key={`${message.timestamp}-${index}`}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-900'
                  }`}
                >
                  {formatMessageContent(message.content)}
                  <div className="text-xs mt-1 opacity-70">
                    {new Date(message.timestamp || Date.now()).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-slate-100 text-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="animate-pulse">Processing</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:opacity-50"
                disabled={isLoading}
                aria-label="Chat input"
              />
              
              <div className="flex items-center gap-2">
                <button
                  className="p-2 text-blue-600 hover:text-blue-700 disabled:text-slate-400"
                  aria-label="Voice input (coming soon)"
                  title="Voice input (coming soon)"
                  disabled
                >
                  <Mic className="h-5 w-5" />
                </button>
                
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-2 text-blue-600 hover:text-blue-700 disabled:text-slate-400 transition-colors"
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}