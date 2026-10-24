"use client";

import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "motion/react"

const quote = {
  text: "A smooth sea never made a skilled sailor.",
  author: "Franklin D. Roosevelt",
};

const Quote = () => {
  return (
    <motion.section 
    className="flex h-60 md:h-67 w-full items-center justify-center px-6 md:px-20 py-10"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.7, ease: "easeOut"}}>
      
      <div className="relative z-10 w-full text-center py-7">
        <FaQuoteLeft className="absolute top-0 mx-auto mb-10 text-9xl text-black/10 dark:text-white/10 -z-10" />

        <p className="text-xl font-light italic leading-relaxed tracking-wide text-black dark:text-white md:text-3xl">
          “{quote.text}”
        </p>

        <div className="mt-2 flex items-center justify-end gap-3">
          <span className="h-px w-8 bg-blue-300 dark:bg-blue-300/50" />
          <span className="text-sm uppercase tracking-[0.25em] text-blue-400 dark:text-blue-300/50">
            {quote.author}
          </span>
        </div>
      </div>
    </motion.section>
  );
};

export default Quote;