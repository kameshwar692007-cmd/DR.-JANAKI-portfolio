// ============================================================
// portfolioData.js — Centralized configuration for Dr. Janaki S
// Verified credentials, clinical background, and contact details
// ============================================================

export const personalInfo = {
  name: "Dr. Janaki S",
  firstName: "Janaki",
  brandName: "Dr. Janaki S",
  title: "Paediatrician",
  currentDesignation: "Senior Resident",
  institution: "Sri Manakula Vinayagar Medical College and Hospital",
  hospitalLocation: "Puducherry",
  location: "Reddiyarpalayam, Puducherry",
  phone: "9677304339",
  phoneDisplay: "+91 96773 04339",
  emails: {
    primary: "janakisivakumar96@gmail.com",
    secondary: "janakisivakumar96@gmail.com",
  },
  experienceYears: "3",
  summary:
    "Paediatrician and Senior Resident at Sri Manakula Vinayagar Medical College and Hospital, Puducherry. Dedicated to compassionate, evidence-based healthcare for newborns, infants, children, and adolescents, with clinical experience across general paediatrics, emergency paediatric care, PICU, and neonatal care.",
  qualificationsSummary: "MBBS, MD Paediatrics (2025) · IAP Member",
};

export const heroContent = {
  greeting: "Dedicated Child & Newborn Health",
  doctorName: "Dr. Janaki S",
  title: "Paediatrician",
  designationBadge: "Senior Resident · Sri Manakula Vinayagar Medical College & Hospital, Puducherry",
  experienceBadge: "3 Years Clinical Experience",
  subtitle:
    "Providing compassionate, evidence-based care for infants, children, and adolescents—from routine developmental assessments to acute paediatric and neonatal intensive care.",
  ctaPrimary: { text: "Send Clinical Enquiry", href: "#contact" },
  ctaSecondary: { text: "Explore Clinical Profile", href: "#about" },
  trustChips: [
    "General Paediatrics",
    "Neonatal & Newborn Care",
    "PICU & Respiratory Support",
    "Acute & Emergency Care",
    "Growth & Development",
  ],
};

export const aboutContent = {
  heading: "About Dr. Janaki S",
  subheading: "Compassionate paediatric care grounded in rigorous medical training.",
  paragraphs: [
    "Dr. Janaki S is a paediatrician currently serving as a Senior Resident in the Department of Paediatrics at Sri Manakula Vinayagar Medical College and Hospital, Puducherry.",
    "She completed her MBBS from the Government Medical College Omandurar, Chennai, followed by her MD in Paediatrics from Siddhartha Medical College, Vijayawada, graduating in 2025. Her professional journey encompasses 3 years of hands-on hospital-based paediatric and neonatal practice.",
    "Her clinical scope covers general outpatient paediatric care, emergency paediatric triage, infectious disease management, adolescent health counseling, and neonatal stabilization.",
    "In critical settings, she manages inpatient admissions, PICU patients, invasive and non-invasive respiratory support, and routine neonatal assessments, partnering closely with families to explain care plans clearly and supportively.",
  ],
  credentialsList: [
    { label: "Current Role", value: "Senior Resident, Dept. of Paediatrics" },
    { label: "Institution", value: "SMVMCH, Puducherry" },
    { label: "Post-Graduate Degree", value: "MD Paediatrics (2025), Siddhartha Medical College" },
    { label: "Undergraduate Degree", value: "MBBS, Omandurar Medical College, Chennai" },
    { label: "Professional Membership", value: "IAP (Indian Academy of Paediatrics) Member" },
    { label: "Life Support Credentials", value: "BLS & ACLS Certified" },
  ],
};

