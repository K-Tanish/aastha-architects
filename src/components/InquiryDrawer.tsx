import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, ArrowLeft, Send, Sparkles } from 'lucide-react';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  prepopulatedSubject?: string;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({ isOpen, onClose, prepopulatedSubject }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    scope: 'Residential',
    dimensions: '2,000 - 5,000 SQFT',
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle pre-population when drawer opens
  useEffect(() => {
    if (prepopulatedSubject) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in requesting a custom spatial specification case / brief regarding "${prepopulatedSubject}". Please share technical details.`,
        scope: prepopulatedSubject.toLowerCase().includes('suite') || prepopulatedSubject.toLowerCase().includes('lounge') 
          ? 'Hospitality' 
          : prepopulatedSubject.toLowerCase().includes('boardroom') || prepopulatedSubject.toLowerCase().includes('lab')
            ? 'Commercial'
            : 'Residential'
      }));
      setStep(1); // Reset step
    } else {
      setFormData({
        scope: 'Residential',
        dimensions: '2,000 - 5,000 SQFT',
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
      setStep(1);
    }
    setSubmitted(false);
    setError('');
  }, [isOpen, prepopulatedSubject]);

  // Prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!formData.fullName || !formData.email) {
        setError('Please specify your full name and email address.');
        return;
      }
      setError('');
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    setError('');
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message) {
      setError('Please add some preliminary notes about your vision.');
      return;
    }

    setError('');
    setSubmitting(true);

    // Simulate database sending
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Success auto-close after 5 seconds
      setTimeout(() => {
        onClose();
      }, 5000);
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-deep-charcoal"
          />

          {/* Sliding Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-lg bg-background border-l border-champagne-glint/20 shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-deep-charcoal/5 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] tracking-widest text-champagne-glint font-bold uppercase">PROJECT BUILDER</span>
                <span className="font-serif text-xl text-deep-charcoal mt-1">Configure Inquiry</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-deep-charcoal hover:bg-deep-charcoal/5 transition-colors border border-deep-charcoal/10 rounded-none cursor-pointer"
                aria-label="Close form"
              >
                <X size={16} />
              </button>
            </div>

            {/* Stepper indicator line */}
            {!submitted && (
              <div className="h-1 w-full bg-deep-charcoal/5 flex">
                <div 
                  className="h-full bg-deep-charcoal transition-all duration-500" 
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            )}

            {/* Form body scroll area */}
            <div className="flex-1 p-6 sm:p-8 overflow-y-auto">
              {submitted ? (
                /* Success view */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-champagne-glint/15 rounded-full flex items-center justify-center text-champagne-glint border border-champagne-glint/30 animate-bounce">
                    <Sparkles size={28} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-deep-charcoal">Brief Submitted</h3>
                    <p className="font-sans text-xs text-on-surface-variant font-light max-w-sm leading-relaxed">
                      Your spatial parameters have been processed. Our studio director will conduct a preliminary blueprint feasibility check and reach out in 24 hours.
                    </p>
                  </div>

                  <div className="p-4 bg-soft-linen border border-deep-charcoal/5 text-left text-xs space-y-1 w-full font-sans">
                    <span className="font-bold text-[9px] text-outline tracking-wider block uppercase mb-1">INQUIRY SPECS:</span>
                    <div><span className="text-outline">CLIENT:</span> <span className="font-medium text-deep-charcoal">{formData.fullName}</span></div>
                    <div><span className="text-outline">SCOPE:</span> <span className="font-medium text-deep-charcoal">{formData.scope}</span></div>
                    <div><span className="text-outline">EST. AREA:</span> <span className="font-medium text-deep-charcoal">{formData.dimensions}</span></div>
                  </div>

                  <button
                    onClick={onClose}
                    className="bg-deep-charcoal text-soft-linen font-sans text-xs tracking-widest py-3 px-8 hover:bg-champagne-glint hover:text-deep-charcoal transition-colors rounded-none cursor-pointer"
                  >
                    CLOSE WINDOW
                  </button>
                </motion.div>
              ) : (
                /* Interactive steps */
                <div className="space-y-6">
                  {error && (
                    <div className="bg-red-500/10 border-l-2 border-red-500 text-red-700 p-3 text-xs font-sans">
                      {error}
                    </div>
                  )}

                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="font-serif text-lg text-deep-charcoal border-b border-deep-charcoal/5 pb-2">01 / Choose Spatial Category</h3>
                      
                      {/* Project Scope Selection */}
                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-[9px] tracking-widest text-outline font-bold uppercase">BUILD SCOPE</label>
                        <select
                          name="scope"
                          value={formData.scope}
                          onChange={handleInputChange}
                          className="w-full bg-background border border-deep-charcoal/10 p-3 font-sans text-xs uppercase cursor-pointer focus:border-deep-charcoal focus:outline-none"
                        >
                          <option value="Residential">Residential Residence</option>
                          <option value="Commercial">Commercial Workspace</option>
                          <option value="Hospitality">Hospitality Suite/Lounge</option>
                          <option value="Other">Institutional / Other</option>
                        </select>
                      </div>

                      {/* Area Dimensions Selection */}
                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-[9px] tracking-widest text-outline font-bold uppercase">ESTIMATED VOLUME</label>
                        <select
                          name="dimensions"
                          value={formData.dimensions}
                          onChange={handleInputChange}
                          className="w-full bg-background border border-deep-charcoal/10 p-3 font-sans text-xs uppercase cursor-pointer focus:border-deep-charcoal focus:outline-none"
                        >
                          <option value="Under 2,000 SQFT">Under 2,000 SQFT</option>
                          <option value="2,000 - 5,000 SQFT">2,000 - 5,000 SQFT</option>
                          <option value="5,000 - 10,000 SQFT">5,000 - 10,000 SQFT</option>
                          <option value="Above 10,000 SQFT">Above 10,000 SQFT / Large Estate</option>
                        </select>
                      </div>

                      <div className="pt-6 bg-soft-linen/50 p-4 border border-deep-charcoal/5">
                        <p className="font-sans text-[11px] text-on-surface-variant leading-relaxed italic font-light">
                          Our team specializes in structural custom layout planning, bespoke built-in millwork drafting, and premium high-contrast raw material selection.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="font-serif text-lg text-deep-charcoal border-b border-deep-charcoal/5 pb-2">02 / Identity Coordinates</h3>
                      
                      {/* Name */}
                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-[9px] tracking-widest text-outline font-bold uppercase">FULL NAME *</label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full bg-background border border-deep-charcoal/10 p-3 font-sans text-xs focus:border-deep-charcoal focus:outline-none"
                          placeholder="Your full name"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-[9px] tracking-widest text-outline font-bold uppercase">EMAIL ADDRESS *</label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-background border border-deep-charcoal/10 p-3 font-sans text-xs focus:border-deep-charcoal focus:outline-none"
                          placeholder="e.g. aditya@company.com"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-[9px] tracking-widest text-outline font-bold uppercase">PHONE NUMBER</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-background border border-deep-charcoal/10 p-3 font-sans text-xs focus:border-deep-charcoal focus:outline-none"
                          placeholder="e.g. +91 98765-43210"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="font-serif text-lg text-deep-charcoal border-b border-deep-charcoal/5 pb-2">03 / Vision Brief</h3>
                      
                      {/* Message Brief */}
                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-[9px] tracking-widest text-outline font-bold uppercase">PRELIMINARY VISION NOTES *</label>
                        <textarea
                          required
                          rows={6}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-background border border-deep-charcoal/10 p-3 font-sans text-xs resize-none focus:border-deep-charcoal focus:outline-none"
                          placeholder="Please specify any core requirements, material preferences (e.g. wood, teak, marble, high-contrast basalt), or location parameters..."
                        />
                      </div>

                      <div className="p-4 bg-champagne-glint/5 text-[11px] font-sans text-deep-charcoal border border-champagne-glint/20">
                        <span className="font-semibold block mb-1">PROMPT SUMMARY:</span>
                        You are inquiring about a <span className="font-semibold">{formData.scope.toUpperCase()}</span> space of <span className="font-semibold">{formData.dimensions}</span>.
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </div>

            {/* Sticky bottom controls row */}
            {!submitted && (
              <div className="p-6 sm:p-8 border-t border-deep-charcoal/5 flex justify-between bg-soft-linen/30">
                {step > 1 ? (
                  <button
                    onClick={handlePrevStep}
                    className="border border-deep-charcoal/10 text-deep-charcoal px-5 py-3 text-xs font-sans tracking-widest font-semibold flex items-center space-x-2 hover:bg-deep-charcoal/5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    <span>BACK</span>
                  </button>
                ) : (
                  <div /> // spacer
                )}

                {step < 3 ? (
                  <button
                    onClick={handleNextStep}
                    className="bg-deep-charcoal text-soft-linen px-6 py-3 text-xs font-sans tracking-widest font-semibold flex items-center space-x-2 hover:bg-champagne-glint hover:text-deep-charcoal transition-colors cursor-pointer"
                  >
                    <span>CONTINUE</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="bg-deep-charcoal text-soft-linen px-6 py-3 text-xs font-sans tracking-widest font-semibold flex items-center space-x-2 hover:bg-champagne-glint hover:text-deep-charcoal transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <span>{submitting ? 'TRANSMITTING...' : 'SUBMIT BRIEF'}</span>
                    {submitting ? (
                      <div className="w-4 h-4 border-2 border-soft-linen border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send size={14} />
                    )}
                  </button>
                )}
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
