"use client";

import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer 
    className="text-muted-foreground relative flex w-full flex-col items-center justify-center pt-10 md:pt-20 pb-0 text-center text-base font-name"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.7, ease: "easeOut"}}>
      <div className="text-sm md:text-base mb-10 md:mb-20">
        <p className="mb-0 md:mb-2">
          Designed & Developed by{" "}
          <span className=" font-medium text-blue-400 dark:text-blue-300">Rohan</span>
        </p>
        <p>&copy; 2026 All rights reserved.</p>
        
      </div>
    </motion.footer>
  )
}

export default Footer
