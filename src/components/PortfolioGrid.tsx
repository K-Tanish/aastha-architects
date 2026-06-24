import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Search, SlidersHorizontal } from 'lucide-react';
import { Project } from '../types';

interface PortfolioGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenInquiry: () => void;
}

type CategoryFilter = 'ALL' | 'RESIDENTIAL' | 'COMMERCIAL' | 'HOSPITALITY' | 'INSTITUTIONAL';

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects, onSelectProject, onOpenInquiry }) => {
  const [filter, setFilter] = useState<CategoryFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // We filter the actual 6 main archive projects listed in the mockup (01 - 06)
  // PROJECTS array in data.ts has 7 items, let's include all of them or filter based on query
  const categories: CategoryFilter[] = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'HOSPITALITY', 'INSTITUTIONAL'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === 'ALL' || project.category.toUpperCase() === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-background py-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto border-x border-deep-charcoal/5">
      <div className="blueprint-divider mb-16" data-coord="P-PORTFOLIO.ARCHIVE.01" />

      {/* Main Title Headers */}
      <div className="flex flex-col space-y-4 mb-16 max-w-xl">
        <span className="font-mono text-[9px] tracking-[0.3em] font-bold text-champagne-glint uppercase">
          PROJECT REPOSITORY
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-deep-charcoal">
          The Project <span className="italic font-normal">Archive</span>
        </h1>
        <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-light">
          An interactive, searchable index of our structural masterpieces, bespoke interiors, and corporate environments.
        </p>
      </div>

      {/* Filter and Search Bar controls */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-6 pb-8 border-b border-deep-charcoal/10 mb-16">
        
        {/* Category Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 font-sans text-[10px] tracking-widest font-semibold rounded-none cursor-pointer border transition-all duration-300 ${
                filter === cat
                  ? 'bg-deep-charcoal border-deep-charcoal text-soft-linen'
                  : 'bg-transparent border-deep-charcoal/10 text-deep-charcoal/60 hover:text-deep-charcoal hover:border-deep-charcoal/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input field */}
        <div className="relative min-w-xs md:min-w-sm">
          <input
            type="text"
            placeholder="SEARCH BY NAME, LOCATION..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-soft-linen/5 border border-deep-charcoal/15 px-4 py-2.5 font-sans text-xs tracking-wider rounded-none focus:outline-none focus:border-champagne-glint text-deep-charcoal placeholder-deep-charcoal/40 transition-colors"
          />
          <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-deep-charcoal/40" />
        </div>
      </div>

      {/* Grid List */}
      <AnimatePresence mode="popLayout">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20 border border-dashed border-deep-charcoal/10 bg-soft-linen/20"
          >
            <SlidersHorizontal size={32} className="mx-auto text-outline/30 mb-4" />
            <span className="font-serif text-lg text-deep-charcoal block mb-2">No Projects Match Your Selection</span>
            <span className="font-sans text-xs text-on-surface-variant font-light">Try adjusting your category filters or search query terms.</span>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col justify-between h-full bg-soft-linen/10 border border-deep-charcoal/5 p-4 hover:border-champagne-glint hover:bg-white transition-all duration-500 rounded-none"
              >
                <div>
                  {/* Image wrapper */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-warm-stone border border-deep-charcoal/5 mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-deep-charcoal text-soft-linen px-2.5 py-1 text-[8px] font-mono tracking-widest uppercase">
                      {project.category}
                    </div>
                  </div>

                  {/* Info block */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-light text-deep-charcoal group-hover:text-champagne-glint transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-outline font-semibold">
                      /{project.index}
                    </span>
                  </div>

                  <span className="font-sans text-[10px] text-outline font-bold tracking-widest uppercase block mb-3">
                    {project.location}
                  </span>
                </div>

                <div>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-6 font-light line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-dashed border-deep-charcoal/10 flex justify-between items-center">
                    <span className="font-mono text-[9px] text-outline font-medium tracking-wider">
                      {project.area ? `AREA: ${project.area}` : 'STUDIO CASE'}
                    </span>
                    <button className="text-champagne-glint group-hover:text-deep-charcoal flex items-center space-x-1.5 text-[9px] font-sans font-bold tracking-widest transition-colors cursor-pointer">
                      <span>VIEW SPECS</span>
                      <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA section at bottom */}
      <div className="mt-28 py-16 px-8 bg-deep-charcoal text-soft-linen text-center relative overflow-hidden rounded-none">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-8 h-[1px] bg-champagne-glint" />
        <div className="absolute top-0 left-0 w-[1px] h-8 bg-champagne-glint" />
        <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-champagne-glint" />
        <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-champagne-glint" />

        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <span className="font-sans text-[10px] tracking-[0.3em] font-semibold text-champagne-glint uppercase block">
            COLLABORATION TERMINAL
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-tight">
            Have a vision for your <span className="italic font-normal font-serif text-champagne-glint">next space?</span>
          </h2>
          <p className="font-sans text-xs text-soft-linen/70 leading-relaxed font-light">
            Whether you are commissioning a bespoke luxury residence, a contemporary workspace, or a fine hospitality lounge, our drafting studio is prepared to guide your vision.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenInquiry}
              className="bg-champagne-glint text-deep-charcoal font-sans text-xs tracking-[0.25em] font-semibold px-8 py-3.5 hover:bg-white transition-all duration-300 rounded-none shadow-md cursor-pointer"
            >
              START A PROJECT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
