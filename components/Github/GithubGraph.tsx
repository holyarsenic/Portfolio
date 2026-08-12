"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  {
    ssr: false,
       loading: () => (
      <div className="flex h-32 w-full items-center justify-center">
        <div className="border-line-strong h-6 w-6 animate-spin rounded-full border-2 border-t-blue-300"></div>
      </div>
    ),
  }
);

const GithubGraph = () => {

  const { resolvedTheme } = useTheme()
  return (
    <div className="relative flex flex-col w-full justify-center items-center gap-4 border rounded-2xl p-5 overflow-x-auto mt-4">

      <div className="w-full text-2xl font-bold text-blue-300">
          GitHub Activity
      </div>
      <GitHubCalendar
        username="holyarsenic"
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        blockSize={10}
        blockMargin={4}
        fontSize={17}
        className="text-xl"
        theme={{
            dark: [
              "#1c2f44",
              "#214b73",
              "#2d63aa",
              "#317ad8",
              "#3c97ff",
            ],
          light: [
              "#dbeafe",
              "#93c5fd", 
              "#60a5fa", 
              "#3b82f6", 
              "#2563eb",
            ]
          }}
      />
    </div>
  );
};

export default GithubGraph;