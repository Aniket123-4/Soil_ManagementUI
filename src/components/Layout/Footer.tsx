import { Link } from 'react-router-dom';
import { Sprout, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="container mx-auto px-4 text-gray-400">
        
        {/* Upper Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-8">
          
          {/* Logo + Text */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl blur-md opacity-70" />
                <Sprout className="h-8 w-8 text-primary relative z-10" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AgriHub
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Empowering farmers with smart tools and insights to grow sustainably.
            </p>
          </div>

          {/* Horizontal Quick Links */}
          <div className="flex flex-wrap gap-6">
            {['Home', 'Features', 'Pricing', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-gray-400 hover:text-primary transition-colors font-medium text-lg"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <button
                key={index}
                className="p-3 rounded-xl bg-gray-800 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © 2025 AgriHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
