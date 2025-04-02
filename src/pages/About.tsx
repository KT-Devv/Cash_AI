import { Users, Trophy, Target } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    bio: 'Former Head of AI at Goldman Sachs with 15+ years in fintech.'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'PhD in Machine Learning from MIT, previously led engineering at Square.'
  },
  {
    name: 'Lisa Wong',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    bio: 'Product veteran from Stripe with deep expertise in financial services.'
  }
];

const values = [
  {
    icon: Users,
    title: 'Customer First',
    description: 'We prioritize our customers\' success and security above all else.'
  },
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'We strive for excellence in every line of code and every customer interaction.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We continuously push the boundaries of what\'s possible in banking technology.'
  }
];

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">About Cash.AI</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize banking through artificial intelligence,
            making financial services more efficient, secure, and accessible for everyone.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                  <p className="mt-2 text-slate-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}