import { Button } from "../ui/button";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import {FaGithub} from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

export interface ProjectCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  gitHubLink?: string;
  isLive?: boolean;
  isBuilding?: boolean;
}

const ProjectCard = ({
  name,
  title,
  description,
  image,
  tags,
  liveLink,
  gitHubLink,
  isLive = false,
  isBuilding = false,
}: ProjectCardProps) => {

  return (
    <Card className="h-105 w-full p-4 group transition-all justify-evenly">
      <CardHeader>
        <div className="flex items-center justify-between">
            <CardTitle className="text-base">
              {name}
            </CardTitle>

            {isLive && (
              <div className="h-full flex items-center justify-center gap-2 font-name">
                <span className="w-2 h-2 rounded-full bg-blue-300">
                </span>
                <span className="text-base text-blue-300">
                  Live
                </span>
              </div>
            )}

            {isBuilding && (
              <div className="flex items-center justify-center gap-2 font-name">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse">
                </span>
                <span className="text-base text-yellow-500">
                  Building
                </span>
              </div>
            )}
        </div>
        <CardDescription className="text-base font-semibold">
          {title}
        </CardDescription>
      </CardHeader>

      <div className="h-45 w-full relative overflow-hidden rounded-xl border-4 group-hover:-translate-y-2 group-hover:border-blue-300/80 transition-transform cursor-pointer bg-[#111]">
        <Image
          src={image}
          alt={name}
          width={400}
          height={45}
          className="object-contain"
        />
      </div>  

        <CardDescription className="h-20 text-muted-foreground line-clamp-3 text-base leading-relaxed">
          {description}
        </CardDescription>

      <CardFooter className="flex items-center justify-between gap-1.5 border-none bg-transparent pt-0">
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 2).map((tag, index) => (
            <Button key={index} variant="outline">
              {tag}
            </Button>
          ))}

          {tags.length > 2 && (
            <Button variant="outline">
              +{tags.length - 2}
            </Button>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {gitHubLink && (
            <Link href={gitHubLink} target="_blank">
              <Button><FaGithub /></Button>
            </Link>
          )}

          {liveLink && (
            <Link href={liveLink} target="_blank">
              <Button><CiGlobe /></Button>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;