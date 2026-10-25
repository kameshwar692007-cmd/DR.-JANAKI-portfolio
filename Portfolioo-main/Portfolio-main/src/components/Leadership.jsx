import { conferencesAndResearch } from '../data/portfolioData';

const ConferenceItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between mb-10 md:mb-14 w-full group">
      {/* Central timeline node dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#0284C7] rounded-full border-4 border-[#061B3A] z-30 shadow-[0_0_12px_rgba(2,132,199,0.8)] group-hover:scale-125 transition-transform duration-300" />

      {/* Card Content Side */}
      <div
        data-aos={isEven ? "fade-right" : "fade-left"}
        className={`w-full md:w-[45%] pl-12 md:pl-0 ${
          isEven ? 'md:text-right md:order-1' : 'md:text-left md:order-2'
        }`}
      >
        <div className="bg-[#0B2345]/75 border border-white/10 rounded-2xl p-6 hover:border-[#38BDF8]/30 hover:shadow-[0_12px_30px_rgba(2,132,199,0.12)] transition-all duration-300">
          <div className={`flex flex-wrap gap-2 items-center mb-2.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            <span className="bg-[#0284C7]/20 text-[#38BDF8] text-[10px] font-bold tracking-wider uppercase py-1 px-3 rounded-full border border-[#0284C7]/30">
              {item.badge}
            </span>
            <span className="text-slate-300 text-xs font-mono font-semibold">
              {item.year}
            </span>
          </div>

          <h3 className="text-white text-lg sm:text-xl font-bold mb-1 tracking-tight group-hover:text-[#38BDF8] transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-300 text-xs font-semibold tracking-wide uppercase mb-2.5">
            📍 {item.location}
          </p>
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
            {item.description}
          </p>
        </div>
      </div>

      {/* Desktop Spacer */}
      <div className="hidden md:block w-[45%] order-2" />
    </div>
  );
};

const Leadership = () => {
  return (
    <section id="research" className="bg-[#061B3A] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/10 scroll-mt-24">
      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-block border border-white/15 rounded-full px-3.5 py-1 text-xs font-semibold text-[#38BDF8] mb-3 bg-white/5 backdrop-blur-sm">
            Academic &amp; Clinical Presentations
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight">
            Conferences &amp; Research
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed">
            Active participation in state and national paediatric assemblies and ongoing hospital-based clinical studies.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-white/10 -translate-x-1/2" />

          {conferencesAndResearch.conferences.map((item, index) => (
            <ConferenceItem key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Ongoing Research Card with unified SVG icon */}
        <div data-aos="fade-up" className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B2345] to-[#061B3A] border border-[#38BDF8]/30 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="w-12 h-12 rounded-xl bg-[#0284C7]/20 border border-[#38BDF8]/30 text-[#38BDF8] flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2v7.31M14 9.3V2M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" />
                <path d="M5.52 16h12.96" />
              </svg>
            </span>
            <div>
              <div className="inline-block px-3 py-0.5 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider mb-2">
                {conferencesAndResearch.research.status} Research
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                {conferencesAndResearch.research.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                {conferencesAndResearch.research.description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
