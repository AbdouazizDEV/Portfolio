import { useState } from 'react';
import { Menu, X, Globe, Terminal, Laptop, Code, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", text: "Accueil", icon: <Globe className="w-5 h-5" /> },
    { href: "#about", text: "À propos", icon: <Terminal className="w-5 h-5" /> },
    { href: "#experience", text: "Expérience", icon: <Laptop className="w-5 h-5" /> },
    { href: "#skills", text: "Compétences", icon: <Code className="w-5 h-5" /> },
    { href: "#contact", text: "Contact", icon: <Mail className="w-5 h-5" /> }
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 hover:from-blue-600 hover:to-green-600 transition-all duration-500 cursor-pointer">
            Abdou Aziz Diop
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={link.href}
                href={link.href}
                className="group relative text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-2"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {link.icon}
                {link.text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <button 
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute inset-0 bg-gray-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
            {isMenuOpen ? (
              <X className="transform rotate-0 hover:rotate-180 transition-transform duration-300" size={24} />
            ) : (
              <Menu className="transform rotate-0 hover:rotate-180 transition-transform duration-300" size={24} />
            )}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm border-t">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transform transition-all duration-300 hover:translate-x-2 flex items-center gap-2
                  ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
                `}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;