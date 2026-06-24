import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface CuratedPortfolioProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onViewAll: () => void;
}

export const CuratedPortfolio: React.FC<CuratedPortfolioProps> = ({ projects, onSelectProject, onViewAll }) => {
  // Let's filter Project 07 (Vellum Heights) and Project 05 (The Boardroom/Atrium Lounge) as featured ones
  const featuredVellum = projects.find(p => p.id === 'vellum-heights');
  const featuredBoardroom = projects.find(p => p.id === 'boardroom');

  return (
    <section className="bg-background py-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto border-x border-deep-charcoal/5">
      <div className="blueprint-divider mb-16" data-coord="C-PORTFOLIO.GRID.02" />

      {/* Header section with subtitle */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div className="space-y-3">
          <span className="font-mono text-[9px] tracking-[0.3em] font-semibold text-champagne-glint uppercase block">
            SELECTED PORTFOLIO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-deep-charcoal leading-tight">
            Curated <span className="italic font-normal">Works</span>
          </h2>
        </div>
        <p className="font-sans text-xs text-on-surface-variant leading-relaxed max-w-sm font-light">
          A focused visual selection of bespoke residential structures and curated corporate offices designed to manifest absolute spatial harmony.
        </p>
      </div>

      {/* Asymmetric Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Side: Vellum Heights Residence */}
        {featuredVellum && (
          <div 
            onClick={() => onSelectProject(featuredVellum)}
            className="flex flex-col group cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[3/4] bg-warm-stone border border-deep-charcoal/5">
              {/* Card Label Tag */}
              <div className="absolute top-6 left-6 z-10 bg-deep-charcoal text-soft-linen px-3 py-1 text-[8px] font-mono tracking-widest uppercase">
                RESIDENTIAL • {featuredVellum.index}
              </div>

              <img
                src={featuredVellum.image}
                alt={featuredVellum.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Hover overlay with coordinates effect */}
              <div className="absolute inset-0 bg-deep-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="flex justify-between items-center w-full text-white">
                  <div className="font-mono text-[9px] tracking-wider uppercase">
                    YEAR: {featuredVellum.year} / AREA: {featuredVellum.area}
                  </div>
                  <div className="w-10 h-10 bg-champagne-glint text-deep-charcoal flex items-center justify-center">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-light text-deep-charcoal group-hover:text-champagne-glint transition-colors">
                  {featuredVellum.title}
                </h3>
                <span className="font-sans text-[11px] text-outline tracking-wider font-semibold uppercase">
                  PUNE, MAHARASHTRA
                </span>
              </div>
              <span className="font-mono text-sm text-outline font-semibold">
                / {featuredVellum.index}
              </span>
            </div>
            
            <p className="mt-4 font-sans text-xs text-on-surface-variant leading-relaxed max-w-md font-light">
              {featuredVellum.description}
            </p>
          </div>
        )}

        {/* Right Side: The Atrium Lounge / The Boardroom */}
        {featuredBoardroom && (
          <div 
            onClick={() => onSelectProject(featuredBoardroom)}
            className="flex flex-col group cursor-pointer md:mt-24"
          >
            <div className="relative overflow-hidden aspect-[3/4] bg-warm-stone border border-deep-charcoal/5">
              {/* Card Label Tag */}
              <div className="absolute top-6 left-6 z-10 bg-deep-charcoal text-soft-linen px-3 py-1 text-[8px] font-mono tracking-widest uppercase">
                HOSPITALITY / INSTITUTIONAL • {featuredBoardroom.index}
              </div>

              <img
                src={featuredBoardroom.image}
                alt={featuredBoardroom.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Hover overlay with coordinates effect */}
              <div className="absolute inset-0 bg-deep-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="flex justify-between items-center w-full text-white">
                  <div className="font-mono text-[9px] tracking-wider uppercase">
                    YEAR: {featuredBoardroom.year} / AREA: {featuredBoardroom.area}
                  </div>
                  <div className="w-10 h-10 bg-champagne-glint text-deep-charcoal flex items-center justify-center">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-light text-deep-charcoal group-hover:text-champagne-glint transition-colors">
                  The Atrium Lounge
                </h3>
                <span className="font-sans text-[11px] text-outline tracking-wider font-semibold uppercase">
                  KOTHRUD, PUNE
                </span>
              </div>
              <span className="font-mono text-sm text-outline font-semibold">
                / {featuredBoardroom.index}
              </span>
            </div>
            
            <p className="mt-4 font-sans text-xs text-on-surface-variant leading-relaxed max-w-md font-light">
              An institutional lounge designed around classic wooden boards, vibrant architectural blueprint sketches, and clean linear illumination lines.
            </p>
          </div>
        )}

      </div>

      {/* View Full Portfolio Button */}
      <div className="mt-20 flex justify-center">
        <button
          onClick={onViewAll}
          className="border border-deep-charcoal text-deep-charcoal font-sans text-xs tracking-[0.25em] font-semibold px-10 py-4 hover:bg-deep-charcoal hover:text-soft-linen transition-all duration-300 rounded-none shadow-sm cursor-pointer"
        >
          VIEW PROJECT ARCHIVE
        </button>
      </div>
    </section>
  );
};
