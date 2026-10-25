import { motion } from 'framer-motion';
import { educationList } from '../data/portfolioData';

const educationFlyDirections = [
  { x: -65, y: 30, rotate: -2 },
  { x: 65, y: 30, rotate: 2 },
];

const EducationCard = ({ edu, index }) => {
  const dir = educationFlyDirections[index % educationFlyDirections.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: dir.x, y: dir.y, rotate: dir.rotate, scale: 0.94 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 85,
        damping: 15,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -10,
        scale: 1.015,
        transition: { duration: 0.25 },
      }}
      className="group relative rounded-[28px] bg-gradient-to-b from-[#0284C7] via-[#0284C7] to-[#0369A1] p-2.5 pt-3.5 shadow-xl shadow-sky-950/20 flex flex-col items-center hover:shadow-2xl hover:shadow-sky-500/25 transition-shadow duration-300"
    >
    {/* Top Metallic Rivet / Dot Accent */}
    <div className="w-3.5 h-3.5 rounded-full bg-slate-200/90 ring-4 ring-white/20 shadow-inner mb-3 shrink-0" />

    {/* Deep Navy Inner Card */}
    <div className="w-full bg-[#0B2345] rounded-2xl p-7 flex flex-col justify-between flex-1 border border-white/5 text-white">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#38BDF8]">
            {index === 0 ? "MD Residency" : "MBBS Degree"}
          </span>
          <span className="text-xs font-mono font-semibold text-slate-300">
            {edu.period}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black mb-1.5 tracking-tight text-white">
          {edu.degree}
        </h3>
        <p className="text-base font-semibold text-[#38BDF8] mb-1">
          {edu.institution}
        </p>
        <p className="text-xs font-medium text-slate-300 mb-6 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{edu.location}</span>
        </p>

        <div className="space-y-2.5 border-t border-white/10 pt-5">
          {edu.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed font-normal">
              <span className="text-[#38BDF8] font-bold mt-0.5">•</span>
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="bg-slate-50 py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-slate-200 scroll-mt-24">
      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header with scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <div className="inline-block border border-slate-300 rounded-full px-4 py-1 text-xs font-semibold text-[#0284C7] mb-3 bg-white shadow-sm">
            Academic Background
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Medical Education
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Rigorous medical training from recognized government medical institutions in Chennai and Vijayawada.
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <EducationCard key={edu.degree} edu={edu} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
