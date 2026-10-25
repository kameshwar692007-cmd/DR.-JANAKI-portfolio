import { JourneyTimeline } from "@/components/journey-timeline";
import { experienceList } from '../data/portfolioData';
import { Stethoscope, Award, Hospital } from "lucide-react";

const EXPERIENCE_STEPS = [
  {
    icon: <Hospital className="size-4 md:size-5" />,
    date: experienceList[1]?.duration || "2022 - 2025",
    title: experienceList[1]?.role || "Post-Graduate Resident (MD Paediatrics)",
    description: `${experienceList[1]?.organization || "Siddhartha Medical College & Hospital, Vijayawada"}. Rigorous 3-year clinical training across general paediatric wards, NICU newborn care, PICU respiratory support, and acute paediatric emergency resuscitation.`,
  },
  {
    icon: <Stethoscope className="size-4 md:size-5" />,
    date: experienceList[0]?.duration || "2025 - Present",
    title: experienceList[0]?.role || "Senior Resident in Paediatrics",
    description: `${experienceList[0]?.organization || "Sri Manakula Vinayagar Medical College and Hospital, Puducherry"}. Leading inpatient paediatric ward rounds, managing outpatient consultations, acute emergency triage, PICU monitoring, and structured parental guidance.`,
  },
  {
    icon: <Award className="size-4 md:size-5" />,
    date: "Verified Clinical Record",
    title: "3 Years Experience & Professional Memberships",
    description: "Indian Academy of Paediatrics (IAP) Member. BLS/ACLS certified with demonstrated clinical competence in paediatric advanced life support, neonatal stabilization, and rational antimicrobial stewardship.",
  },
];

const Internships = () => {
  return (
    <section id="experience" className="bg-[#061B3A] text-white py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/10 scroll-mt-24">
      {/* Background Subtle Medical Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#0284C7]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0B2345]/50 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        <JourneyTimeline
          eyebrow="Hospital Practice"
          title="Clinical Residency & Experience Journey"
          steps={EXPERIENCE_STEPS}
          className="px-0 py-0"
        />
      </div>
    </section>
  );
};

export default Internships;
