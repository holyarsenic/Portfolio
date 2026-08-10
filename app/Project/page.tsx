import { ArrowUpRight } from "lucide-react";
import Container from "@/components/containers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "@/components/ProjectList/ProjectCard";
import ProjectCount from "@/components/ProjectList/ProjectCount"


const Projects = () => {
  return (
    <Container>
      <div className="min-h-screen relative w-full overflow-hidden px-10 py-4">
        <div className="w-full flex justify-between">
          <Button variant={"link"}>
            Home
          </Button>

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
