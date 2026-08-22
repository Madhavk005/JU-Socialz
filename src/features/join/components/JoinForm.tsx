"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitApplication } from "@/features/join/api";

const totalSteps = 4;

const SKILL_DESCRIPTIONS: Record<string, string> = {
  Cinematography: "Capture cinematic visuals — camera ops, lighting, composition, and on-field shooting for events, films & reels.",
  Editing: "Craft stories in post — Premiere Pro, DaVinci, After Effects, color grading, motion graphics & sound design.",
  "Graphic Design": "Design that stops the scroll — branding, social campaigns, posters, merch, motion posters in Photoshop, Illustrator, Figma.",
  "Social Media Management": "Work with JECRC's official Instagram, LinkedIn, YouTube or Snapchat teams and help plan, manage and grow the platforms.",
  "Content Creation": "If you feel you're creative enough, be part of the team behind every idea before it becomes content.",
  Photography: "Freeze moments that matter — event coverage, portraits, conceptual shoots, lighting & composition mastery.",
  "Reel Creation": "Short form, long impact — viral hooks, trend adaptation, rhythmic editing, mobile videography & retention tactics.",
  AI: "Innovate at tech × creativity — prompt engineering, generative video/audio, workflow automation, AI ethics in media.",
  "On-Camera / Anchoring": "Be a part of the team that represents JECRC on camera through hosting, interviews, vox pops, event coverage and other video content.",
  
};

