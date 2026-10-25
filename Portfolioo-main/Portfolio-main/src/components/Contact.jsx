import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { contactContent, personalInfo } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "20%"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    const name = form.querySelector('#parentName')?.value || '';
    const phone = form.querySelector('#phone')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const childAge = form.querySelector('#childAge')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const mailtoLink = `mailto:${personalInfo.emails.primary}?subject=Clinical Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(
      `Parent/Guardian Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nChild Age / Enquiry: ${childAge}\n\nEnquiry Details:\n${message}`
    )}`;

    window.location.href = mailtoLink;
    setStatus('success');
    formRef.current.reset();
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#061B3A] w-full relative overflow-hidden pt-28 pb-16 border-t border-white/10 scroll-mt-24"
    >
      {/* Background Stylized Subtle Wordmark */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-10"
        aria-hidden="true"
      >
        <span
          className="text-[18vw] leading-[0.8] font-black text-white/[0.03] uppercase select-none tracking-tight"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          CARE
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact & Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-block border border-white/15 rounded-full px-3.5 py-1 text-xs font-semibold text-[#38BDF8] mb-3 bg-white/5 backdrop-blur-sm"
              >
                Get in Touch
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3 leading-tight">
                {contactContent.heading}
              </h2>
              <p className="text-sm md:text-base text-slate-300 font-normal leading-relaxed mb-6">
                {contactContent.subheading}
              </p>

              {/* Verified Details with clean SVG icons - Staggered fly-in */}
              <div className="space-y-3.5">
                {[
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M9 12h6m-3-3v6" />
                      </svg>
                    ),
                    label: "Hospital Affiliation",
                    val: contactContent.hospital,
                    sub: "Senior Resident, Dept. of Paediatrics",
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    label: "Location",
                    val: contactContent.location,
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    ),
                    label: "Direct Phone",
                    val: (
                      <a href={`tel:${contactContent.phone}`} className="text-sm font-semibold text-white hover:text-[#38BDF8] transition-colors">
                        {contactContent.phoneDisplay}
                      </a>
                    ),
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    label: "Email Enquiries",
                    val: (
                      <a href={`mailto:${contactContent.email}`} className="text-sm font-semibold text-white hover:text-[#38BDF8] transition-colors break-all">
                        {contactContent.email}
                      </a>
                    ),
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 15,
                      delay: 0.15 + idx * 0.08,
                    }}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0B2345] border border-white/10 hover:border-[#38BDF8]/40 transition-colors shadow-sm"
                  >
                    <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#38BDF8] flex items-center justify-center shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{item.label}</p>
                      {typeof item.val === 'string' ? (
                        <p className="text-sm font-semibold text-white">{item.val}</p>
                      ) : (
                        item.val
                      )}
                      {item.sub && (
                        <p className="text-xs text-[#38BDF8] font-medium mt-0.5">{item.sub}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Enquiry Form - Fly-in from Right */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 16,
              delay: 0.1,
            }}
            className="lg:col-span-7"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-[#0B2345] p-7 sm:p-9 rounded-2xl border border-white/10 shadow-xl flex flex-col space-y-4 hover:border-white/20 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-0.5">
                Send a Professional Enquiry
              </h3>
              <p className="text-xs text-slate-300 mb-3">
                Complete the fields below. A consultation enquiry will be drafted directly to Dr. Janaki's email.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="parentName" className="block text-xs font-semibold text-slate-200 mb-1">
                    Parent / Inquirer Name *
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    required
                    placeholder="e.g. Anand Kumar"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/35 text-xs sm:text-sm focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-200 mb-1">
                    Contact Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/35 text-xs sm:text-sm focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-200 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="yourname@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/35 text-xs sm:text-sm focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label htmlFor="childAge" className="block text-xs font-semibold text-slate-200 mb-1">
                    Child's Age / Enquiry Nature
                  </label>
                  <input
                    id="childAge"
                    type="text"
                    placeholder="e.g. 6 Months / Routine Check"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/35 text-xs sm:text-sm focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-200 mb-1">
                  Message / Nature of Clinical Query *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Please describe your enquiry or clinical question..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/35 text-xs sm:text-sm focus:outline-none focus:border-[#38BDF8] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#061B3A] font-bold text-sm hover:scale-[1.01] transition-transform shadow-[0_8px_20px_rgba(2,132,199,0.3)] disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <span>Preparing Enquiry...</span>
                ) : status === 'success' ? (
                  <span>Enquiry Initiated ✓</span>
                ) : (
                  <span>Submit Clinical Enquiry</span>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-xs text-center font-medium">
                  Please fill in all required fields (Name, Email, Message).
                </p>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