// Clinical expertise categories
export const clinicalExpertise = {
  badge: "Areas of Practice",
  heading: "Clinical Expertise & Competencies",
  description:
    "Comprehensive paediatric disciplines backed by hospital residency and academic clinical training.",
  categories: [
    {
      title: "General Paediatric Care",
      iconType: "general",
      summary: "Comprehensive healthcare for infants, toddlers, and young children.",
      items: [
        "Common childhood illnesses",
        "Fever & viral syndrome evaluation",
        "Paediatric nutrition counseling",
        "Preventive health check-ups",
        "Immunization schedule guidance",
      ],
    },
    {
      title: "Acute & Emergency Paediatrics",
      iconType: "emergency",
      summary: "Rapid diagnostic evaluation and urgent interventions for acute conditions.",
      items: [
        "Paediatric emergency triage",
        "Acute dehydration & gastroenteritis",
        "Febrile convulsions & seizure triage",
        "Acute respiratory distress assessment",
        "Fluid & electrolyte stabilization",
      ],
    },
    {
      title: "Neonatology & Newborn Care",
      iconType: "neonatal",
      summary: "Attentive clinical monitoring and supportive care for newborns.",
      items: [
        "Routine newborn examination",
        "Neonatal jaundice management",
        "Newborn sepsis screening",
        "Thermoregulation & feeding support",
        "Post-discharge neonatal follow-up",
      ],
    },
    {
      title: "PICU Care & Respiratory Support",
      iconType: "picu",
      summary: "Specialized clinical attention in pediatric high-dependency and intensive care.",
      items: [
        "Paediatric intensive care monitoring",
        "Oxygen therapy & nebulization",
        "Non-invasive respiratory support",
        "Invasive ventilation monitoring",
        "Hemodynamic monitoring",
      ],
    },
    {
      title: "Infectious Diseases in Children",
      iconType: "infection",
      summary: "Evidence-guided diagnosis and rational antimicrobial management.",
      items: [
        "Seasonal tropical infections (Dengue, Malaria, Typhoid)",
        "Paediatric pneumonia & bronchiolitis",
        "Skin & soft tissue childhood infections",
        "Rational antibiotic stewardship",
        "Infection prevention protocols",
      ],
    },
    {
      title: "Growth, Development & Adolescent Health",
      iconType: "growth",
      summary: "Holistic tracking of physical and psychological developmental milestones.",
      items: [
        "Physical growth milestone charting",
        "Developmental delay red-flag identification",
        "Nutritional deficiency assessments",
        "Adolescent puberty changes & counseling",
        "Parental guidance & reassurance",
      ],
    },
  ],
};

// Patient care journey replacing old Services
export const carePathway = {
  badge: "Care Philosophy",
  heading: "The Patient Care Pathway",
  description:
    "A structured, empathetic clinical method focused on child comfort and clear communication with parents.",
  steps: [
    {
      number: "01",
      title: "Attentive History",
      text: "Listening carefully to parental observations, symptom timelines, past health history, and home environment factors.",
    },
    {
      number: "02",
      title: "Gentle Examination",
      text: "Conducting age-appropriate, non-threatening physical assessments to keep children calm, relaxed, and cooperative.",
    },
    {
      number: "03",
      title: "Accurate Assessment",
      text: "Applying clinical criteria and selective diagnostic testing only when essential, avoiding over-investigation.",
    },
    {
      number: "04",
      title: "Clear Communication",
      text: "Explaining the condition and treatment plan in clear, reassuring terms, providing warning signs and home-care steps.",
    },
  ],
};

