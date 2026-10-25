import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);

          const sections = ['home', 'about', 'expertise', 'experience', 'education', 'research', 'contact'];
          const scrollPos = window.scrollY + 160;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= scrollPos) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Research', id: 'research' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementPosition - navOffset),
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className={`nav-pill${isScrolled ? ' nav-pill--scrolled' : ''}`} aria-label="Main Navigation">
      <div className="nav-inner">

        {/* Doctor Brand Logo - strictly non-wrapping */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="nav-logo group shrink-0 whitespace-nowrap flex items-center gap-2"
          aria-label="Dr. Janaki S Home"
        >
          <span className="nav-logo-icon flex items-center justify-center p-1.5 bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white shadow-[0_2px_10px_rgba(2,132,199,0.35)] shrink-0" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4v16m-8-8h16" />
            </svg>
          </span>
          <span className="font-bold tracking-tight text-[#0B2345] whitespace-nowrap">
            {personalInfo.brandName}
            <span className="text-[#0284C7] font-black">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links with Smooth Animated Gliding Highlight */}
        <div className="nav-links">
          {navLinks.map((link) => {
            const active = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`nav-link${active ? ' nav-link--active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                {active && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="nav-active-bg"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{link.label}</span>
                {active && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="nav-active-bar"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Clinical Enquiry CTA */}
        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, 'contact')}
          className="nav-hire flex items-center gap-2"
          aria-label="Send clinical enquiry"
        >
          <span>Enquire</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-hamburger md:hidden p-2 rounded-xl text-[#0B2345] hover:bg-black/5 transition-colors"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-6 pt-2 bg-white/95 backdrop-blur-xl border-t border-gray-100 rounded-b-2xl shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    active
                      ? 'bg-[#0284C7]/10 text-[#0284C7] font-bold'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="mt-3 text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0B2345] to-[#1769D1] text-white font-bold text-sm shadow-md"
            >
              Send Clinical Enquiry
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
