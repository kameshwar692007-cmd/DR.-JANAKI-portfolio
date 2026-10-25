import { motion } from 'framer-motion';
import { credentialsData } from '../data/portfolioData';

/* ─── PROFESSIONAL CREDENTIAL SVG ICONS ──────────────────────────── */
const CredentialIcon = ({ type }) => {
  switch (type) {
    case 'bls':
      return (
        <svg className="w-6 h-6 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case 'acls':
      return (
        <svg className="w-6 h-6 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case 'iap':
      return (
        <svg className="w-6 h-6 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
};

const certFlyDirections = [
  { x: -40, y: 30, rotate: -2 },
  { x: 0, y: 40, rotate: 0 },
  { x: 40, y: 30, rotate: 2 },
];

const CredentialCard = ({ cert, index }) => {
  const dir = certFlyDirections[index % certFlyDirections.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: dir.x, y: dir.y, rotate: dir.rotate, scale: 0.94 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 85,
        damping: 15,
        delay: index * 0.1,
      }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-[#0B2345]/75 rounded-2xl p-6 border border-white/10 hover:border-[#38BDF8]/40 transition-colors shadow-sm flex items-start gap-4"
    >
      <span className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
        <CredentialIcon type={cert.iconType} />
      </span>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#38BDF8]/15 text-[#38BDF8]">
            {cert.category}
          </span>
          <span className="text-[10px] text-slate-300 font-mono">
            {cert.validity}
          </span>
        </div>
        <h3 className="text-white font-bold text-base leading-snug mb-1">
          {cert.name}
        </h3>
        <p className="text-slate-300 text-xs font-medium">
          {cert.issuer}
        </p>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <section className="bg-[#061B3A] py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/10">
      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <div className="inline-block border border-white/15 rounded-full px-3.5 py-1 text-xs font-semibold text-[#38BDF8] mb-3 bg-white/5 backdrop-blur-sm">
            Professional Credentials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight">
            Certifications &amp; Memberships
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed">
            Professional standing certified by the Indian Academy of Paediatrics and standardized resuscitation councils.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credentialsData.certifications.map((cert, index) => (
            <CredentialCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
