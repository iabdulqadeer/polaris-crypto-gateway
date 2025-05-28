
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-secondary-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-2xl font-bold text-primary-900 hover:text-primary-700 transition-colors"
            >
              Polaris
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-secondary-700 hover:text-primary-900 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/#features')}
              className="text-secondary-700 hover:text-primary-900 font-medium transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavigation('/#faq')}
              className="text-secondary-700 hover:text-primary-900 font-medium transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNavigation('/legal')}
              className="text-secondary-700 hover:text-primary-900 font-medium transition-colors"
            >
              Legal
            </button>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-secondary-700 hover:text-primary-900 hover:bg-primary-50"
            >
              Login
            </Button>
            <Button 
              className="bg-primary-900 hover:bg-primary-800 text-white font-medium px-6"
            >
              Register
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-700 hover:text-primary-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-secondary-200 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => handleNavigation('/')}
                className="block w-full text-left px-3 py-2 text-secondary-700 hover:text-primary-900 hover:bg-primary-50 rounded-md"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/#features')}
                className="block w-full text-left px-3 py-2 text-secondary-700 hover:text-primary-900 hover:bg-primary-50 rounded-md"
              >
                Features
              </button>
              <button 
                onClick={() => handleNavigation('/#faq')}
                className="block w-full text-left px-3 py-2 text-secondary-700 hover:text-primary-900 hover:bg-primary-50 rounded-md"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleNavigation('/legal')}
                className="block w-full text-left px-3 py-2 text-secondary-700 hover:text-primary-900 hover:bg-primary-50 rounded-md"
              >
                Legal
              </button>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="ghost" className="justify-start">Login</Button>
                <Button className="bg-primary-900 hover:bg-primary-800 text-white justify-start">Register</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
