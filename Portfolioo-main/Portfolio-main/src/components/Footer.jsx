import { personalInfo, footerContent } from '../data/portfolioData';
import { WordmarkFooter } from '@/components/wordmark-footer';

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-background text-foreground pt-16 w-full font-sans text-xs border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Row: Institution + Qualifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-border">
          <div>
            <h3 className="text-foreground text-base font-bold mb-2">
              {personalInfo.brandName}
            </h3>
            <p className="text-foreground/90 font-semibold mb-1">
              Paediatrician · Senior Resident
            </p>
            <p className="text-muted-foreground text-xs">
              Sri Manakula Vinayagar Medical College &amp; Hospital, Puducherry
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Medical Qualifications</p>
            <p className="text-foreground font-medium">MBBS (Omandurar Medical College, Chennai)</p>
            <p className="text-foreground font-medium">MD Paediatrics (Siddhartha Medical College, 2025)</p>
            <p className="text-primary font-semibold">IAP Member · BLS/ACLS Certified</p>
          </div>

          <div className="space-y-2 md:text-right">
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Contact &amp; Location</p>
            <p className="text-foreground font-medium">{personalInfo.location}</p>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-primary hover:text-foreground font-medium block transition-colors"
            >
              {personalInfo.phoneDisplay || personalInfo.phone}
            </a>
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="text-muted-foreground hover:text-foreground underline underline-offset-4 block mt-1 transition-colors"
            >
              {personalInfo.emails.primary}
            </a>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="py-6 text-[11px] text-muted-foreground text-center md:text-left border-b border-border">
          <p className="max-w-3xl leading-relaxed">
            {footerContent.disclaimer}
          </p>
        </div>
      </div>

      {/* Quarry UI Wordmark Footer with pointer spotlight tracking in full caps */}
      <WordmarkFooter
        word="DR. JANAKI S"
        links={navLinks}
        metaText={footerContent.copyright}
        className="border-none bg-transparent pt-0"
      />
    </footer>
  );
};

export default Footer;
