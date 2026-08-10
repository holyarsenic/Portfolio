import { ProjectCardProps } from "./ProjectCard";

const ProjectCount: ProjectCardProps[] = [
  {
    name: "Shuriken",
    title: "Full-Stack Social Web App",
    description:
      "A social platform for image discovery and community engagement, with protected routing, auth context, and push notifications.",
    image: "/Project1.png",
    tags: ["React", "React Router", "Tailwind CSS", "Node.js", "Express", "MongoDb"],
    liveLink: "https://shuriken-nine.vercel.app/", 
    gitHubLink: "https://github.com/holyarsenic/Shuriken",
    isLive: true,
  },
  {
    name: "Road-City",
    title: "Travel Landing Page",
    description:
      "A modern, responsive landing page for a travel/road-trip concept site.",
    image: "/Project2.png",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    liveLink: "https://road-city.vercel.app/", 
    gitHubLink: "https://github.com/holyarsenic/Road-City",
    isLive: true,
  },
   {
    name: "Kanban-Board",
    title: "Kanban Board App",
    description:
      "A drag-and-drop Kanban board for organizing tasks across columns.",
    image: "/Project3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://holyarsenic.github.io/Kanban-Board/",
    gitHubLink: "https://github.com/holyarsenic/Kanban-Board",
    isLive: false,
  },
  {
    name: "Pizza-Shop",
    title: "Pizza Shop Website",
    description:
      "A fully responsive pizza shop site with GSAP animations, a custom cursor effect, responsive navigation, and a login popup.",
    image: "/Project5.png",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    liveLink: "holyarsenic.github.io/Pizza-Shop/", 
    gitHubLink: "https://github.com/holyarsenic/Pizza-Shop",
    isLive: true,
  },
];

export default ProjectCount;
   