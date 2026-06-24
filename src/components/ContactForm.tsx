import React, { useState } from 'react';
import { Mail, Phone, MapPin, Compass, ArrowUpRight, Check, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'Bespoke Residence',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const projectTypes = [
    'Bespoke Residence',
    'Commercial Space',
    'Hospitality Suite',
    'Institutional / Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    
    setError('');
    setSubmitting(true);

    // Simulate sending email inquiry
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        projectType: 'Bespoke Residence',
        message: ''
      });
      // Clear success notification after 7 seconds
      setTimeout(() => setSubmitted(false), 7000);
    }, 2000);
  };

  return (
    <section className="bg-background py-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto border-x border-deep-charcoal/5">
      <div className="blueprint-divider mb-16" data-coord="C-COORDINATE.TERMINAL.05" />

      {/* Main Headers */}
      <div className="flex flex-col space-y-4 mb-20 max-w-xl">
        <span className="font-mono text-[9px] tracking-[0.3em] font-bold text-champagne-glint uppercase">
          COORDINATE TERMINAL
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-deep-charcoal">
          Get in <span className="italic font-normal">Touch</span>
        </h1>
        <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-light">
          Connect with our drafting studio. Fill out the architectural inquiry form or visit our Pune headquarters to review spatial samples.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Info & Map / Image - 5 cols */}
        <div className="lg:col-span-5 flex flex-col space-y-12">
          
          {/* Quick contact coordinates */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-light text-deep-charcoal tracking-wide">
              Studio Coordinates
            </h2>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 border border-deep-charcoal/10 flex items-center justify-center text-champagne-glint mt-0.5">
                  <MapPin size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[9px] tracking-widest text-outline font-bold uppercase">PHYSICAL OFFICE</span>
                  <p className="font-sans text-xs text-deep-charcoal mt-1 leading-relaxed">
                    402-404, Vellum Arch,<br />
                    Karve Road, Kothrud,<br />
                    Pune - 411038, MH, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 border border-deep-charcoal/10 flex items-center justify-center text-champagne-glint mt-0.5">
                  <Phone size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[9px] tracking-widest text-outline font-bold uppercase">TELEPHONE</span>
                  <a href="tel:+912025439870" className="font-sans text-xs text-deep-charcoal mt-1 hover:text-champagne-glint transition-colors">
                    +91 (20) 2543-9870
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 border border-deep-charcoal/10 flex items-center justify-center text-champagne-glint mt-0.5">
                  <Mail size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[9px] tracking-widest text-outline font-bold uppercase">ELECTRONIC MAIL</span>
                  <a href="mailto:hello@aasthaarchitecture.com" className="font-sans text-xs text-deep-charcoal mt-1 hover:text-champagne-glint transition-colors">
                    hello@aasthaarchitecture.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Grayscale Architectural Image */}
          <div className="relative aspect-[3/2] overflow-hidden border border-deep-charcoal/5 bg-warm-stone">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVBTDneFNWeEKs3Y50MGIvlS0Pvmj50PHXE6aTIY4e_YNGSkmyNVO-OHOjNdmL-IG7u8GC2nnbixAMlRD6TwqJkIX3BkxDq_ASFEynbKrMaQB4H9ssS-Si_HkihUsWSp5kr4jiraepwQkbzuGuosJkKNp8KNhHiFCAM8360hzBthUtebNkXNMp2XyDmfiupQ8NoD7Gu9hgF0xNDPFPQ6o5qEv2i3WHiS07AyL2oL1YfFGvj2mOoxt_jPNS7zNjpzUcJBS2kWduARi_"
              alt="Grayscale Architectural Kitchen Space"
              className="w-full h-full object-cover filter brightness-[0.95]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 bg-deep-charcoal/85 backdrop-blur-xs text-soft-linen px-3 py-1.5 text-[8px] font-mono tracking-widest uppercase">
              SPECIMEN ROOM ARCHIVE
            </div>
          </div>

          {/* Stylized dark Vector Map (representing Pune) */}
          <div className="relative aspect-video bg-deep-charcoal p-6 overflow-hidden border border-champagne-glint/20">
            {/* Background design coordinates & compass */}
            <div className="absolute top-4 left-4 font-mono text-[8px] text-soft-linen/30 uppercase tracking-widest">
              SCHEMATIC MAP • PUNE METROPOLIS
            </div>
            <div className="absolute bottom-4 right-4 text-soft-linen/40 flex items-center space-x-1.5">
              <Compass size={14} className="text-champagne-glint animate-spin-slow" />
              <span className="font-mono text-[8px]">N // 18.5204° // E // 73.8567°</span>
            </div>

            {/* Drawing lines to simulate an architectural street schematic */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-soft-linen" />
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-soft-linen" />
              <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-soft-linen" />
              
              <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-soft-linen" />
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-soft-linen" />
              <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-soft-linen" />
              
              {/* Angular road line */}
              <div className="absolute top-0 left-0 w-full h-full border-t border-l border-soft-linen rotate-12 scale-150 transform origin-center" />
              <div className="absolute top-0 left-0 w-full h-full border-b border-r border-soft-linen -rotate-45 scale-150 transform origin-center" />
            </div>

            {/* Circle concentric sonar indicators representing location */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 border border-champagne-glint/30 rounded-full animate-ping absolute -inset-0" />
              <div className="w-10 h-10 border border-champagne-glint/50 rounded-full absolute -inset-0 m-auto" />
              <div className="w-3 h-3 bg-champagne-glint rounded-full absolute -inset-0 m-auto shadow-md" />
            </div>

            {/* Label box overlay */}
            <div className="absolute bottom-4 left-4 bg-background border border-deep-charcoal text-deep-charcoal px-3 py-1.5 text-[8px] font-mono tracking-widest uppercase font-semibold">
              AASTHA HQ • VELLUM ARCH
            </div>
          </div>

        </div>

        {/* Right Column: Inquiry Form - 7 cols */}
        <div className="lg:col-span-7 bg-soft-linen border border-deep-charcoal/5 p-8 sm:p-12 md:p-16 relative">
          {/* Subtle frame corner styling */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-deep-charcoal/15" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-deep-charcoal/15" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-deep-charcoal/15" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-deep-charcoal/15" />

          <div className="space-y-6 mb-8">
            <h2 className="font-serif text-2xl font-light text-deep-charcoal">
              Send an Inquiry
            </h2>
            <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-light">
              Submit your spatial requirements below. An architect from our Pune studio will analyze the brief and respond with preliminary considerations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="fullName" className="font-sans text-[9px] tracking-[0.2em] font-bold text-deep-charcoal/60 uppercase">
                FULL NAME *
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-background border border-deep-charcoal/10 px-4 py-3 font-sans text-xs tracking-wider rounded-none focus:outline-none focus:border-deep-charcoal text-deep-charcoal transition-all"
                placeholder="E.G. ADITYA SHARMA"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-sans text-[9px] tracking-[0.2em] font-bold text-deep-charcoal/60 uppercase">
                EMAIL ADDRESS *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-background border border-deep-charcoal/10 px-4 py-3 font-sans text-xs tracking-wider rounded-none focus:outline-none focus:border-deep-charcoal text-deep-charcoal transition-all"
                placeholder="E.G. ADITYA@COMPANY.COM"
              />
            </div>

            {/* Project Type Selector */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="projectType" className="font-sans text-[9px] tracking-[0.2em] font-bold text-deep-charcoal/60 uppercase">
                PROJECT TYPE
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full bg-background border border-deep-charcoal/10 px-4 py-3 font-sans text-xs tracking-wider rounded-none focus:outline-none focus:border-deep-charcoal text-deep-charcoal appearance-none cursor-pointer transition-all"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Message Brief */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="font-sans text-[9px] tracking-[0.2em] font-bold text-deep-charcoal/60 uppercase">
                PROJECT BRIEF / MESSAGE *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-background border border-deep-charcoal/10 px-4 py-3 font-sans text-xs tracking-wider rounded-none focus:outline-none focus:border-deep-charcoal text-deep-charcoal resize-none transition-all"
                placeholder="DESCRIBE THE SPACE, THE ESTIMATED AREA, AND VALUE HIGHLIGHTS..."
              />
            </div>

            {/* Notifications */}
            {error && (
              <div className="bg-red-500/10 border-l-2 border-red-500 text-red-700 px-4 py-3 text-xs font-sans tracking-wide">
                {error}
              </div>
            )}

            {submitted && (
              <div className="bg-emerald-500/10 border-l-2 border-emerald-500 text-emerald-800 px-4 py-3 text-xs font-sans tracking-wide space-y-1">
                <div className="flex items-center space-x-2 font-bold text-emerald-900">
                  <Check size={14} />
                  <span>TRANSMISSION SUCCESSFUL</span>
                </div>
                <p className="text-emerald-800/85 font-light">
                  Thank you! Your architectural inquiry has been logged securely. Our lead architect will follow up via your email shortly.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center space-x-3 bg-deep-charcoal text-soft-linen font-sans text-xs tracking-[0.25em] font-semibold py-4 hover:bg-champagne-glint hover:text-deep-charcoal transition-all duration-300 rounded-none shadow-sm cursor-pointer disabled:opacity-55"
              >
                <span>{submitting ? 'TRANSMITTING BRIEF...' : 'TRANSMIT INQUIRY'}</span>
                {submitting ? (
                  <div className="w-4 h-4 border-2 border-soft-linen border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send size={14} />
                )}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
