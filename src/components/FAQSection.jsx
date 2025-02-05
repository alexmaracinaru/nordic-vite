import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import underline from "../images/underline.svg";
import Arrow from "../images/arrow.svg";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col border-t border-gray-300 py-4">
      {/* Question Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-sm sm:text-xl md:text-2xl text-navy">{question}</h3>
        <button className="text-lg md:text-2xl text-primary">
          {isOpen ? (
            " — "
          ) : (
            <img
              src={Arrow}
              alt="Arrow pointing to the right"
              className="md:w-4 md:h-4 w-3 h-3"
            />
          )}
        </button>
      </div>

      {/* Answer Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-4 text-muted text-sm sm:text-base max-w-[600px] pr-6 md:pr-0"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    // ... existing FAQ items ...
  ];

  return (
    <section id="faq" className="px-6 md:px-36 md:pt-32 py-12">
      <div className="relative inline-block mb-12">
        <h2 className="text-4xl text-navy relative z-10">Questions</h2>
        <img
          src={underline}
          alt="Red underline"
          className="absolute -bottom-2 left-0 w-[150px] md:w-[250px] z-0"
        />
      </div>
      <div className="space-y-8 mt-12">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
