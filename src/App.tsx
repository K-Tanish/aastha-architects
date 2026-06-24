import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, Shield, Trophy, ChevronRight, ArrowUpRight } from 'lucide-react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { CuratedPortfolio } from './components/CuratedPortfolio';
import { Methodology } from './components/Methodology';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ContactForm } from './components/ContactForm';
import { ProjectModal } from './components/ProjectModal';
import { InquiryDrawer } from './components/InquiryDrawer';

import { PROJECTS } from './data';
import { Project } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquiryDrawerOpen, setInquiryDrawerOpen] = useState<boolean>(false);
  const [prepopulatedSubject, setPrepopulatedSubject] = useState<string>('');

  // Handle requesting a brief from the project modal
  const handleRequestBrief = (projectTitle: string) => {
    setPrepopulatedSubject(projectTitle);
    setSelectedProject(null); // Close project modal
    setInquiryDrawerOpen(true); // Open inquiry drawer
  };

  const handleOpenInquiry = () => {
    setPrepopulatedSubject('');
    setInquiryDrawerOpen(true);
  };

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentTab]);

  return (
    <div className="min-h-screen bg-background text-deep-charcoal font-sans selection:bg-champagne-glint selection:text-deep-charcoal relative">
      


      {/* Navigation Header */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        onOpenInquiry={handleOpenInquiry} 
      />

      {/* Main Page Content Render */}
      <main className="relative">
        <AnimatePresence mode="wait">
          {currentTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Hero Banner Component */}
              <Hero 
                onExplore={() => setCurrentTab('portfolio')} 
                onInquire={handleOpenInquiry} 
              />

              {/* Essence / Philosophy Section */}
              <section className="bg-background py-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto border-x border-deep-charcoal/5">
                <div className="blueprint-divider mb-16" data-coord="C-OUR.ESSENCE.01" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  
                  {/* Left sub-col: Descriptive brief */}
                  <div className="lg:col-span-7 space-y-6">
                    <span className="font-mono text-[9px] tracking-[0.3em] font-bold text-champagne-glint uppercase block">
                      OUR PHILOSOPHY
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-deep-charcoal leading-tight">
                      Crafting environments of<br />
                      <span className="italic font-normal font-serif text-champagne-glint">absolute precision.</span>
                    </h2>
                    <p className="font-sans text-sm text-on-surface-variant leading-relaxed max-w-2xl font-light">
                      At Aastha, we do not simply draft layouts; we orchestrate physical canvases. Every residence, workspace, and hospitality lounge is meticulously configured to harmonize absolute engineering precision with a deep material design narrative.
                    </p>
                    <p className="font-sans text-xs text-on-surface-variant/80 leading-relaxed max-w-2xl font-light">
                      We believe true luxury is quiet. It manifests in the clean seamless alignment of walnut cabinetry, the shadow-lines framing double-height concrete facades, and the curated reflection of warm LED grids on natural Indian basalt stone surfaces.
                    </p>
                  </div>

                  {/* Right sub-col: Studio credentials / Stats */}
                  <div className="lg:col-span-5 bg-soft-linen border border-deep-charcoal/5 p-8 sm:p-10 relative">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-deep-charcoal/15" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-deep-charcoal/15" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-deep-charcoal/15" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-deep-charcoal/15" />

                    <h3 className="font-serif text-lg font-medium text-deep-charcoal mb-6 border-b border-deep-charcoal/10 pb-2">
                      Studio Metrics
                    </h3>

                    <div className="space-y-6">
                      <div className="flex justify-between items-end border-b border-dashed border-deep-charcoal/10 pb-3">
                        <div className="flex flex-col">
                          <span className="font-serif text-2xl font-medium text-deep-charcoal">30+</span>
                          <span className="font-sans text-[9px] tracking-widest text-outline font-bold uppercase">Structures Curated</span>
                        </div>
                        <span className="font-mono text-[9px] text-champagne-glint">PUNE_REGION</span>
                      </div>

                      <div className="flex justify-between items-end border-b border-dashed border-deep-charcoal/10 pb-3">
                        <div className="flex flex-col">
                          <span className="font-serif text-2xl font-medium text-deep-charcoal">100%</span>
                          <span className="font-sans text-[9px] tracking-widest text-outline font-bold uppercase">Bespoke Blueprinting</span>
                        </div>
                        <span className="font-mono text-[9px] text-champagne-glint">BIM_DRAFTED</span>
                      </div>

                      <div className="flex justify-between items-end">
                        <div className="flex flex-col">
                          <span className="font-serif text-2xl font-medium text-deep-charcoal">0px</span>
                          <span className="font-sans text-[9px] tracking-widest text-outline font-bold uppercase">Sharp Corners Language</span>
                        </div>
                        <span className="font-mono text-[9px] text-champagne-glint">0px_CORNER</span>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Curated Portfolio Selected Works Gallery */}
              <CuratedPortfolio 
                projects={PROJECTS} 
                onSelectProject={setSelectedProject} 
                onViewAll={() => setCurrentTab('portfolio')} 
              />

              {/* Large Atmospheric Quote Block */}
              <section className="bg-deep-charcoal text-soft-linen py-32 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto border-x border-champagne-glint/10 relative text-center">
                {/* Subtle drafting grid */}
                <div className="absolute top-4 left-4 font-mono text-[8px] text-soft-linen/25 uppercase tracking-widest">
                  MONOGRAPH MON.01 // PHILOSOPHY
                </div>
                
                <div className="max-w-4xl mx-auto space-y-8">
                  <Compass size={32} className="mx-auto text-champagne-glint animate-spin-slow" />
                  
                  <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic leading-relaxed text-white">
                    "Design is not the decoration of a structural barrier, but the orchestration of an environment. We seek total spatial honesty, framing the light that falls upon raw, tactile materiality."
                  </blockquote>
                  
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-[1px] bg-champagne-glint/40 mb-3" />
                    <span className="font-sans text-[10px] tracking-[0.25em] font-semibold text-champagne-glint uppercase">
                      STUDIO PRINCIPLES
                    </span>
                    <span className="font-mono text-[9px] text-soft-linen/40 uppercase mt-1">
                      ESTABLISHED IN MH, INDIA
                    </span>
                  </div>
                </div>
              </section>

              {/* Methodology Process Section */}
              <Methodology />

            </motion.div>
          )}

          {currentTab === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Portfolio Grid Repository view */}
              <PortfolioGrid 
                projects={PROJECTS} 
                onSelectProject={setSelectedProject} 
                onOpenInquiry={handleOpenInquiry} 
              />
            </motion.div>
          )}

          {currentTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Detailed Services & Capabilities view */}
              <section className="bg-background py-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto border-x border-deep-charcoal/5">
                <div className="blueprint-divider mb-16" data-coord="S-SERVICES.SERVICES.04" />

                {/* Header */}
                <div className="flex flex-col space-y-4 mb-20 max-w-xl">
                  <span className="font-mono text-[9px] tracking-[0.3em] font-bold text-champagne-glint uppercase">
                    CAPABILITY PARAMETERS
                  </span>
                  <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-deep-charcoal">
                    Architectural <span className="italic font-normal">Services</span>
                  </h1>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-light">
                    Our studio offers three highly specialized spatial capability services. We control the complete lifecycle from spatial drafting to final onsite synthesis.
                  </p>
                </div>

                {/* Services Expanded Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 mb-24">
                  
                  {/* Service 1: Residential */}
                  <div className="bg-soft-linen p-8 sm:p-10 border border-deep-charcoal/5 flex flex-col justify-between h-full relative rounded-none">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-deep-charcoal/10" />
                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-deep-charcoal text-champagne-glint flex items-center justify-center border border-soft-linen/10">
                        <Shield size={20} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-2xl font-light text-deep-charcoal">Residential Curation</h3>
                      <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-light">
                        We draft full turnkey blueprints for high-end custom residences, penthouses, and large suburban estates. Our team designs custom built-in cabinetry, floating stairways, and indoor light wells.
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-dashed border-deep-charcoal/10 text-[9px] font-mono text-outline flex justify-between items-center">
                      <span>TYPE: ARCH_RES</span>
                      <ChevronRight size={12} />
                    </div>
                  </div>

                  {/* Service 2: Commercial */}
                  <div className="bg-soft-linen p-8 sm:p-10 border border-deep-charcoal/5 flex flex-col justify-between h-full relative rounded-none">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-deep-charcoal/10" />
                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-deep-charcoal text-champagne-glint flex items-center justify-center border border-soft-linen/10">
                        <Trophy size={20} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-2xl font-light text-deep-charcoal">Commercial Zoning</h3>
                      <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-light">
                        Specializing in modern workspace organization, corporate boardrooms, and public retail showrooms. We combine functional circulation workflows with striking, geometric spatial dividers and LED light bars.
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-dashed border-deep-charcoal/10 text-[9px] font-mono text-outline flex justify-between items-center">
                      <span>TYPE: ARCH_COM</span>
                      <ChevronRight size={12} />
                    </div>
                  </div>

                  {/* Service 3: Hospitality */}
                  <div className="bg-soft-linen p-8 sm:p-10 border border-deep-charcoal/5 flex flex-col justify-between h-full relative rounded-none">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-deep-charcoal/10" />
                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-deep-charcoal text-champagne-glint flex items-center justify-center border border-soft-linen/10">
                        <Sparkles size={20} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-2xl font-light text-deep-charcoal">Hospitality Suites</h3>
                      <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-light">
                        Bespoke bedroom suites, wellness spaces, and fine dining lounges. We craft specialized backlit paneling layouts, rosewood and onyx finishes, and geometric drop ceiling matrices.
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-dashed border-deep-charcoal/10 text-[9px] font-mono text-outline flex justify-between items-center">
                      <span>TYPE: ARCH_HOS</span>
                      <ChevronRight size={12} />
                    </div>
                  </div>

                </div>

                {/* Service Specs Details banner */}
                <div className="p-8 md:p-12 bg-deep-charcoal text-soft-linen relative rounded-none flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
                  <div className="absolute top-0 left-0 w-8 h-[1px] bg-champagne-glint" />
                  <div className="space-y-2 max-w-xl text-center md:text-left">
                    <span className="font-sans text-[10px] tracking-[0.25em] font-semibold text-champagne-glint uppercase block">INQUIRY PATHWAY</span>
                    <h2 className="font-serif text-2xl md:text-3xl font-light leading-tight">Ready to integrate our drafts?</h2>
                    <p className="font-sans text-xs text-soft-linen/70 font-light">
                      Request custom specification briefs or contact our Pune drafting studio to arrange a consultation regarding our three capability domains.
                    </p>
                  </div>
                  <button
                    onClick={handleOpenInquiry}
                    className="bg-champagne-glint text-deep-charcoal font-sans text-xs tracking-[0.2em] font-semibold px-8 py-4 hover:bg-white transition-all duration-300 rounded-none whitespace-nowrap cursor-pointer shadow-md"
                  >
                    REQUEST SERVICE BRIEF
                  </button>
                </div>
              </section>

              {/* Methodology blueprint section */}
              <Methodology />
            </motion.div>
          )}

          {currentTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Contact Page form & Info & schematic Map */}
              <ContactForm />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Shared Footer component */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Project details overlay modal popup */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            onRequestBrief={handleRequestBrief} 
          />
        )}
      </AnimatePresence>

      {/* Slide-over Inquiry Drawer Modal */}
      <InquiryDrawer 
        isOpen={inquiryDrawerOpen} 
        onClose={() => setInquiryDrawerOpen(false)} 
        prepopulatedSubject={prepopulatedSubject}
      />

    </div>
  );
}