// Experience (verified Senior Residency and hospital training)
export const experienceList = [
  {
    role: "Senior Resident in Paediatrics",
    organization: "Sri Manakula Vinayagar Medical College and Hospital",
    location: "Puducherry",
    duration: "Current Position",
    type: "Teaching Hospital Residency",
    responsibilities: [
      "Managing paediatric inpatient wards, paediatric acute triage, and outpatient consultation clinics.",
      "Providing emergency care and resuscitation in paediatric acute care and critical care units.",
      "Conducting daily patient rounds, treatment planning, and coordinating multidisciplinary patient care.",
      "Mentoring and guiding medical interns and undergraduate MBBS students during clinical rotations.",
    ],
  },
  {
    role: "Post-Graduate Resident (MD Paediatrics)",
    organization: "Siddhartha Medical College",
    location: "Vijayawada, Andhra Pradesh",
    duration: "Completed 2025",
    type: "Residency Training",
    responsibilities: [
      "Rigorous three-year clinical residency managing diverse paediatric and neonatal case loads.",
      "Active rotations in Neonatal Intensive Care (NICU), Paediatric Intensive Care (PICU), and Emergency Wards.",
      "Performed emergency diagnostic and therapeutic procedures, arterial blood sampling, and lumbar punctures.",
      "Participated in departmental academic meets, journal clubs, and clinical case presentations.",
    ],
  },
];

// Academic background
export const educationList = [
  {
    degree: "MD in Paediatrics",
    institution: "Siddhartha Medical College",
    location: "Vijayawada, Andhra Pradesh",
    period: "Completed in 2025",
    status: "Postgraduate Medical Degree",
    highlights: [
      "Comprehensive 3-year clinical residency covering neonatology, pediatric emergency, and critical care.",
      "Extensive bedside clinical case presentations, seminars, and intensive care management.",
    ],
  },
  {
    degree: "MBBS",
    institution: "Government Medical College Omandurar",
    location: "Chennai, Tamil Nadu",
    period: "Undergraduate Medical Training",
    status: "Bachelor of Medicine, Bachelor of Surgery",
    highlights: [
      "Foundational training in general medicine, surgery, obstetrics, community medicine, and child health.",
      "Completed compulsory rotating medical internship with extensive emergency and ward postings.",
    ],
  },
];

// Certifications and Professional Memberships
export const credentialsData = {
  certifications: [
    {
      name: "Basic Life Support (BLS)",
      issuer: "Authorized Resuscitation Council",
      category: "Life Support",
      iconType: "bls",
      validity: "Certified",
    },
    {
      name: "Advanced Cardiovascular Life Support (ACLS)",
      issuer: "Authorized Resuscitation Council",
      category: "Critical Care",
      iconType: "acls",
      validity: "Certified",
    },
    {
      name: "Life Member",
      issuer: "Indian Academy of Paediatrics (IAP)",
      category: "Professional Body",
      iconType: "iap",
      validity: "Active Member",
    },
  ],
};

// Conferences and Research
export const conferencesAndResearch = {
  conferences: [
    {
      title: "National Paediatric Conference (PEDICON)",
      location: "Chennai",
      year: "2024",
      badge: "National Conference",
      description:
        "Participated in clinical symposia on advancements in paediatric intensive care, neonatal outcomes, and infectious disease management.",
    },
    {
      title: "AP Pedicon",
      location: "Vijayawada",
      year: "2024",
      badge: "State Conference",
      description:
        "Attended state-level paediatric scientific sessions, workshops on pediatric respiratory illnesses, and case discussions.",
    },
    {
      title: "Telangana State Pedicon",
      location: "Telangana",
      year: "2023",
      badge: "State Conference",
      description:
        "Engaged in academic discussions on acute emergency triage, immunization updates, and infant nutrition protocols.",
    },
  ],
  research: {
    status: "Ongoing",
    title: "Clinical Research in Paediatric Care",
    description:
      "Active clinical observations and research studies conducted in hospital settings, focusing on improving patient outcomes in acute pediatric conditions and newborn health.",
  },
};

// Core clinical and professional values
export const careValues = [
  {
    name: "Empathetic Listening",
    iconType: "listening",
    desc: "Giving parents and guardians dedicated time to voice their concerns without rushing.",
  },
  {
    name: "Child-Friendly Manner",
    iconType: "child",
    desc: "A calm, gentle demeanor that reduces anxiety and creates a reassuring environment for children.",
  },
  {
    name: "Crisis Composure",
    iconType: "composure",
    desc: "Clear-headed, rapid decision making during paediatric and neonatal acute emergencies.",
  },
  {
    name: "Transparent Guidance",
    iconType: "guidance",
    desc: "Explaining diagnoses, medications, and warning signs in clear, easily understandable language.",
  },
];

