import { Shield, BarChart as ChartBar, Users, MessageSquare, Building2, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Fraud Detection',
    description: 'Advanced AI algorithms detect and prevent fraudulent transactions in real-time.'
  },
  {
    icon: ChartBar,
    title: 'Risk Assessment',
    description: 'Precise credit risk evaluation using machine learning models.'
  },
  {
    icon: Users,
    title: 'Customer Insights',
    description: 'Deep learning analytics for personalized banking experiences.'
  },
  {
    icon: MessageSquare,
    title: 'AI Assistant',
    description: '24/7 intelligent customer support with natural language processing.'
  },
  {
    icon: Building2,
    title: 'Compliance',
    description: 'Automated regulatory compliance monitoring and reporting.'
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Enhanced cybersecurity with AI-powered threat detection.'
  }
];

export default function Features() {
  return (
    <div id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Powerful AI Features</h2>
          <p className="mt-4 text-lg text-slate-600">
            Leverage cutting-edge artificial intelligence to transform your banking operations
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}