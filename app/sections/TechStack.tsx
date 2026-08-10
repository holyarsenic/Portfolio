"use client";

import MagneticButton from "@/components/ui/magnetic-button"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiShadcnui,
  SiExpress,
  SiMongodb,
  SiCloudinary,
  SiC,
  SiCplusplus,
  SiVite,
  SiVercel,
  SiPostman,
  SiGreensock 
} from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";

interface StackItem {
  title: string;
  icon: React.ReactNode;
  type: "language" | "frontend" | "backend" | "tool";
}

const stackItems: StackItem[] = [
  {
    title: "C",
    icon: <SiC />,
    type: "language",
  },
  {
    title: "C++",
    icon: <SiCplusplus />,
    type: "language",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript />,
    type: "language",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
    type: "language",
  },
  {
    title: "HTML5",
    icon: <FaHtml5 />,
    type: "frontend",
  },
  {
    title: "CSS3",
    icon: <FaCss3Alt />,
    type: "frontend",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
    type: "frontend",
  },
  {
    title: "GSAP",
    icon: <SiGreensock />,
    type: "frontend"
  },
  {
    title: "React",
    icon: <FaReact />,
    type: "frontend",
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs />,
    type: "frontend",
  },
  {
    title: "Vite",
    icon: <SiVite />,
    type: "frontend",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs />,
    type: "backend",
  },
  {
    title: "Express",
    icon: <SiExpress />,
    type: "backend",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
    type: "backend",
  },
  {
    title: "Cloudinary",
    icon: <SiCloudinary />,
    type: "backend",
  },
  {
    title: "Shadcn UI",
    icon: <SiShadcnui />,
    type: "frontend",
  },
  {
    title: "Vercel",
    icon: <SiVercel />,
    type: "tool",
  },
  {
    title: "Postman",
    icon: <SiPostman />,
    type: "tool",
  },
  {
    title: "Git",
    icon: <FaGitAlt />,
    type: "tool",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    type: "tool",
  }
];

const filters = [
  { label: "All", value: "all" },
  { label: "Languages", value: "language" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Design", value: "design" },
  { label: "Tools", value: "tool" },
];

const TechStack = () => {

  const [activeFilter, setActiveFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden px-10 py-6">
      <div className="relative w-full flex justify-between items-center">
        <h2 className="text-3xl font-bold text-blue-300">
          Tech Stack
        </h2>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-4 py-4 text-sm font-semibold">
              
          <span>{filters.find((f) => f.value === activeFilter)?.label}</span>
          <span className="text-lg">
            <IoIosArrowDown />
          </span>

        </Button>

        {dropdownOpen && (
          <div className="absolute right-0 top-11 z-50 w-40 h-47 overflow-hidden rounded-xl border border-white/10 bg-[#111] p-1.5 shadow-xl">
            {filters.map((filter, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveFilter(filter.value);
                  setDropdownOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-sm transition-colors ${
                  activeFilter === filter.value
                    ? "bg-blue-300/10 text-blue-300"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 py-5">
        {stackItems.map((stack, i) => (
          <MagneticButton
            key={i}
            variant="outline"
            className="
              h-10
              px-4
              text-white/50
              transition-all
              hover:text-blue-300
              hover:shadow-[0_0_20px_rgba(147,197,253,0.08)]
            "
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">
                {stack.icon}
              </span>

              <span className="text-sm font-medium whitespace-nowrap">
                {stack.title}
              </span>
            </div>
          </MagneticButton>
        ))}
      </div>
    </section>
  );
};

export default TechStack