export const contactContent = {
  heading: "Professional Clinical Enquiries",
  subheading: "Contact Dr. Janaki S for professional coordination, academic collaboration, or clinical paediatric enquiries.",
  location: "Reddiyarpalayam, Puducherry",
  hospital: "Sri Manakula Vinayagar Medical College and Hospital, Puducherry",
  phone: "9677304339",
  phoneDisplay: "+91 96773 04339",
  email: "janakisivakumar96@gmail.com",
  emergencyDisclaimer:
    "Important Notice for Parents: This website is for informational and professional enquiry purposes only. In the event of acute emergencies—such as severe breathing difficulty, continuous seizures, lethargy, or high persistent fever with altered sensorium—please take your child to the nearest hospital emergency department immediately.",
};

export const footerContent = {
  taglines: [
    "General Paediatrics · Acute & Emergency Care · PICU Support",
    "Neonatal Care · Infectious Diseases · Growth & Development",
    "Senior Resident · SMVMCH, Puducherry",
  ],
  credential: "MBBS, MD Paediatrics (2025) · IAP Member",
  copyright: `© ${new Date().getFullYear()} Dr. Janaki S, Paediatrician. All rights reserved.`,
  disclaimer:
    "Medical Disclaimer: The medical information on this website is provided for educational and introductory reference only. It should not be used as a substitute for direct clinical examination, diagnosis, or treatment by a qualified medical professional.",
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

// ============================================================
// Backward compatibility exports during component refactoring
// ============================================================
export const socialLinks = {
  github: null,
  linkedin: null,
};

export const technicalSkills = {
  categories: clinicalExpertise.categories.map((c) => ({
    title: c.title,
    skills: c.items,
  })),
};

export const skillsContent = {
  badge: carePathway.badge,
  heading: carePathway.heading,
  description: carePathway.description,
  cards: carePathway.steps,
  endText: "Dedicated to Child Health",
};

export const contentCreation = {
  badge: clinicalExpertise.badge,
  heading: clinicalExpertise.heading,
  description: clinicalExpertise.description,
  categories: clinicalExpertise.categories.map((c) => ({
    title: c.title,
    description: c.summary,
    stats: "Clinical Care",
    icon: c.icon,
  })),
};

export const internshipsList = experienceList.map((e) => ({
  organization: e.organization,
  role: e.role,
  duration: e.duration,
  description: e.responsibilities.join(" "),
}));

export const leadershipList = conferencesAndResearch.conferences.map((c) => ({
  title: c.title,
  role: `${c.location} · ${c.year}`,
  description: c.description,
  badge: c.badge,
}));

export const certificates = {
  featured: credentialsData.certifications.map((c) => ({
    name: c.name,
    issuer: c.issuer,
    icon: c.icon,
    url: null,
  })),
  viewAllUrl: null,
};

export const education = {
  degree: educationList[0].degree,
  institution: educationList[0].institution,
  period: educationList[0].period,
  status: educationList[0].status,
  cgpa: "MD Completed 2025",
};

export const softSkillsList = careValues;

export const projects = [
  {
    id: "pediatric-clinical-care",
    number: "01",
    badge: "🩺 Clinical Focus",
    title: "Inpatient & Acute Emergency Paediatrics",
    description:
      "Comprehensive hospital-based clinical management of acute pediatric illnesses, fluid stabilization, and emergency triage at SMVMCH Puducherry.",
    highlights: [
      "Paediatric acute emergency resuscitation and triage protocols.",
      "Inpatient ward patient monitoring and clinical treatment planning.",
      "Neonatal and infant health stabilization.",
      "Clear, empathetic communication with parents and caregivers.",
    ],
    techTags: ["Emergency Triage", "Acute Care", "Fluid Management", "Child Health"],
    isFlagship: true,
  },
];

