import { useEffect, useRef, lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, personalInfo } from '../data/portfolioData';
import { TextMarquee } from './text-marquee';

// Dynamic lazy import of 3D Stethoscope component
const StethoscopeHero = lazy(() => import('./StethoscopeHero'));

/* ─── CLINICAL KEYWORDS FOR QUARRY TEXT MARQUEE ──────────────────── */
const CLINICAL_MARQUEE_WORDS = [
  "General Paediatrics",
  "Neonatal & Newborn Care",
  "PICU & Respiratory Support",
  "Acute & Emergency Triage",
  "Growth & Development",
  "Infectious Diseases in Children",
  "Evidence-Based Child Health",
];

/* ─── RESTRAINED SUBTLE PEDESTAL ────────────────────────────────── */
const RefinedPedestal = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
    {/* Soft inner glow ring */}
    <div className="w-64 sm:w-80 h-64 sm:h-80 rounded-full border border-sky-400/20 bg-gradient-to-b from-sky-400/5 to-transparent blur-[1px]" />
    {/* Concentric subtle base circle */}
    <div className="absolute w-48 sm:w-60 h-48 sm:h-60 rounded-full border border-sky-400/15" />
    {/* Soft radial under-glow */}
    <div className="absolute w-56 h-56 rounded-full bg-sky-500/10 blur-[60px]" />
  </div>
);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <header
      id="home"
      ref={heroRef}
      className="relative w-full min-h-screen pt-28 pb-16 md:py-36 flex flex-col justify-between overflow-hidden bg-[#061B3A] text-white"
    >
      {/* Background medical ambient light (soft and restrained) */}
      <div className="absolute top-12 left-1/4 w-[420px] h-[420px] bg-[#0284C7]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#0B2345]/50 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10 my-auto">
        
        {/* Left Column: Doctor Identity & Priority Information */}
        <div data-aos="fade-right" className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Clinical greeting chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {heroContent.greeting}
            </span>
          </div>

          {/* Headline - Doctor Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] mb-2 text-white">
            {heroContent.doctorName}
          </h1>

          {/* Professional Title */}
          <p className="text-xl sm:text-2xl font-bold text-[#38BDF8] tracking-tight mb-4">
            {heroContent.title}
          </p>

          {/* Institutional Designation & Core Credentials */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5 text-xs sm:text-sm font-semibold">
            <span className="px-3.5 py-1.5 rounded-xl bg-[#0B2345] border border-white/15 text-slate-200 shadow-sm">
              Senior Resident · SMVMCH, Puducherry
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-slate-200">
              3 Years Clinical Experience
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-slate-200">
              MBBS · MD Paediatrics (2025)
            </span>
          </div>

          {/* Subtitle / Care statement - High contrast readable text */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal mb-7">
            {heroContent.subtitle}
          </p>

          {/* Call to Actions (Enquiry-driven) */}
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <a
              href={heroContent.ctaPrimary.href}
              className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#061B3A] font-bold text-sm sm:text-base shadow-[0_8px_25px_rgba(2,132,199,0.35)] hover:shadow-[0_12px_32px_rgba(56,189,248,0.45)] hover:scale-[1.02] transition-all duration-300 flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 focus:ring-offset-[#061B3A]"
            >
              <span>{heroContent.ctaPrimary.text}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href={heroContent.ctaSecondary.href}
              className="px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {heroContent.ctaSecondary.text}
            </a>
          </div>

          {/* Direct Verified Contact Links */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-300 font-medium">
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
              aria-label="Call Dr. Janaki S"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{personalInfo.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
              aria-label="Email Dr. Janaki S"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{personalInfo.emails.primary}</span>
            </a>

            <span className="flex items-center gap-2 text-slate-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{personalInfo.location}</span>
            </span>
          </div>

        </div>

        {/* Right Column: 3D Stethoscope Experience with Controlled Framing */}
        <div data-aos="fade-left" data-aos-delay="150" className="lg:col-span-5 relative flex items-center justify-center">
          
          {/* Refined subtle pedestal */}
          <RefinedPedestal />

          {/* Contained 3D Model View */}
          <div className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center">
            <Suspense
              fallback={
                <div className="flex flex-col items-center justify-center gap-2 text-slate-400">
                  <div className="w-8 h-8 border-2 border-[#38BDF8] border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs">Loading 3D Stethoscope...</span>
                </div>
              }
            >
              <StethoscopeHero />
            </Suspense>
          </div>

        </div>
      </div>

      {/* Quarry UI Text Marquee for Clinical Keywords (Seamless, responsive infinitely scrolling strip) */}
      <div className="w-full mt-10 z-10">
        <TextMarquee
          words={CLINICAL_MARQUEE_WORDS}
          duration={30}
          className="border-white/10 bg-black/20 backdrop-blur-md"
        />
      </div>
    </header>
  );
};

export default Hero;
