import { useState, useEffect } from 'react';
import { Menu, X, Stethoscope, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className={`flex items-center gap-2 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
            {/* Logo Replica based on provided image */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <span className="text-[2.5rem] leading-none font-serif font-bold">A</span>
                <div className="relative mx-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <Stethoscope className={`w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isScrolled ? 'text-white' : 'text-slate-900'}`} strokeWidth={2.5} />
                </div>
                <span className="text-[2.5rem] leading-none font-serif font-bold">M</span>
              </div>
              <div className="flex flex-col items-center mt-[-4px]">
                <span className="font-bold text-[0.9rem] tracking-wide uppercase">Abenet Medical</span>
                <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase mt-[-2px]">Center</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-slate-600 hover:text-primary' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="tel:0911126069"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-600 hover:bg-red-500 hover:text-white transition-all duration-300 font-semibold"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </div>
              <Phone className="w-4 h-4" />
              <span className="text-sm">Emergency</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-all shadow-md hover:shadow-lg active:scale-95 border border-primary-light/20"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-lg absolute w-full top-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
