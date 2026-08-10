import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";


const projectCount: ProjectCardProps[] = [
  {
    name: "Shuriken",
    title: "Full-Stack Social Web App",
    description:
      "A fast and minimal developer toolkit built to make everyday workflows a little less painful.",
    image: "/Project1.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveLink: "https://shuriken.example",
    gitHubLink: "https://github.com/holyarsenic/shuriken",
    isLive: true,
  },
  {
    name: "Road-City",
    title: "Landing Page",
    description:
      "A simple task management app with a clean UI, smooth interactions, and a focus on keeping things distraction-free.",
    image: "/Project2.png",
    tags: ["React", "TypeScript", "Supabase"],
    liveLink: "https://taskflow.example",
    gitHubLink: "https://github.com/holyarsenic/taskflow",
    isLive: true,
  },
];
    


const Projects = () => {
  return (
    <div className="relative w-full overflow-hidden px-10 py-4">
      <div className="w-full flex justify-between">
        <p className="text-lg font-bold text-gray-500 font-bitcount">
          Featured
        </p>

        <Link
          href="https://github.com/holyarsenic"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 group text-base font-bold text-gray-500 cursor-pointer"
        >
          View all on Github
          <ArrowUpRight
            size={12}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>

      <h2 className="w-full text-3xl font-bold text-blue-300 mb-6">Projects</h2>

      <div className="columns-1 sm:columns-2 gap-4">
        {projectCount.map((project, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
