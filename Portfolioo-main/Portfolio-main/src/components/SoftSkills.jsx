import { motion } from 'framer-motion';
import { careValues } from '../data/portfolioData';

const ValueEmoji = ({ type }) => {
  switch (type) {
    case 'listening':
      return <span className="text-3xl sm:text-4xl select-none" role="img" aria-label="Listening">👂</span>;
    case 'child':
      return <span className="text-3xl sm:text-4xl select-none" role="img" aria-label="Child-Friendly">🧸</span>;
    case 'composure':
      return <span className="text-3xl sm:text-4xl select-none" role="img" aria-label="Crisis Composure">⚖️</span>;
    case 'guidance':
      return <span className="text-3xl sm:text-4xl select-none" role="img" aria-label="Guidance">💬</span>;
    default:
      return <span className="text-3xl sm:text-4xl select-none" role="img" aria-label="Care">💙</span>;
  }
};

const ValueCard = ({ value, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.92 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{
      duration: 0.55,
      delay: index * 0.1,
      type: "spring",
      stiffness: 90,
      damping: 15,
    }}
    whileHover={{
      y: -8,
      scale: 1.03,
      transition: { duration: 0.2 },
    }}
    className="bg-white border border-slate-200/90 rounded-3xl p-7 hover:border-[#0284C7]/50 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center justify-between min-h-[220px]"
  >
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 mb-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-xs">
        <ValueEmoji type={value.iconType} />
      </div>
      <h3 className="text-slate-900 text-lg font-bold tracking-tight mb-2.5">
        {value.name}
      </h3>
      <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
        {value.desc}
      </p>
    </div>
  </motion.div>
);

const SoftSkills = () => {
  return (
    <section className="bg-slate-50 py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-slate-200">
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
            Core Principles
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Care Values &amp; Communication
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Essential ethical commitments and communication standards that shape every clinical consultation with young patients and their families.
          </p>
        </motion.div>

        {/* Grid of 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careValues.map((val, index) => (
            <ValueCard key={val.name} value={val} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SoftSkills;
