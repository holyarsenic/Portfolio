import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


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

      <div className="columns-2 md:columns-2 sm:columns-1 gap-4">

      </div>
    </div>
  );
};

export default Projects;
