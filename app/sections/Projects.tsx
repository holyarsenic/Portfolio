"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectList/ProjectCard";
import ProjectCount from "@/components/ProjectList/ProjectCount";

const Projects = () => {
  return (
    <motion.div
      className="relative w-full overflow-hidden px-6 md:px-10 py-10"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}>
      <motion.div
        className="w-full flex justify-between"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>

        <p className="text-base md:text-lg font-bold text-gray-500 font-bitcount">
          Featured
        </p>

        <Link
          href="https://github.com/holyarsenic"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 group text-sm md:text-base font-bold text-gray-500 cursor-pointer">
          View all on Github
          <ArrowUpRight
            size={12}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </motion.div>

      <motion.h2
        className="w-full text-2xl md:text-3xl font-bold text-blue-300 mb-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}>
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3 md:px-2">
        {ProjectCount.slice(0, 4).map((project, i) => (
          <motion.div
            key={i}
            className="mb-4 break-inside-avoid"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: "easeOut",
            }}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-5 w-full flex items-center justify-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}>
        <Link href="/Project">
          <Button className="bg-transparent hover:bg-transparent text-base md:text-lg text-blue-400 dark:text-blue-300 font-name">
            View all Project
            <ArrowUpRight size={12} />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Projects;