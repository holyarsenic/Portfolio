"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { motion } from "motion/react";

const ContactButton = ({className, children}: ButtonPrimitive.Props) => {
  return (
    <div className="w-full relative">
      <motion.button
        initial="initial"
        whileHover="hover"
        className={`group w-full relative z-10 overflow-hidden border border-gray-500 px-3 py-2 text-base text-gray-500 transition-colors duration-700 hover:text-white dark:hover:text-black cursor-pointer ${className}`}>
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>

        <div className="absolute inset-0 -bottom-0.75 -right-px z-0 overflow-hidden">
          <motion.div
            variants={{initial: { y: "125%", scale: 1.4 }, hover: {y: "0%", scale: 1.4}}}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className=" absolute left-[-5%] h-full w-[34%] rounded-full bg-blue-300"/>

          <motion.div
            variants={{ initial: { y: "125%", scale: 1.4 }, hover: { y: "0%", scale: 1.4 }}}
            transition={{duration: 0.7, delay: 0.06, ease: "easeInOut" }}
            className="absolute left-[30%] h-full w-[34%] rounded-full bg-blue-300"/>

          <motion.div
            variants={{ initial: { y: "125%", scale: 1.4}, hover: { y: "0%", scale: 1.4 }}}
            transition={{ duration: 0.7, delay: 0.025, ease: "easeInOut"}}
            className=" absolute left-[66%] h-full w-[34%] rounded-full bg-blue-300" />
        </div>
      </motion.button>
    </div>
  );
};

export default ContactButton;