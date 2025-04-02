import React from 'react';
import { Phone, Clock, ThumbsUp, AlertTriangle } from 'lucide-react';

interface CallRecord {
  time: string;
  duration: string;
  topic: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  keywords: string[];
}

const callRecords: CallRecord[] = [
  {
    time: '10:30 AM',
    duration: '5:21',
    topic: 'Account Balance Inquiry',
    sentiment: 'positive',
    keywords: ['balance', 'checking', 'transfer']
  },
  {
    time: '11:15 AM',
    duration: '8:45',
    topic: 'Card Dispute',
    sentiment: 'negative',
    keywords: ['fraud', 'transaction', 'unauthorized']
  },
  {
    time: '12:00 PM',
    duration: '3:15',
    topic: 'Mobile Banking',
    sentiment: 'neutral',
    keywords: ['app', 'login', 'password']
  }
];

const StatCard = ({ icon: Icon, value, label, textColor = 'text-slate-600' }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center gap-4">
      <div className={`${textColor} opacity-80`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
        <p className="text-sm text-slate-600">{label}</p>
      </div>
    </div>
  </div>
);

const SentimentBadge = ({ sentiment }: { sentiment: CallRecord['sentiment'] }) => {
  const colors = {
    positive: 'bg-green-100 text-green-800',
    negative: 'bg-red-100 text-red-800',
    neutral: 'bg-slate-100 text-slate-800'
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm ${colors[sentiment]}`}>
      {sentiment}
    </span>
  );
};

const KeywordBadge = ({ keyword }: { keyword: string }) => (
  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
    {keyword}
  </span>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Call Center Analytics</h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Dashboard
            </button>
            <button className="px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors">
              Analytics
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            icon={Phone} 
            value="1247" 
            label="Total Calls" 
            textColor="text-blue-600" 
          />
          <StatCard 
            icon={Clock} 
            value="4:32" 
            label="Average Duration" 
            textColor="text-green-600" 
          />
          <StatCard 
            icon={ThumbsUp} 
            value="87%" 
            label="Satisfaction Rate" 
            textColor="text-blue-600" 
          />
          <StatCard 
            icon={AlertTriangle} 
            value="13%" 
            label="Escalation Rate" 
            textColor="text-orange-600" 
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Recent Call Analysis</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Time</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Duration</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Topic</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Sentiment</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Keywords</th>
                </tr>
              </thead>
              <tbody>
                {callRecords.map((record, index) => (
                  <tr key={index} className="border-b border-slate-100">
                    <td className="py-3 px-4 text-slate-900">{record.time}</td>
                    <td className="py-3 px-4 text-slate-900">{record.duration}</td>
                    <td className="py-3 px-4 text-slate-900">{record.topic}</td>
                    <td className="py-3 px-4">
                      <SentimentBadge sentiment={record.sentiment} />
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2 flex-wrap">
                        {record.keywords.map((keyword, kidx) => (
                          <KeywordBadge key={kidx} keyword={keyword} />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-slate-900">Live Call Monitoring</h2>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-slate-600">Recording</span>
            </div>
          </div>
          {/* Placeholder for live monitoring content */}
          <div className="h-48 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center">
            <p className="text-slate-600">Live call visualization will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}