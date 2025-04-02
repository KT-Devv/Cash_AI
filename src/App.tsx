import { useState } from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import Header from './components/Header';
import Footer from './components/Footer';
import Solutions from './pages/Solutions';
import Dashboard from './pages/Dashboard';
import SignInModal from './components/SignInModal';
import AIAssistant from './components/AIAssistant';
import GetStartedModal from './components/GetStartedModal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSwitchToSignIn = () => {
    setIsGetStartedOpen(false);
    setIsSignInOpen(true);
  };

  const handleSwitchToGetStarted = () => {
    setIsSignInOpen(false);
    setIsGetStartedOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header 
          onGetStarted={() => setIsGetStartedOpen(true)} 
          onSignIn={() => setIsSignInOpen(true)}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
        <AIAssistant />
        <GetStartedModal 
          isOpen={isGetStartedOpen} 
          onClose={() => setIsGetStartedOpen(false)}
          onSwitchToSignIn={handleSwitchToSignIn}
        />
        <SignInModal 
          isOpen={isSignInOpen}
          onClose={() => setIsSignInOpen(false)}
          onSwitchToGetStarted={handleSwitchToGetStarted}
        />
      </div>
    </Router>
  );
}

export default App;