"use client";

import dynamic from "next/dynamic";

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
  return (
    <div className="relative flex flex-col w-full justify-center items-center gap-4 border rounded-2xl p-5 overflow-x-auto mt-4">

      <div className="w-full text-2xl font-bold text-blue-300">
          GitHub Activity
      </div>
      <GitHubCalendar
        username="holyarsenic"
        colorScheme="dark"
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
        }}
      />
    </div>
  );
};

export default GithubGraph;