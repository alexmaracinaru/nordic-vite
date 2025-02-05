import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import underline from "../images/underline.svg";
import Arrow from "../images/arrow.svg";

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col border-t border-lightMuted py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <h3 className="text-sm sm:text-xl md:text-2xl text-navy font-serif pr-4">
          {question}
        </h3>
        <span className="text-lg md:text-2xl text-primary flex-shrink-0">
          {isOpen ? (
            <span className="font-serif">—</span>
          ) : (
            <img
              src={Arrow}
              alt=""
              className="md:w-4 md:h-4 w-3 h-3 transition-transform duration-300"
              aria-hidden="true"
            />
          )}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            className="mt-4 text-muted text-sm sm:text-base max-w-[600px] pr-6 md:pr-0"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="font-sans">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Why is it harder for internationals to find jobs in Denmark?",
      answer:
        "Cultural differences, limited networks, and the unspoken rules of Danish workplaces create barriers. Danes value trust and authenticity, but if you don't know how to navigate these subtleties, it can feel like you're knocking on a door that refuses to open.",
    },
    {
      question: "Do I need to speak Danish to secure a job?",
      answer:
        "Not always, but it helps. English will get you through the door at international companies, but Danish opens more doors — local ones. It shows respect, effort, and a commitment to being part of the community. Even learning the basics can make a world of difference.",
    },
    {
      question: "How can I improve my chances of securing a job in Denmark?",
      answer:
        "Make your CV and cover letter impossible to ignore: precise, clear, and tailored to the Danish way of working: short on fluff, big on substance. Show, don't just tell, how your skills solve real problems. Network like it's your second job. The Danish job market thrives on personal connections, so get out there, meet people, ask questions, and listen. Understand the unspoken rules: Danes value teamwork, trust, and authenticity. And most importantly, show them you're here to contribute, not just to fit in. Ambition backed by humility goes a long way.",
    },
    {
      question: "What does Nordic Compass offer?",
      answer:
        "Nordic Compass offers perspective. We provide mentorship, networking events, and workshops tailored to help internationals navigate the Danish job market confidently. Our mentorship connects you with those who've succeeded before you, our networking events place you in rooms where opportunities are born, and our workshops strip away confusion, giving you the tools to present yourself with clarity and confidence in the Danish job market. Everything we do is designed to move you closer to your goal: a career that fits your potential.",
    },
    {
      question: "How can a mentor help me?",
      answer:
        "A mentor is your shortcut to understanding the unspoken: how to present yourself, where to focus your efforts, and how to stand out. They've walked the path you're starting on and can save you time, mistakes, and frustration. Think of them as your personal guide to cracking the code of the Danish job market.",
    },
    {
      question: "What makes Nordic Compass unique?",
      answer:
        "Nordic Compass stands apart because it's shaped by you. Every program is the result of deep listening and research into the realities faced by internationals navigating the Danish job market. We don't just address surface-level challenges; we tackle the cultural nuances, the gaps in connections, and the unspoken barriers head-on. Each initiative is crafted to deliver practical, meaningful support that respects your time and empowers your journey. This isn't a one-size-fits-all, but rather a roadmap created with your voice at its core.",
    },
  ];

  return (
    <section id="faq" className="px-6 md:px-24 md:pt-32 py-12">
      <div className="relative inline-block mb-12">
        <h2 className="text-4xl text-navy relative z-10 font-serif">
          Questions
        </h2>
        <img
          src={underline}
          alt=""
          className="absolute -bottom-2 left-0 w-[150px] md:w-[250px] z-0"
          aria-hidden="true"
        />
      </div>
      <div className="space-y-8 mt-12">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
