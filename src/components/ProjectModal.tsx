import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Calendar, Maximize, MapPin, Layers, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestBrief: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestBrief }) => {
  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10 bg-deep-charcoal/90 backdrop-blur-md">
      
      {/* Modal Card wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative bg-background w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl border border-champagne-glint/20 rounded-none flex flex-col md:flex-row"
      >
        {/* Subtle decorative draft brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-deep-charcoal/20" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-deep-charcoal/20" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-deep-charcoal/20" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-deep-charcoal/20" />

        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-deep-charcoal text-soft-linen hover:bg-champagne-glint hover:text-deep-charcoal transition-colors flex items-center justify-center cursor-pointer rounded-none border border-soft-linen/10"
          aria-label="Close details"
        >
          <X size={18} />
        </button>

        {/* Left Side: High-impact image (60% width on large screens) */}
        <div className="w-full md:w-3/5 bg-warm-stone relative aspect-video md:aspect-auto md:min-h-[500px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 bg-deep-charcoal text-soft-linen px-3 py-1.5 text-[9px] font-mono tracking-widest uppercase">
            PROJECT ARCHIVE // INDEX {project.index}
          </div>
        </div>

        {/* Right Side: Specifications and descriptions (40% width) */}
        <div className="w-full md:w-2/5 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-background border-t md:border-t-0 md:border-l border-deep-charcoal/10">
          
          {/* Section 1: Title & Category */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-champagne-glint font-mono text-[9px] tracking-widest uppercase font-bold">
              <span>{project.category}</span>
              <span>•</span>
              <span>INDEX: {project.index}</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-deep-charcoal leading-tight">
              {project.title}
            </h2>
            
            <div className="flex items-center space-x-1.5 text-outline">
              <MapPin size={12} />
              <span className="font-sans text-[10px] tracking-widest font-semibold uppercase">{project.location}</span>
            </div>
          </div>

          {/* Section 2: Technical specifications grid */}
          <div className="grid grid-cols-2 gap-6 py-6 border-y border-dashed border-deep-charcoal/15 text-xs">
            <div className="flex items-start space-x-2.5">
              <Calendar size={14} className="text-champagne-glint mt-0.5" />
              <div className="flex flex-col">
                <span className="font-mono text-[8px] tracking-widest text-outline uppercase">YEAR</span>
                <span className="font-sans font-medium text-deep-charcoal mt-0.5">{project.year || '2023'}</span>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <Maximize size={14} className="text-champagne-glint mt-0.5" />
              <div className="flex flex-col">
                <span className="font-mono text-[8px] tracking-widest text-outline uppercase">VOLUME</span>
                <span className="font-sans font-medium text-deep-charcoal mt-0.5">{project.area || '4,200 sqft'}</span>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <Layers size={14} className="text-champagne-glint mt-0.5" />
              <div className="flex flex-col">
                <span className="font-mono text-[8px] tracking-widest text-outline uppercase">SERVICE TYPE</span>
                <span className="font-sans font-medium text-deep-charcoal mt-0.5">Full Turnkey Drafting</span>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <X size={14} className="text-transparent mt-0.5" /> {/* placeholder */}
              <div className="flex flex-col">
                <span className="font-mono text-[8px] tracking-widest text-outline uppercase">REPRESENTATION</span>
                <span className="font-sans font-medium text-deep-charcoal mt-0.5">3D BIM Curated</span>
              </div>
            </div>
          </div>

          {/* Section 3: Descriptive text */}
          <div className="space-y-6">
            <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-light">
              {project.description}
            </p>

            {/* Quick action request brief */}
            <button
              onClick={() => onRequestBrief(project.title)}
              className="w-full bg-deep-charcoal text-soft-linen font-sans text-xs tracking-[0.2em] font-medium py-3.5 hover:bg-champagne-glint hover:text-deep-charcoal transition-all duration-300 flex items-center justify-center space-x-2 rounded-none cursor-pointer"
            >
              <span>REQUEST SPECIFICATION CASE</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

        </div>

      </motion.div>
    </div>
  );
};
