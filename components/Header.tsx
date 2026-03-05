import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Page } from '../types';
import { Button } from './Button';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
      {/* Top Bar */}
      <div className="bg-brand-orange text-white py-2 px-4 relative z-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 text-center">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest">
            Hey, welkom👋. Leuk dat je interesse hebt! (In het echt zijn we nóg leuker😉)
          </p>
          <button
            onClick={() => handleNavClick(Page.ABOUT)}
            className="group flex items-center gap-1 text-[10px] md:text-xs font-black uppercase tracking-widest border-b-2 border-white/50 hover:border-white transition-all"
          >
            Bekijk de vacatures
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-sm py-2' : 'bg-brand-dark/80 backdrop-blur-md py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => handleNavClick(Page.HOME)} className="flex items-center gap-2">
            <div className="font-display font-bold text-3xl tracking-tighter text-brand-orange">
              WERF<span className="text-white">TOOLS</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium text-sm uppercase tracking-wide transition-colors ${currentPage === item.href ? 'text-brand-orange' : 'text-white hover:text-brand-orange'}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://tool.werftools.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-black text-sm uppercase tracking-widest text-brand-orange hover:text-white transition-colors border-b-2 border-transparent hover:border-brand-orange pb-0.5"
            >
              Login
            </a>
            <Button onClick={() => window.location.href = 'mailto:barrywanschers@gmail.com'} variant="primary" className="!py-2 !px-4 !text-sm">
              Boek een demo
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-gray-800 p-4 flex flex-col gap-4 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`font-medium text-lg uppercase text-left py-2 ${currentPage === item.href ? 'text-brand-orange' : 'text-white'}`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://tool.werftools.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-lg uppercase text-left py-2 text-brand-orange font-bold"
          >
            Login Platform
          </a>
          <Button onClick={() => window.location.href = 'mailto:barrywanschers@gmail.com'} variant="primary" className="w-full">
            Boek een demo
          </Button>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm mt-4">
            <Phone size={16} /> Bel direct: +31(0)30-2072878
          </div>
        </div>
      )}
    </header>
  );
};