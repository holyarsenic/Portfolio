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
    <Card className="w-full p-4">

      <div className="relative w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          width={400}
          height={100}
          className="h-100 w-full object-cover"
        />
      </div>

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground text-base tracking-tight">
            {title}
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

        <CardDescription className="text-muted-foreground line-clamp-3 text-xs leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

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