import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab, onOpenInquiry }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'services', label: 'SERVICES' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setIsOpen(false);
    
    // Smooth scroll to top when changing tab
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md border-b border-deep-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex flex-col items-start justify-center group pointer-events-auto select-none text-left"
          >
            <span className="font-serif text-2xl tracking-tighter font-black text-deep-charcoal transition-colors group-hover:text-champagne-glint">
              AASTHA&trade;
            </span>
            <span className="font-sans text-[8px] tracking-[0.3em] font-medium text-outline uppercase -mt-0.5">
              Architecture & Interiors
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 font-sans text-[10px] tracking-[0.2em] font-medium transition-colors cursor-pointer uppercase ${
                  currentTab === item.id ? 'text-deep-charcoal' : 'text-deep-charcoal/50 hover:text-deep-charcoal'
                }`}
              >
                {item.label}
                {currentTab === item.id && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-deep-charcoal"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile trigger */}
          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenInquiry}
              className="hidden sm:flex items-center space-x-2 bg-deep-charcoal text-soft-linen px-5 py-2.5 font-sans text-xs tracking-[0.2em] font-medium hover:bg-champagne-glint hover:text-deep-charcoal transition-all rounded-none duration-300 shadow-sm"
            >
              <span>INQUIRE</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-deep-charcoal focus:outline-none p-1.5 hover:bg-deep-charcoal/5 rounded-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 pt-24 bg-background px-6 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {navItems.map((item, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-serif text-3xl tracking-[0.1em] py-2 transition-colors duration-300 ${
                    currentTab === item.id ? 'text-champagne-glint pl-2 border-l-2 border-champagne-glint' : 'text-deep-charcoal'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col space-y-6">
              <div className="h-[1px] bg-deep-charcoal/10" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-deep-charcoal text-soft-linen py-4 font-sans text-xs tracking-[0.2em] font-semibold hover:bg-champagne-glint hover:text-deep-charcoal transition-all rounded-none"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight size={14} />
              </button>
              
              <div className="flex flex-col space-y-1">
                <span className="font-sans text-[9px] tracking-[0.1em] text-outline">GENERAL INQUIRIES</span>
                <span className="font-sans text-xs font-medium text-deep-charcoal">hello@aasthaarchitecture.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
