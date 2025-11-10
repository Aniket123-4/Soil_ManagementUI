import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sprout, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <Sprout className="h-8 w-8 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AgriHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/80 hover:text-primary hover:bg-muted/50'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 border border-primary/20 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button 
                variant="outline" 
                className="hidden sm:flex border-2 bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-2xl px-6"
              >
                Login
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-3 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-4 px-4 rounded-2xl font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/10 border border-primary/20'
                    : 'text-foreground/80 hover:text-primary hover:bg-muted/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/login" 
              className="block py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="outline" className="w-full rounded-2xl">
                Login
              </Button>
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;