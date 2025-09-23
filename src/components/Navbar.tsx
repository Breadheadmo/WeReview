import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CarInspectProLogo from './CarInspectProLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 mr-4 sm:mr-8">
              <CarInspectProLogo textClassName="text-black" />
            </Link>
          </div>
          {/* Desktop Navigation Tabs - Centered */}
          <div className="hidden md:flex items-center space-x-4 sm:space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-secondary-gray hover:text-brand-green px-2 sm:px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path) ? 'text-brand-green border-b-2 border-brand-green' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Book An Inspection Button - Top Right */}
          <div className="hidden md:flex items-center ml-auto">
            <Link
              to="/book-inspection"
              className="bg-brand-green text-white px-4 sm:px-6 py-2 rounded-md hover:bg-green-600 transition-colors font-medium"
            >
              Book An Inspection
            </Link>
          </div>
          {/* Mobile menu button - always top right on mobile */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-gray hover:text-brand-green focus:outline-none p-2"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-light-border">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-2 sm:px-3 py-2 text-base font-medium transition-colors rounded ${
                    isActive(item.path) 
                      ? 'text-brand-green bg-light-gray' 
                      : 'text-secondary-gray hover:text-brand-green hover:bg-light-gray'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/book-inspection"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium bg-brand-green text-white rounded-md hover:bg-green-600 transition-colors mt-2"
              >
                Book An Inspection
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;