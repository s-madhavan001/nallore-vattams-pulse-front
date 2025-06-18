
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('events'), path: '/events' },
    { name: t('gallery'), path: '/gallery' },
    { name: t('about'), path: '/about' },
    { name: t('login'), path: '/login' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-emerald-600">
            {t('heroTitle')}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium ${
                    location.pathname === item.path ? 'text-emerald-600 border-b-2 border-emerald-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-emerald-600 font-semibold' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-2 border-t">
              <LanguageToggle />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
