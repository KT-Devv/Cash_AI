import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$499',
    description: 'Perfect for small banks and credit unions',
    features: [
      'AI-powered fraud detection',
      'Basic customer insights',
      'Email support',
      'Up to 10,000 transactions/month',
      'Basic API access',
      '99.9% uptime SLA'
    ]
  },
  {
    name: 'Professional',
    price: '$999',
    description: 'Ideal for medium-sized financial institutions',
    features: [
      'Advanced fraud detection & prevention',
      'Deep customer analytics',
      'Priority support 24/7',
      'Up to 100,000 transactions/month',
      'Full API access',
      '99.99% uptime SLA',
      'Custom integrations',
      'Dedicated account manager'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large banks and financial institutions',
    features: [
      'Custom AI model development',
      'Advanced risk assessment',
      'White-glove support',
      'Unlimited transactions',
      'Premium API access',
      '99.999% uptime SLA',
      'Custom integrations',
      'Dedicated team',
      'On-premise deployment option'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900">Transparent Pricing</h1>
          <p className="mt-4 text-xl text-slate-600">
            Choose the perfect plan for your financial institution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 ${
                plan.highlighted
                  ? 'ring-2 ring-blue-600 shadow-lg'
                  : 'border border-slate-200'
              }`}
            >
              <h2 className="text-2xl font-bold text-slate-900">{plan.name}</h2>
              <div className="mt-4">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="mt-2 text-slate-600">{plan.description}</p>
              
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 px-6 rounded-lg ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border border-slate-200 text-slate-900 hover:border-blue-600'
                } transition-colors`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}