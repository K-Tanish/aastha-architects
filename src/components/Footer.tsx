import React, { useState } from 'react';
import { Compass, Ruler, Hammer, Mail, CheckCircle } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const quickLinks = [
    { label: 'Home Page', tab: 'home' },
    { label: 'Selected Works', tab: 'portfolio' },
    { label: 'Excellence Blueprint', tab: 'services' },
    { label: 'Coordinate Terminal', tab: 'contact' },
  ];

  return (
    <footer className="bg-soft-linen text-deep-charcoal pt-24 pb-12 px-6 sm:px-12 md:px-20 border-t border-deep-charcoal/5 max-w-7xl mx-auto border-x">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
        
        {/* Col 1: Coordinates */}
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col">
            <span className="font-serif text-3xl tracking-tighter font-black text-deep-charcoal">AASTHA&trade;</span>
            <span className="font-sans text-[8px] tracking-[0.3em] font-medium text-outline uppercase mt-1">
              Architecture & Interiors
            </span>
          </div>
          
          <div className="space-y-4 pt-4">
            <div className="flex flex-col">
              <span className="font-sans text-[10px] tracking-[0.2em] text-outline font-medium uppercase">STUDIO TERMINAL</span>
              <span className="font-sans text-sm text-[#4A4A48] mt-1 leading-relaxed">
                402-404, Vellum Arch,<br />
                Karve Road, Kothrud,<br />
                Pune - 411038, MH, India
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-sans text-[10px] tracking-[0.2em] text-outline font-medium uppercase">CONNECT</span>
              <a href="tel:+912025439870" className="font-sans text-sm text-[#4A4A48] hover:text-deep-charcoal transition-colors mt-1">
                +91 (20) 2543-9870
              </a>
              <a href="mailto:hello@aasthaarchitecture.com" className="font-sans text-sm text-[#4A4A48] hover:text-deep-charcoal transition-colors">
                hello@aasthaarchitecture.com
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Symbols & Links */}
        <div className="flex flex-col justify-between space-y-10 md:space-y-0">
          <div className="flex flex-col space-y-6">
            <span className="font-sans text-[10px] tracking-[0.2em] text-outline font-medium uppercase">NAVIGATION</span>
            <ul className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <li key={link.tab}>
                  <button
                    onClick={() => {
                      setCurrentTab(link.tab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-sans text-xs tracking-[0.1em] text-[#4A4A48] hover:text-deep-charcoal hover:translate-x-1 transition-all duration-300 block text-left"
                  >
                    {link.label.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual drafting symbols row */}
          <div className="flex items-center space-x-10 pt-8 border-t border-deep-charcoal/10">
            <div className="flex flex-col items-center space-y-1.5 group cursor-help">
              <div className="w-10 h-10 border border-deep-charcoal/10 flex items-center justify-center text-deep-charcoal/60 group-hover:text-deep-charcoal group-hover:border-deep-charcoal transition-colors duration-300">
                <Compass size={18} strokeWidth={1.5} />
              </div>
              <span className="font-sans text-[8px] tracking-widest text-outline uppercase">COMPASS</span>
            </div>
            
            <div className="flex flex-col items-center space-y-1.5 group cursor-help">
              <div className="w-10 h-10 border border-deep-charcoal/10 flex items-center justify-center text-deep-charcoal/60 group-hover:text-deep-charcoal group-hover:border-deep-charcoal transition-colors duration-300">
                <Ruler size={18} strokeWidth={1.5} />
              </div>
              <span className="font-sans text-[8px] tracking-widest text-outline uppercase">RULER</span>
            </div>

            <div className="flex flex-col items-center space-y-1.5 group cursor-help">
              <div className="w-10 h-10 border border-deep-charcoal/10 flex items-center justify-center text-deep-charcoal/60 group-hover:text-deep-charcoal group-hover:border-deep-charcoal transition-colors duration-300">
                <Hammer size={18} strokeWidth={1.5} />
              </div>
              <span className="font-sans text-[8px] tracking-widest text-outline uppercase">HAMMER</span>
            </div>
          </div>
        </div>

        {/* Col 3: Journal Sign-up */}
        <div className="flex flex-col space-y-6">
          <span className="font-sans text-[10px] tracking-[0.2em] text-outline font-medium uppercase">QUARTERLY ARCHIVE</span>
          <p className="font-sans text-xs text-[#4A4A48] leading-relaxed">
            Subscribe to receive our select architectural case studies, regional layout templates, and seasonal interior design monographs.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
            <div className="relative">
              <input
                type="email"
                required
                placeholder="YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-background text-deep-charcoal border border-deep-charcoal/10 px-4 py-3 font-sans text-xs tracking-wider rounded-none focus:outline-none focus:border-deep-charcoal placeholder-deep-charcoal/30 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-deep-charcoal/70 hover:text-deep-charcoal transition-colors"
                aria-label="Subscribe"
              >
                <Mail size={16} />
              </button>
            </div>
            
            {subscribed && (
              <div className="flex items-center space-x-2 text-deep-charcoal mt-2">
                <CheckCircle size={14} />
                <span className="font-sans text-[10px] tracking-wider uppercase font-semibold">SUCCESSFULLY SUBSCRIBED</span>
              </div>
            )}
          </form>

          <div className="pt-4 flex flex-col">
            <span className="font-sans text-[10px] tracking-[0.2em] text-outline font-medium uppercase mb-2">OPERATING HOURS</span>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#4A4A48]">
              <span>Mon – Fri</span>
              <span className="text-right font-medium">09:00 AM – 07:00 PM</span>
              <span>Saturday</span>
              <span className="text-right font-medium">10:00 AM – 04:00 PM</span>
              <span>Sunday</span>
              <span className="text-right text-champagne-glint font-medium">CLOSED</span>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-deep-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-sans text-[10px] tracking-[0.15em] text-outline text-center sm:text-left">
          © 2026 AASTHA ARCHITECTURE & INTERIORS. ALL RIGHTS RESERVED.
        </span>
        <div className="flex items-center space-x-8 text-[10px] tracking-[0.15em] text-outline">
          <a href="#instagram" className="hover:text-deep-charcoal transition-colors uppercase">INSTAGRAM</a>
          <a href="#linkedin" className="hover:text-deep-charcoal transition-colors uppercase">LINKEDIN</a>
          <a href="#pinterest" className="hover:text-deep-charcoal transition-colors uppercase">PINTEREST</a>
        </div>
      </div>
    </footer>
  );
};
