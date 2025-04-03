import React from 'react';
import { Brain, Mic, BarChart as ChartBar, Shield, MessageSquare, Zap } from 'lucide-react';

const features = [
{
icon: Brain,
title: 'Advanced AI Analysis',
description: 'Our AI engine processes voice data in real-time, extracting valuable insights from every customer interaction.'
},
{
icon: Mic,
title: 'Voice Recognition',
description: 'Industry-leading voice recognition technology that understands multiple accents and languages.'
},
{
icon: ChartBar,
title: 'Performance Analytics',
description: 'Detailed metrics and KPIs to track and improve customer service performance.'
},
{
icon: Shield,
title: 'Compliance Monitoring',
description: 'Automated compliance checking ensures every call follows regulatory requirements.'
},
{
icon: MessageSquare,
title: 'Sentiment Analysis',
description: 'Real-time emotion detection helps understand and improve customer satisfaction.'
},
{
icon: Zap,
title: 'Quick Integration',
description: 'Easy integration with your existing call center infrastructure and CRM systems.'
}
];

export default function LearnMore() {
return (
<div className="pt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    {/* Hero Section */}
    <div className="text-center mb-20">
        <h1 className="text-4xl font-bold text-slate-900">
        Transform Your Customer Service with Voice AI
        </h1>
        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
        Discover how Echo_Bank's voice analytics platform can revolutionize your customer interactions
        and drive better business outcomes.
        </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {features.map((feature, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-2 text-slate-600">{feature.description}</p>
        </div>
        ))}
    </div>

    {/* How It Works */}
    <div className="bg-slate-50 rounded-xl p-8 mb-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Record</h3>
            <p className="text-slate-600">Capture customer calls through our secure voice recording system</p>
        </div>
        <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Analyze</h3>
            <p className="text-slate-600">AI processes calls in real-time for insights and patterns</p>
        </div>
        <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Improve</h3>
            <p className="text-slate-600">Get actionable insights to enhance customer service</p>
        </div>
        </div>
    </div>

    {/* CTA Section */}
    <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-slate-600 mb-8">
        Transform your customer service operations with AI-powered voice analytics
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Request Demo
        </button>
    </div>
    </div>
</div>
);
}