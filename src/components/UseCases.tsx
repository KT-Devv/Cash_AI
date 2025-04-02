const useCases = [
  {
    title: 'Retail Banking',
    description: 'Enhance customer experience with personalized services and automated support.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Investment Banking',
    description: 'Optimize portfolio management and risk assessment with AI-driven insights.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Corporate Banking',
    description: 'Streamline operations and improve decision-making with advanced analytics.',
    image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=800'
  }
];

export default function UseCases() {
  return (
    <div id="use-cases" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Industry Solutions</h2>
          <p className="mt-4 text-lg text-slate-600">
            Discover how Cash.AI transforms different banking sectors
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={useCase.image} alt={useCase.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{useCase.title}</h3>
                <p className="mt-2 text-slate-600">{useCase.description}</p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}