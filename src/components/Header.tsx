import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

export default function Header({ onGetStarted, onSignIn }: HeaderProps) {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-slate-900">Echo-Bank</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/solutions" className="text-slate-600 hover:text-blue-600 transition-colors">Solutions</Link>
            <Link to="/pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/blog" className="text-slate-600 hover:text-blue-600 transition-colors">Blog</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              onClick={onSignIn}
              className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={onGetStarted}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}