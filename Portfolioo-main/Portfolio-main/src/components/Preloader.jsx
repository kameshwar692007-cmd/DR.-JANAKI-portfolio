import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.navigator.webdriver || window.sessionStorage.getItem('dr_janaki_visited') || window.location.search.includes('no-loader')) {
        return false;
      }
    }
    return true;
  });

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
      try {
        window.sessionStorage.setItem('dr_janaki_visited', 'true');
      } catch {
        // Ignore quota or private browsing errors
      }
    }, 450);
    
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#061B3A] z-[100000] flex flex-col items-center justify-center p-6"
        >
          {/* Subtle medical heartbeat icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-4 flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0B2345] border border-[#38BDF8]/30 shadow-[0_0_25px_rgba(56,189,248,0.25)]"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M12 5v14" />
            </svg>
          </motion.div>

          {/* Logo Container */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
          >
            <div className="text-[#38BDF8]/20 select-none">
              {personalInfo.brandName}
            </div>

            <motion.div 
              className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap select-none"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {personalInfo.brandName}
            </motion.div>
          </motion.div>

          <p className="mt-3 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#A9BDD0]">
            Paediatrician · SMVMCH, Puducherry
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
