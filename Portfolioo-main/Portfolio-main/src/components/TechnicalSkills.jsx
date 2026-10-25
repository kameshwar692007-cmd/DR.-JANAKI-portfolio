import { clinicalExpertise } from '../data/portfolioData';

/* ─── PROFESSIONAL CLINICAL SVG ICONS ─────────────────────────────── */
const ExpertiseIcon = ({ type }) => {
  switch (type) {
    case 'general':
      return (
        <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4v16m-8-8h16" />
        </svg>
      );
    case 'emergency':
      return (
        <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'neonatal':
      return (
        <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12h.01M15 12h.01M10 16c.5.5 1.5.5 2 0M12 2a8 8 0 0 0-8 8c0 3 1.5 5.5 4 7v3h8v-3c2.5-1.5 4-4 4-7a8 8 0 0 0-8-8z" />
        </svg>
      );
    case 'picu':
      return (
        <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case 'infection':
      return (
        <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
          <path d="m4.93 4.93 2.12 2.12m9.9 9.9 2.12 2.12M4.93 19.07l2.12-2.12m9.9-9.9 2.12-2.12" />
        </svg>
      );
    case 'growth':
      return (
        <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18M7 17l4-4 4 4 5-6" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
};

const ExpertiseCard = ({ category, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 80}
    className="rounded-2xl p-6 sm:p-7 bg-[#0B2345]/75 border border-white/10 hover:border-[#38BDF8]/40 hover:shadow-[0_15px_30px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col justify-between group"
  >
    <div>
      {/* Icon and Header */}
      <div className="flex items-center gap-3.5 mb-4">
        <span className="w-11 h-11 rounded-xl bg-[#0284C7]/20 border border-[#38BDF8]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
          <ExpertiseIcon type={category.iconType} />
        </span>
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
            {category.title}
          </h3>
          <span className="text-[10px] uppercase tracking-wider font-semibold text-[#38BDF8]">
            Clinical Discipline
          </span>
        </div>
      </div>

      {/* Summary */}
      <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-4">
        {category.summary}
      </p>

      {/* Item List */}
      <ul className="space-y-2 border-t border-white/10 pt-4">
        {category.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-slate-200 font-normal">
            <span className="text-[#38BDF8] font-bold leading-none mt-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section id="expertise" className="bg-[#061B3A] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/10 scroll-mt-24">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#0284C7]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div data-aos="fade-up" className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-block border border-white/15 rounded-full px-3.5 py-1 text-xs font-semibold text-[#38BDF8] mb-3 bg-white/5 backdrop-blur-sm">
            {clinicalExpertise.badge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            {clinicalExpertise.heading}
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
            {clinicalExpertise.description}
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicalExpertise.categories.map((category, index) => (
            <ExpertiseCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
