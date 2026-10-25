import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import doctorPhoto from '../assets/about/dr-janaki.png';
import { aboutContent } from '../data/portfolioData';

/* ─── PROFESSIONAL SVG ICONS FOR PRACTICE PILLS ──────────────────── */
const DisciplineIcon = ({ name }) => {
  switch (name) {
    case 'General Paediatrics':
      return (
        <svg className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4v16m-8-8h16" />
        </svg>
      );
    case 'Neonatal Care':
      return (
        <svg className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      );
    case 'PICU & Respiratory Support':
      return (
        <svg className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case 'Acute Emergency Care':
      return (
        <svg className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'Infectious Diseases':
      return (
        <svg className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
        </svg>
      );
    case 'Growth & Development':
      return (
        <svg className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18M7 17l4-4 4 4 5-6" />
        </svg>
      );
    default:
      return (
        <svg className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
};

/* ─── 3D DOCTOR CLINICAL ID BADGE ON PEDESTAL ───────────────────── */
const DoctorCard3D = () => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Pure scroll parallax: smooth continuous shift during scroll only (no hover shift)
  const scrollParallaxY = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <div className="about-3d-scene" data-aos="fade-right">
      {/* Background ambient lighting */}
      <div className="about-pedestal-glow" aria-hidden="true" />

      {/* Orbiting Glass Clinical SVG Icons */}
      <div className="about-orbit-container" aria-hidden="true">
        <div className="about-orbit-ring about-orbit-ring--1" />
        <div className="about-orbit-ring about-orbit-ring--2" />

        {/* Orbiting Node 1: Clinical Cross */}
        <div className="about-orbit-node about-orbit-node--sf">
          <div className="about-orbit-glass-orb flex items-center justify-center text-[#38BDF8]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4v16m-8-8h16" />
            </svg>
          </div>
        </div>

        {/* Orbiting Node 2: Infant Care Care Shield */}
        <div className="about-orbit-node about-orbit-node--code">
          <div className="about-orbit-glass-orb flex items-center justify-center text-[#38BDF8]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
        </div>

        {/* Orbiting Node 3: Heartbeat Pulse */}
        <div className="about-orbit-node about-orbit-node--cloud">
          <div className="about-orbit-glass-orb flex items-center justify-center text-[#38BDF8]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Clinical ID Card Holder */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Lanyard Clip */}
        <div className="about-badge-clip">
          <div className="about-badge-clip-bar" />
        </div>

        {/* 3D Acrylic Doctor Identity Card */}
        <div
          ref={cardRef}
          className="about-id-card flex flex-col justify-between p-5 bg-gradient-to-b from-[#0B2345] to-[#061B3A] border border-white/15 shadow-2xl rounded-2xl"
          style={{ minHeight: '370px', width: '275px' }}
        >
          {/* Top Medical Institution Header */}
          <div className="border-b border-white/10 pb-2.5 text-center">
            <span className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-wider">
              Hospital Residency Profile
            </span>
            <p className="text-xs font-semibold text-slate-200 leading-tight mt-0.5">
              SMVMCH, Puducherry
            </p>
          </div>

          {/* Doctor Portrait Photo Frame with Pure Scroll Parallax & Zero Edge Exposure */}
          <div className="my-2.5 relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/20 shadow-lg bg-[#061B3A]">
            <motion.div
              style={{
                y: scrollParallaxY,
              }}
              className="absolute inset-[-16%] w-[132%] h-[132%] will-change-transform pointer-events-none"
            >
              <img
                src={doctorPhoto}
                alt="Dr. Janaki S, Paediatrician"
                className="w-full h-full object-cover object-top"
                draggable={false}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/90 via-[#061B3A]/15 to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
              <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-md bg-[#0B2345]/90 border border-white/20 backdrop-blur-sm shadow">
                Dr. Janaki S
              </span>
              <span className="text-[9px] font-semibold text-[#38BDF8] px-2 py-0.5 rounded-md bg-[#0284C7]/20 border border-[#38BDF8]/30 shadow">
                Paediatrician
              </span>
            </div>
          </div>

          {/* Card Footer Credentials */}
          <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-[11px]">
            <div>
              <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-semibold">Qualifications</span>
              <span className="text-white font-medium">MBBS, MD (2025)</span>
            </div>
            <div className="text-right">
              <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-semibold">Experience</span>
              <span className="text-[#38BDF8] font-bold">3 Years</span>
            </div>
          </div>
        </div>

        {/* 3D Pedestal Base */}
        <div className="about-pedestal-base" aria-hidden="true">
          <div className="about-pedestal-ring about-pedestal-ring--top" />
          <div className="about-pedestal-ring about-pedestal-ring--mid" />
          <div className="about-pedestal-cylinder" />
          <div className="about-pedestal-floor-glow" />
        </div>
      </div>
    </div>
  );
};

/* ─── MAIN ABOUT SECTION ────────────────────────────────────────── */
const About = () => {
  const disciplines = [
    'General Paediatrics',
    'Neonatal Care',
    'PICU & Respiratory Support',
    'Acute Emergency Care',
    'Infectious Diseases',
    'Growth & Development',
  ];

  return (
    <section id="about" className="bg-[#061B3A] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/10 scroll-mt-24">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0284C7]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-14 text-center md:text-left">
          <div className="inline-block border border-white/15 rounded-full px-3.5 py-1 text-xs font-semibold text-[#38BDF8] mb-3 bg-white/5 backdrop-blur-sm">
            Professional Background
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {aboutContent.heading}
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-normal mt-2 max-w-2xl">
            {aboutContent.subheading}
          </p>
        </div>

        {/* Main Grid: Doctor Card + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 3D Doctor Card */}
          <div className="lg:col-span-5 flex justify-center">
            <DoctorCard3D />
          </div>

          {/* Right: Narrative & Verified Highlights */}
          <div data-aos="fade-left" className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Paragraphs with high contrast legibility */}
            <div className="space-y-4 text-base leading-relaxed text-slate-200 font-normal">
              {aboutContent.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Core Practice Areas Pills */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-3">
                Core Clinical Practice Areas
              </p>
              <div className="flex flex-wrap gap-2.5">
                {disciplines.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B2345] border border-white/15 text-slate-200 text-xs font-medium shadow-sm hover:border-[#38BDF8]/40 transition-colors"
                  >
                    <DisciplineIcon name={item} />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Factual Credential Badges Row */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Current Designation</p>
                <p className="text-sm font-bold text-white mt-1">Senior Resident</p>
                <p className="text-xs text-slate-300">SMVMCH Puducherry</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Post-Graduation</p>
                <p className="text-sm font-bold text-white mt-1">MD Paediatrics</p>
                <p className="text-xs text-slate-300">Completed in 2025</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Professional Body</p>
                <p className="text-sm font-bold text-white mt-1">IAP Member</p>
                <p className="text-xs text-[#38BDF8] font-medium">Indian Academy of Paediatrics</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