const SkillOption = ({ 
  label, 
  checked, 
  onChange, 
  isRadio = false, 
  disabled = false,
  _isPrimary = false,
  onHover,
  onLeave
}: { 
  label: string; 
  checked: boolean; 
  onChange: () => void; 
  isRadio?: boolean; 
  disabled?: boolean;
  _isPrimary?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}) => {
  return (
    <label 
      className={`cursor-pointer group relative ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <input
        type={isRadio ? "radio" : "checkbox"}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="peer absolute opacity-0 w-0 h-0"
      />
<div 
        className="px-4 py-2 rounded-full border border-white/[0.04] text-sm text-ivory-light/60 
          peer-checked:bg-slate-blue peer-checked:border-slate-blue peer-checked:text-white
          transition-all select-none hover:border-white/30
          ${_isPrimary ? '' : 'peer-checked:bg-white/20 peer-checked:border-white/20 peer-checked:text-white'}"
        style={{ pointerEvents: 'none' }}
      >
        {label}
      </div>
    </label>
);
  };

export const JoinForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    socialHandle: "",
    course: "",
    year: "",
    accommodation: "",
    primarySkill: "",
    secondarySkills: [] as string[],
    aboutYou: "",
    whySocialz: "",
    workStyle: "",
    superpower: "",
  });

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const updateForm = (key: string, value: string | string[]) => {
    setErrorMsg("");
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => /^\d{10}$/.test(phone);

  const validateStep = (s: number): boolean => {
    if (s === 1) {
      if (!formData.name || !formData.email || !formData.phone || !formData.socialHandle) {
        setErrorMsg("Please fill in all required fields before proceeding.");
        return false;
      }
      if (!isValidEmail(formData.email)) {
        setErrorMsg("Please enter a valid email address.");
        return false;
      }
      if (!isValidPhone(formData.phone)) {
        setErrorMsg("Please enter a valid 10-digit phone number.");
        return false;
      }
    }
    if (s === 2) {
      if (!formData.course || !formData.year || !formData.accommodation || !formData.primarySkill) {
        setErrorMsg("Please select your course, year, accommodation type, and a primary skill.");
        return false;
      }
    }
    if (s === 3) {
      if (!formData.whySocialz || !formData.workStyle || !formData.superpower || !formData.aboutYou) {
        setErrorMsg("Please answer all questions before proceeding.");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (!validateStep(step)) return;
    setErrorMsg("");
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await submitApplication(formData, []);

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch {
      setIsSubmitting(false);
      setErrorMsg("Failed to submit. Please check your connection and try again.");
    }
  };

  if (isSuccess) {
    return (
      <section className="py-24 md:section-padding bg-obsidian-dark relative min-h-screen flex items-center justify-center border-t border-white/[0.02]">
        <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="w-24 h-24 bg-slate-blue rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(57,80,162,0.5)]">
              <span className="text-4xl text-white">✓</span>
            </div>
            <h2 className="text-fluid-display font-bold font-geist text-ivory-light tracking-tight mb-6">
              Application Received.
            </h2>
            <p className="text-fluid-p text-ivory-dark/60 font-inter max-w-lg mx-auto">
              Your story starts here. We've received your application and will be in touch with you soon.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="join-form" className="py-24 md:section-padding bg-obsidian-dark relative min-h-[100dvh] flex items-center justify-center border-t border-white/[0.02]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-6 max-w-3xl relative z-10"
      >
        <div className="mb-12 text-center">
          <h2 className="text-fluid-h2 font-bold font-geist text-ivory-light tracking-tight mb-4">
            Showcase Your Best Work
          </h2>
          <p className="text-fluid-p text-ivory-dark/60 font-inter max-w-lg mx-auto">
            Showcase your best work and join the people shaping the digital identity of JECRC University.
          </p>
        </div>

        <div className="bg-[#151515] border border-white/5 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-white/5">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-lighter">
              Step 0{step} <span className="text-white/20">/ 0{totalSteps}</span>
            </span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === step ? 'w-8 bg-slate-blue' : i < step ? 'w-4 bg-slate-blue/50' : 'w-4 bg-white/10'}`} />
              ))}
            </div>
          </div>

          {errorMsg && (
            <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-inter text-center">
              {errorMsg}
            </div>
          )}

          {hoveredSkill && SKILL_DESCRIPTIONS[hoveredSkill] && (
            <motion.div
              key={hoveredSkill}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mb-8 p-4 rounded-xl bg-slate-blue/10 border border-slate-blue/30 text-ivory-light text-sm font-inter text-center shadow-lg"
            >
              {SKILL_DESCRIPTIONS[hoveredSkill]}
            </motion.div>
          )}

          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-ivory-light/80">Full Name *</label>
                    <input type="text" value={formData.name} onChange={(e) => updateForm("name", e.target.value)} required className="bg-white/[0.01] border border-white/[0.04] rounded-xl px-4 py-3 text-base text-ivory-light focus:outline-none focus:border-slate-blue focus:bg-white/[0.05] transition-all placeholder-white/20" placeholder="Aarav Sharma" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-ivory-light/80">Email Address *</label>
                      <input type="email" value={formData.email} onChange={(e) => updateForm("email", e.target.value)} required className="bg-white/[0.01] border border-white/[0.04] rounded-xl px-4 py-3 text-base text-ivory-light focus:outline-none focus:border-slate-blue focus:bg-white/[0.05] transition-all placeholder-white/20" placeholder="aarav.sharma@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-ivory-light/80">Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "");
                          if (val.length <= 10) updateForm("phone", val);
                        }}
                        required
                        className="bg-white/[0.01] border border-white/[0.04] rounded-xl px-4 py-3 text-base text-ivory-light focus:outline-none focus:border-slate-blue focus:bg-white/[0.05] transition-all placeholder-white/20"
                        placeholder="9876543210"
                        maxLength={10}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-ivory-light/80">Instagram ID *</label>
                    <input type="text" value={formData.socialHandle} onChange={(e) => updateForm("socialHandle", e.target.value)} required className="bg-white/[0.01] border border-white/[0.04] rounded-xl px-4 py-3 text-base text-ivory-light focus:outline-none focus:border-slate-blue focus:bg-white/[0.05] transition-all placeholder-white/20" placeholder="@username" />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-ivory-light/80">Course *</label>
                      <input type="text" value={formData.course} onChange={(e) => updateForm("course", e.target.value)} required className="bg-white/[0.01] border border-white/[0.04] rounded-xl px-4 py-3 text-base text-ivory-light focus:outline-none focus:border-slate-blue focus:bg-white/[0.05] transition-all placeholder-white/20" placeholder="e.g. B.Tech CS" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-ivory-light/80">Year of Study *</label>
                      <select value={formData.year} onChange={(e) => updateForm("year", e.target.value)} required className="bg-white/[0.01] border border-white/[0.04] rounded-xl px-4 py-3 text-base text-ivory-light focus:outline-none focus:border-slate-blue focus:bg-white/[0.05] transition-all appearance-none cursor-pointer">
                        <option value="" className="bg-[#151515]">Select Year</option>
                        <option value="1" className="bg-[#151515]">1st Year</option>
                        <option value="2" className="bg-[#151515]">2nd Year</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-2">
                    <label className="text-sm font-medium text-ivory-light/80">Accommodation *</label>
                    <div className="flex flex-wrap gap-3">
                      {["Hosteller", "Day Scholar"].map((option, idx) => (
                        <label key={`accommodation-${idx}`} className="cursor-pointer">
                          <input
                            type="radio"
                            name="accommodation"
                            checked={formData.accommodation === option}
                            onChange={() => updateForm("accommodation", option)}
                            className="peer absolute opacity-0 w-0 h-0"
                          />
                          <div className="px-4 py-2 rounded-full border border-white/[0.04] text-sm text-ivory-light/60 peer-checked:bg-slate-blue peer-checked:border-slate-blue peer-checked:text-white transition-all select-none hover:border-white/30">
                            {option}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 mt-8 pt-4 border-t border-white/5">
                    <div className="mb-4 min-h-[80px] flex items-center justify-center">
                      {hoveredSkill && SKILL_DESCRIPTIONS[hoveredSkill] && (
                        <motion.div
                          key={hoveredSkill}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="p-4 rounded-xl bg-slate-blue/10 border border-slate-blue/30 text-ivory-light text-sm font-inter text-center w-full max-w-2xl"
                        >
                          {SKILL_DESCRIPTIONS[hoveredSkill]}
                        </motion.div>
                      )}
                    </div>
                    <div className="flex flex-col gap-3">
                      <div>
                        <label className="text-sm font-medium text-ivory-light/80">Primary Skill/Interest *</label>
                        <p className="text-xs text-white/40 mt-1">Select your main craft for JU Socialz. Hover for details.</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {["Cinematography", "Editing", "Graphic Design", "Social Media Management", "Content Creation", "Photography", "Reel Creation", "On-Camera / Anchoring", "AI & Automation"].map((vertical, idx) => (
                          <SkillOption
                            key={`primary-${idx}`}
                            label={vertical}
                            checked={formData.primarySkill === vertical}
                            isRadio
_isPrimary
                            onChange={() => {
                              setFormData(prev => ({
                                ...prev,
                                primarySkill: vertical,
                                secondarySkills: prev.secondarySkills.filter(s => s !== vertical)
                              }))
                            }}
                            onHover={() => setHoveredSkill(vertical)}
                            onLeave={() => setHoveredSkill(null)}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div>
                        <label className="text-sm font-medium text-ivory-light/80">Secondary Skills</label>
                        <p className="text-xs text-white/40 mt-1">Select up to 2 additional skills (optional). Hover for details.</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {["Cinematography", "Editing", "Graphic Design", "Social Media Management", "Content Creation", "Photography", "Reel Creation", "On-Camera / Anchoring", "AI & Automation"].map((vertical, idx) => {
                          const isPrimary = formData.primarySkill === vertical;
                          return (
                            <SkillOption
                              key={`secondary-${idx}`}
                              label={vertical}
                              checked={formData.secondarySkills.includes(vertical)}
                              disabled={isPrimary}
                              onChange={() => {
                                setFormData(prev => {
                                  const skills = prev.secondarySkills.includes(vertical)
                                    ? prev.secondarySkills.filter(v => v !== vertical)
                                    : [...prev.secondarySkills, vertical].slice(0, 2);
                                  return { ...prev, secondarySkills: skills };
                                });
                              }}
                              onHover={() => setHoveredSkill(vertical)}
                              onLeave={() => setHoveredSkill(null)}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col gap-8"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-ivory-light/80">Why Socialz? *</label>
                    <p className="text-xs text-white/40 mb-2">And please don't say "to improve my skills."</p>
                    <textarea rows={3} value={formData.whySocialz} onChange={(e) => updateForm("whySocialz", e.target.value)} required className="bg-white/[0.01] border border-white/[0.04] rounded-xl px-4 py-3 text-base text-ivory-light focus:outline-none focus:border-slate-blue focus:bg-white/[0.05] transition-all placeholder-white/20 resize-none" placeholder="What draws you to JU Socialz? What do you hope to contribute and gain?"></textarea>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-ivory-light/80">Which one sounds most like you? *</label>
                    <p className="text-xs text-white/40 mb-2">Single choice.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Give me the task, I'll figure it out.",
                        "I need some guidance initially, then I'm good.",
                        "I work best with a team.",
                        "I'm the person who usually takes the lead.",
                        "Depends on the task — I adapt."
                      ].map((option, idx) => (
                        <label key={`workstyle-${idx}`} className="cursor-pointer">
                          <input
                            type="radio"
                            name="workStyle"
                            checked={formData.workStyle === option}
                            onChange={() => updateForm("workStyle", option)}
                            className="peer absolute opacity-0 w-0 h-0"
                          />
                          <div className="px-4 py-3 rounded-xl border border-white/[0.04] text-sm text-ivory-light/60 peer-checked:bg-slate-blue peer-checked:border-slate-blue peer-checked:text-white transition-all select-none hover:border-white/30 text-left">
                            {option}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-ivory-light/80">Did we miss your superpower? *</label>
                    <p className="text-xs text-white/40 mb-2">Maybe what you're good at isn't listed anywhere above. Tell us what you can do and how you think it could fit into Socialz.</p>
                    <textarea rows={3} value={formData.superpower} onChange={(e) => updateForm("superpower", e.target.value)} required className="bg-white/[0.01] border border-white/[0.04] rounded-xl px-4 py-3 text-base text-ivory-light focus:outline-none focus:border-slate-blue focus:bg-white/[0.05] transition-all placeholder-white/20 resize-none" placeholder="Your hidden talent, unusual skill, or unique perspective..."></textarea>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-ivory-light/80">Tell us something that makes us want to meet you *</label>
                    <textarea rows={3} value={formData.aboutYou} onChange={(e) => updateForm("aboutYou", e.target.value)} required className="bg-white/[0.01] border border-white/[0.04] rounded-xl px-4 py-3 text-base text-ivory-light focus:outline-none focus:border-slate-blue focus:bg-white/[0.05] transition-all placeholder-white/20 resize-none" placeholder="Tell us what makes you tick — your story, your passion, your vibe..."></textarea>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col gap-6"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold font-geist text-ivory-light">Review Your Application</h3>
                    <p className="text-sm text-ivory-dark/50 mt-1">Make sure everything looks right before submitting.</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Name", value: formData.name },
                      { label: "Email", value: formData.email },
                      { label: "Phone", value: formData.phone },
                      { label: "Instagram", value: formData.socialHandle },
                      { label: "Course", value: formData.course },
                      { label: "Year", value: `${formData.year}${formData.year ? "st" : ""} Year` },
                      { label: "Accommodation", value: formData.accommodation },
                      { label: "Primary Skill", value: formData.primarySkill },
                      { label: "Secondary Skills", value: formData.secondarySkills.length > 0 ? formData.secondarySkills.join(", ") : "None" },
                      { label: "Why Socialz", value: formData.whySocialz },
                      { label: "Work Style", value: formData.workStyle },
                      { label: "Superpower", value: formData.superpower },
                      { label: "About You", value: formData.aboutYou },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start py-3 border-b border-white/5">
                        <span className="text-sm text-ivory-dark/50">{item.label}</span>
                        <span className="text-sm text-ivory-light text-right max-w-[60%]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center relative z-20">
              {step > 1 ? (
                <button type="button" onClick={prevStep} disabled={isSubmitting} className="text-xs md:text-sm font-bold tracking-wider text-white/40 hover:text-white transition-colors disabled:opacity-50">
                  ← Back
                </button>
              ) : <div />}

              {step < totalSteps ? (
                <button type="button" onClick={nextStep} className="px-6 md:px-10 py-3 md:py-4 glass-card text-ivory-light rounded-full text-xs md:text-sm font-bold tracking-wider hover:bg-white/10 transition-colors">
                  Next Step
                </button>
              ) : (
                <button type="button" onClick={handleSubmit} disabled={isSubmitting} className="px-6 md:px-10 py-3 md:py-4 bg-slate-blue text-white rounded-full text-xs md:text-sm font-bold tracking-wider hover:scale-105 hover:shadow-glow transition-all duration-300 disabled:opacity-70 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin text-white/80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                        <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Transmitting...
                    </>
                  ) : "Submit Application"}
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
