import { motion } from 'framer-motion';
import { carePathway } from '../data/portfolioData';

const pathwayDirections = [
  { x: -55, y: 35, rotate: -2.5 },
  { x: -15, y: 50, rotate: -1 },
  { x: 15, y: 50, rotate: 1 },
  { x: 55, y: 35, rotate: 2.5 },
];

const PathwayCard = ({ number, title, text, index }) => {
  const dir = pathwayDirections[index % pathwayDirections.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: dir.x, y: dir.y, rotate: dir.rotate, scale: 0.92 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 85,
        damping: 14,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.25 },
      }}
      className="group relative rounded-[28px] bg-gradient-to-b from-[#0284C7] via-[#0284C7] to-[#0369A1] p-2.5 pt-3.5 shadow-xl shadow-sky-950/20 flex flex-col items-center hover:shadow-2xl hover:shadow-sky-500/25 transition-shadow duration-300"
    >
      {/* Top Metallic Rivet / Dot Accent */}
      <div className="w-3.5 h-3.5 rounded-full bg-slate-200/90 ring-4 ring-white/20 shadow-inner mb-3 shrink-0" />

      {/* Deep Navy Inner Card */}
      <div className="w-full bg-[#0B2345] rounded-2xl p-6 sm:p-7 flex flex-col justify-between flex-1 min-h-[250px] border border-white/5">
        <div>
          <span className="font-mono text-sm font-black text-[#38BDF8] tracking-wider block mb-3">
            {number}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      id="pathway"
      className="bg-white py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-slate-200 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-block border border-slate-300 rounded-full px-4 py-1 text-xs font-semibold text-[#0284C7] mb-3 bg-slate-50 shadow-sm">
            {carePathway.badge || "Care Philosophy"}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
            {carePathway.heading || "The Patient Care Pathway"}
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            {carePathway.description || "A structured, empathetic clinical method focused on child comfort and clear communication with parents."}
          </p>
        </motion.div>

        {/* Pathway 4 Cards Grid - Layered Cyan & Navy Design with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {carePathway.steps.map((step, idx) => (
            <PathwayCard
              key={step.number}
              number={step.number}
              title={step.title}
              text={step.text}
              index={idx}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
