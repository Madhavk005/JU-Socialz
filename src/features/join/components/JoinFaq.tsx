"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export interface FaqData {
  question: string;
  answer: string;
}

const FALLBACK_FAQS: FaqData[] = [
  { question: "Do I need experience?", answer: "While experience is a plus, passion and willingness to learn are far more important." },
  { question: "Can first years apply?", answer: "Absolutely. We encourage first years to apply and grow with the ecosystem." },
  { question: "How much time commitment is needed?", answer: "A minimum commitment of one year is required." },
  { question: "Can I apply in multiple initiatives?", answer: "No. You can apply for only one initiative, so choose the one that best matches your skills and interests." },
];

export const JoinFaq = ({ faqsProp }: { faqsProp?: FaqData[] }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = faqsProp && faqsProp.length > 0 ? faqsProp : FALLBACK_FAQS;

  return (
    <section className="section-padding bg-obsidian-dark">
      <div className="container mx-auto px-6 max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-fluid-display font-bold font-geist text-ivory-light  tracking-tight mb-10 md:mb-16 text-center"
            >
              FAQ
            </motion.h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-[24px] overflow-hidden"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4"
              >
                <span className="text-fluid-p font-bold font-geist text-ivory-light">{faq.question}</span>
                <span className={`text-slate-lighter text-2xl transition-transform duration-500 ease-cinematic ${openIdx === idx ? 'rotate-45' : ''}`}>+</span>
              </button>
              <motion.div 
                initial={false}
                animate={{ height: openIdx === idx ? 'auto' : 0, opacity: openIdx === idx ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="px-6 md:px-8 pb-6 md:pb-8 text-ivory-dark/70 font-inter text-base md:text-lg">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
