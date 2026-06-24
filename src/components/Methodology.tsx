import React from 'react';
import { Compass, PencilRuler, DraftingCompass } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export const Methodology: React.FC = () => {
  const icons = [
    <DraftingCompass className="text-champagne-glint" size={24} strokeWidth={1.5} />,
    <PencilRuler className="text-champagne-glint" size={24} strokeWidth={1.5} />,
    <Compass className="text-champagne-glint" size={24} strokeWidth={1.5} />
  ];

  return (
    <section className="bg-soft-linen py-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto border-x border-deep-charcoal/5 relative overflow-hidden">
      {/* Drafting Crosshair Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] border-t border-dashed border-deep-charcoal" />
        <div className="absolute left-1/3 top-0 bottom-0 w-[1px] border-l border-dashed border-deep-charcoal" />
        <div className="absolute left-2/3 top-0 bottom-0 w-[1px] border-l border-dashed border-deep-charcoal" />
      </div>

      <div className="blueprint-divider mb-16" data-coord="B-EXCELLENCE.BLUEPRINT.03" />

      {/* Header */}
      <div className="flex flex-col space-y-4 mb-20 max-w-xl relative z-10">
        <span className="font-mono text-[9px] tracking-[0.3em] font-bold text-champagne-glint uppercase">
          OUR SYSTEMIC APPROACH
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-deep-charcoal">
          The Blueprint of <span className="italic font-normal font-serif text-champagne-glint">Excellence</span>
        </h2>
        <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-light">
          We maintain absolute control over the entire development chain, applying meticulous care to convert primary sketches into physical milestones.
        </p>
      </div>

      {/* Process steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 relative z-10">
        {PROCESS_STEPS.map((step, idx) => (
          <div 
            key={step.index} 
            className="flex flex-col justify-between p-8 bg-background border border-deep-charcoal/5 hover:border-champagne-glint transition-colors duration-500 rounded-none relative group h-full"
          >
            {/* Corner Bracket decorations */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-deep-charcoal/10 group-hover:border-champagne-glint transition-colors" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-deep-charcoal/10 group-hover:border-champagne-glint transition-colors" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-deep-charcoal/10 group-hover:border-champagne-glint transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-deep-charcoal/10 group-hover:border-champagne-glint transition-colors" />

            <div className="space-y-6">
              {/* Step number and icon */}
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs tracking-widest text-champagne-glint font-bold">
                  PHASE / {step.index}
                </span>
                <div className="w-10 h-10 flex items-center justify-center bg-soft-linen border border-deep-charcoal/5 group-hover:bg-deep-charcoal group-hover:text-champagne-glint transition-all duration-500">
                  {icons[idx]}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-medium text-deep-charcoal">
                {step.title}
              </h3>
            </div>

            {/* Description */}
            <p className="mt-6 font-sans text-xs text-on-surface-variant leading-relaxed font-light">
              {step.description}
            </p>
            
            {/* Coordinates line */}
            <div className="mt-8 pt-4 border-t border-dashed border-deep-charcoal/10 flex justify-between items-center text-[9px] font-mono text-outline">
              <span>AXIS / X-Y.{step.index}</span>
              <span className="group-hover:text-champagne-glint transition-colors">SECURE_DRAFT</span>
            </div>
          </div>
        ))}
      </div>

      {/* Grid coordinates indicators in bottom margin */}
      <div className="mt-20 flex justify-between font-mono text-[9px] text-outline uppercase tracking-widest pt-4 border-t border-deep-charcoal/5">
        <span>REF: SCALE_1-100</span>
        <span className="hidden sm:block">GRID REF: AS-M3</span>
        <span>LATERAL_CALC: COMPLETE</span>
      </div>
    </section>
  );
};
