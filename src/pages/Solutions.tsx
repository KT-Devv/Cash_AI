import { Shield, Brain, BarChart as ChartBar, MessageSquare } from 'lucide-react';

const solutions = [
  {
    icon: Shield,
    title: 'Fraud Prevention Suite',
    description: 'Real-time fraud detection and prevention using advanced machine learning algorithms.',
    features: [
      'Transaction monitoring',
      'Behavioral analysis',
      'Pattern recognition',
      'Anomaly detection'
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Brain,
    title: 'Risk Management Platform',
    description: 'Comprehensive risk assessment and management powered by AI.',
    features: [
      'Credit risk scoring',
      'Market risk analysis',
      'Regulatory compliance',
      'Portfolio optimization'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: ChartBar,
    title: 'Customer Analytics Engine',
    description: 'Deep customer insights and personalization capabilities.',
    features: [
      'Behavioral segmentation',
      'Churn prediction',
      'Product recommendations',
      'Customer lifetime value'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: MessageSquare,
    title: 'AI Customer Service',
    description: 'Intelligent customer support and engagement solution.',
    features: [
      '24/7 chatbot support',
      'Natural language processing',
      'Automated ticket routing',
      'Sentiment analysis'
    ],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Solutions() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900">Our Solutions</h1>
          <p className="mt-4 text-xl text-slate-600">
            Comprehensive AI-powered solutions for modern banking
          </p>
        </div>

        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <solution.icon className="h-8 w-8 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900">{solution.title}</h2>
                </div>
                <p className="text-lg text-slate-600 mb-8">{solution.description}</p>
                <ul className="space-y-4">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mr-3" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="flex-1">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}