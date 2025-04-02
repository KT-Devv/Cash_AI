export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Transform Banking with
            <span className="text-blue-600"> AI-Powered</span> Intelligence
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Cash.AI revolutionizes banking operations with advanced artificial intelligence. 
            Streamline processes, enhance security, and deliver exceptional customer experiences.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Request Demo
            </button>
            <button className="px-8 py-3 border border-slate-200 rounded-lg hover:border-blue-600 transition-colors">
              Learn More
            </button>
          </div>
          <div className="mt-20">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1920"
              alt="Banking Dashboard"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}