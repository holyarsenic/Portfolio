import { Button } from "./ui/button";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

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
    <Card className="w-full p-4 group hover:ring-violet-300/60 transition-all">
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

      <div className="h-45 w-full relative overflow-hidden rounded-xl border-4 group-hover:border-violet-300/60 transition-colors bg-[#111]">
        <Image
          src={image}
          alt={name}
          width={400}
          height={100}
          className="object-contain"
        />
      </div>  

        <CardDescription className="text-muted-foreground line-clamp-3 text-base leading-relaxed">
          {description}
        </CardDescription>

      <CardFooter className="flex items-center justify-between gap-1.5 border-none bg-transparent pt-0">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <Button key={index} variant="outline" size="sm">
              {tag}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          {gitHubLink && (
            <Link href={gitHubLink} target="_blank">
              <Button size="sm">Github</Button>
            </Link>
          )}

          {liveLink && (
            <Link href={liveLink} target="_blank">
              <Button size="sm">Live</Button>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;