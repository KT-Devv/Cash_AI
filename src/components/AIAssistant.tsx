export default function AIAssistant() {
  // ... existing state ...
  const [audioFile, setAudioFile] = useState<File | null>(null);

  // Add audio file handler
  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAudioFile(file);
    }
  };

  // Modified handleSend to handle both text and audio
  const handleSend = async () => {
    if ((!input.trim() && !audioFile) || isLoading) return;

    setIsLoading(true);
    
    try {
      let responseData;
      
      if (audioFile) {
        // Handle audio processing
        const formData = new FormData();
        formData.append("audio", audioFile);

        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/process_audio`, {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: formData,
        });

        responseData = await response.json();
        setAudioFile(null); // Clear audio file after sending
      } else {
        // Existing text handling
        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { type: 'user', content: userMessage }]);

        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessage }),
        });

        responseData = await response.json();
      }

      // Handle response
      if (responseData?.response) {
        setMessages(prev => [...prev, {
          type: 'assistant',
          content: responseData.response
        }]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Processing error:', error);
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Add audio UI elements
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* ... existing toggle button ... */}
      
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-96 max-w-[calc(100vw-2rem)] flex flex-col">
          {/* ... existing header and messages ... */}
          
          {/* Updated input section */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              {/* Audio upload button */}
              <label className="p-2 text-blue-600 hover:text-blue-700 cursor-pointer">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleAudioUpload}
                  className="hidden"
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 15c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V23h2v-4.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
              </label>

              {/* Text input */}
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type or record a message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                disabled={isLoading}
              />

              {/* Send/Record button */}
              <button
                onClick={handleSend}
                disabled={(!input.trim() && !audioFile) || isLoading}
                className="p-2 text-blue-600 hover:text-blue-700 disabled:text-slate-400"
              >
                {audioFile ? (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
            
            {/* Audio file preview */}
            {audioFile && (
              <div className="mt-2 text-sm text-slate-600 flex items-center gap-2">
                <span>Audio ready: {audioFile.name}</span>
                <button 
                  onClick={() => setAudioFile(null)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}