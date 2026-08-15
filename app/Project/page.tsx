import { ArrowUpRight } from "lucide-react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Container from "@/components/containers";
import Link from "next/link";
import ProjectCard from "@/components/ProjectList/ProjectCard";
import ProjectCount from "@/components/ProjectList/ProjectCount";

const Projects = () => {
  return (
    <Container>
      <div className="min-h-screen relative w-full overflow-hidden px-4 md:px-10 py-10">
        <div className="w-full flex items-center justify-between mb-8">
          
          <Link
            href="/#home"
            className="flex items-center gap-1 group text-sm font-semibold text-gray-400 transition-all hover:bg-blue-400/10 hover:text-blue-300"
          >
            <FaArrowLeftLong className="text-sm transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Home</span>
          </Link>

          <Link
            href="https://github.com/holyarsenic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 group text-sm md:text-base font-bold text-gray-500 cursor-pointer"
          >
            View all on Github
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

       <h2 className="w-full text-2xl md:text-3xl font-bold text-blue-300 mb-10">Projects</h2>

        <div className="columns-1 sm:columns-1 md:columns-1 lg:columns-2 gap-4">
          {ProjectCount.map((project, i) => (
            <div key={i} className="mb-4 break-inside-avoid">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

      </div>
    </Container>
  );
};

export default Projects;