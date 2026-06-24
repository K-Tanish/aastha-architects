import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ArrowDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onInquire: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBshhfYDAkUY1pOx0_B4sNHMnSDv6dqpSJvl49-hCBMVV3aCUpZwN4u8UratAdAUWz8-jtYYWNEABz4GGVQhBc3KEG7QvR_7HGW9TNGq1ddXfOHudCCbJObWEltix27G7rwnFQhEJ4COz5moI0XEUVKhxoGyk_AAVel8qnSvs8qZSwdTPgFJ5UCrLOCkAYhgiRO1oF5ODC8e8VMblmKgx0pvvtLrQHwt6F6PIQvodV7M9Cj3dP36XXdmp0sn5H4YKEgCAI4sJU2vu4V',
    title: 'Verde Living Room',
    subtitle: 'MODERN RESIDENTIAL REINTERPRETATION'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz882htREllD1Dv6hfQYcYQoJG112CLWOlCpgZeIYGuQaT4y6sH7XcTKvqStKOXaEXLH-PhvPMP2x0P5fOupxqafHWuiXVXIMI0cJxl20XTJnXRho6uVHtoagrWrZ5GnOOcK5jXt04VxJjd5orqQtgV1JR1CtmDIuSpLaaehKlf6AayCDZVdOqcRzWhxQf-QU864wROLVBS9OFodaEqnWDoj8Av1vOQsPRtAjRs3fKz__ZDq0bkmGvvAlOUTeiySf0O26m44Cb_-bB',
    title: 'The Atrium House',
    subtitle: 'CURVING STRUCTURAL POETRY'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZq1P0Z7vadA5V402oGenL3UDur6O2cOf_NikUujrmteDxxtctDRLWIsC0KSwkT-y29Te-GoB8BBXGvg0Oxlulv60MfkN94XBRC8HGdHPFiApobpHmB4FQeqsrP72veaMs8o5AfmSKDyuTnFn_uzfaAfi9OBFPNK6clIhXWdI30n46vcPlshmH7dXmXlyXsn_LHxIxE3ro-ynpaYKUbm8fMqVQ6YCzBmWUObpFSMnNzZOoRzOs-u7j4RLcGq0MT1bCDjIDz_wES9EZ',
    title: 'Vellum Heights Residence',
    subtitle: 'MONOCHROMATIC DRAMATIC SOPHISTICATION'
  }
];

export const Hero: React.FC<HeroProps> = ({ onExplore, onInquire }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-deep-charcoal">
      {/* Slide Image Backdrops with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.65, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1.0 }}
            transition={{ duration: 2.0, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              className="w-full h-full object-cover filter brightness-[0.75]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Grid Lines Pattern */}
      <div className="absolute inset-0 z-10 pointer-events-none border-x border-soft-linen/5 max-w-7xl mx-auto flex justify-between px-6 sm:px-12 md:px-20">
        <div className="w-[1px] h-full bg-soft-linen/5" />
        <div className="w-[1px] h-full bg-soft-linen/5 hidden sm:block" />
        <div className="w-[1px] h-full bg-soft-linen/5 hidden md:block" />
        <div className="w-[1px] h-full bg-soft-linen/5" />
      </div>

      {/* Main Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between max-w-7xl mx-auto px-6 sm:px-12 md:px-20 py-12 md:py-16 text-soft-linen">
        
        {/* Top bar details */}
        <div className="flex flex-row justify-between items-start pt-4">
          <div className="flex items-center space-x-3 bg-deep-charcoal/40 backdrop-blur-sm border border-soft-linen/10 px-3 py-1.5 rounded-none font-mono text-[9px] tracking-widest text-soft-linen/70 uppercase">
            <Compass size={12} className="text-champagne-glint animate-spin-slow" />
            <span>PUNE STUDIO • 18.5204° N, 73.8567° E</span>
          </div>
          
          <div className="hidden lg:block font-mono text-[9px] tracking-widest text-right text-soft-linen/40 leading-relaxed uppercase">
            ESTABLISHED MMXXII<br />
            PUNE, MAHARASHTRA
          </div>
        </div>

        {/* Center Title and descriptions */}
        <div className="my-auto max-w-3xl flex flex-col items-start space-y-6 md:space-y-8 pt-8">
          <div className="space-y-2">
            <span className="font-sans text-[10px] tracking-[0.3em] font-semibold text-champagne-glint uppercase block">
              {HERO_SLIDES[currentSlide].subtitle}
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.05em] leading-[1.05] text-white">
              Precise Spatial<br />
              <span className="italic font-normal font-serif text-champagne-glint">Architecture</span>
            </h1>
          </div>

          <p className="font-sans text-xs sm:text-sm text-soft-linen/80 tracking-wide leading-relaxed max-w-md md:max-w-xl font-light">
            We curate tailored environments where minimalist precision converges with tactile materiality, forming spaces that frame the lives of those who inhabit them.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={onExplore}
              className="bg-champagne-glint text-deep-charcoal font-sans text-xs tracking-[0.2em] font-semibold px-8 py-4 hover:bg-white transition-all duration-300 rounded-none text-center shadow-md cursor-pointer"
            >
              EXPLORE WORKS
            </button>
            <button
              onClick={onInquire}
              className="border border-soft-linen/30 backdrop-blur-xs hover:border-white font-sans text-xs tracking-[0.2em] font-semibold px-8 py-4 transition-all duration-300 rounded-none text-center hover:bg-soft-linen/5 cursor-pointer"
            >
              START A PROJECT
            </button>
          </div>
        </div>

        {/* Bottom Details & scroll down */}
        <div className="flex flex-row justify-between items-end">
          <div className="flex items-center space-x-4">
            <span className="font-mono text-[14px] text-champagne-glint font-bold">
              0{(currentSlide + 1)}
            </span>
            <div className="w-12 h-[1px] bg-soft-linen/25 relative">
              <motion.div
                key={currentSlide}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 6.0, ease: 'linear' }}
                className="absolute inset-0 h-full bg-champagne-glint"
              />
            </div>
            <span className="font-mono text-[10px] text-soft-linen/40 uppercase">
              0{HERO_SLIDES.length} SELECTION
            </span>
          </div>

          <button
            onClick={onExplore}
            className="flex items-center space-x-3 text-soft-linen/50 hover:text-champagne-glint transition-all duration-300 group pb-1 cursor-pointer"
          >
            <span className="font-sans text-[9px] tracking-[0.25em] font-medium uppercase">
              SCROLL DOWN
            </span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </motion.div>
          </button>
        </div>

      </div>

    </section>
  );
};
