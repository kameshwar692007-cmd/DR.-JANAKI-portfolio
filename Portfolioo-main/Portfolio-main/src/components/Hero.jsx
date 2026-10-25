import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, personalInfo } from '../data/portfolioData';
import { TextMarquee } from './text-marquee';

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

        {/* Right Column: Premium Clinical Identity Presentation (Clean, Modern 2D Medical Card) */}
        <div data-aos="fade-left" data-aos-delay="150" className="lg:col-span-5 relative flex items-center justify-center">
          
          {/* Subtle Ambient Underglow */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#0284C7]/20 to-[#38BDF8]/10 blur-[90px] pointer-events-none" />

          {/* Clinical Profile Card */}
          <div className="relative z-10 w-full max-w-[440px] rounded-3xl bg-gradient-to-b from-[#0B2345] to-[#071E3D] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-sky-950/40">
            
            {/* Top Bar: Verification & Status */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v16m-8-8h16" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-tight">Clinical Practice</h3>
                  <p className="text-xs text-slate-300 font-medium">SMVMCH · Dept. of Paediatrics</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Senior Resident
              </div>
            </div>

            {/* Core Competencies Quick Grid */}
            <div className="grid grid-cols-2 gap-3 my-5">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38BDF8]/40 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#0284C7]/20 text-[#38BDF8] flex items-center justify-center mb-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v16m-8-8h16" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold text-xs mb-0.5">General Paediatrics</h4>
                <p className="text-[11px] text-slate-300">Acute &amp; Preventive Care</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38BDF8]/40 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#0284C7]/20 text-[#38BDF8] flex items-center justify-center mb-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold text-xs mb-0.5">Neonatal Care</h4>
                <p className="text-[11px] text-slate-300">NICU &amp; Newborn Support</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38BDF8]/40 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#0284C7]/20 text-[#38BDF8] flex items-center justify-center mb-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold text-xs mb-0.5">PICU Care</h4>
                <p className="text-[11px] text-slate-300">Respiratory &amp; Critical Care</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38BDF8]/40 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#0284C7]/20 text-[#38BDF8] flex items-center justify-center mb-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold text-xs mb-0.5">Emergency Triage</h4>
                <p className="text-[11px] text-slate-300">Immediate Resuscitation</p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="p-4 rounded-2xl bg-[#061B3A]/80 border border-white/10 flex items-center justify-between text-center">
              <div>
                <p className="text-base sm:text-lg font-black text-white">3 Years</p>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Experience</p>
              </div>
              <div className="h-7 w-px bg-white/15" />
              <div>
                <p className="text-base sm:text-lg font-black text-[#38BDF8]">MD Paed.</p>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Completed 2025</p>
              </div>
              <div className="h-7 w-px bg-white/15" />
              <div>
                <p className="text-base sm:text-lg font-black text-white">IAP Member</p>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">BLS / ACLS</p>
              </div>
            </div>

            {/* Location & Hospital Chip */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                Sri Manakula Vinayagar Hospital
              </span>
              <span className="font-semibold text-slate-400">Puducherry</span>
            </div>

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
