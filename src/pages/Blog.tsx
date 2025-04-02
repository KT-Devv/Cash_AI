const blogPosts = [
  {
    title: 'The Future of AI in Banking',
    date: 'March 15, 2025',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Explore how artificial intelligence is reshaping the banking industry and what to expect in the coming years.',
    category: 'Technology'
  },
  {
    title: 'Enhancing Fraud Detection with Machine Learning',
    date: 'March 12, 2025',
    author: 'Marcus Rodriguez',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Learn how machine learning algorithms are revolutionizing fraud detection in financial services.',
    category: 'Security'
  },
  {
    title: 'The Rise of Personalized Banking',
    date: 'March 10, 2025',
    author: 'Lisa Wong',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Discover how AI is enabling unprecedented levels of personalization in banking services.',
    category: 'Innovation'
  },
  {
    title: 'Regulatory Compliance in the AI Era',
    date: 'March 8, 2025',
    author: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Understanding the intersection of AI technology and banking regulations.',
    category: 'Compliance'
  }
];

export default function Blog() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900">Latest Insights</h1>
          <p className="mt-4 text-xl text-slate-600">
            Expert perspectives on AI in banking and financial technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-blue-600">{post.category}</span>
                  <span className="text-sm text-slate-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">{post.title}</h2>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">By {post.author}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-slate-200 rounded-lg hover:border-blue-600 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}