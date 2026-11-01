"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";

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

interface HoveredData {
  count: number;
  date: string;
  level: number;
  x: number;
  y: number;
}

const themeColors = {
  dark: ["#1c2f44", "#214b73", "#2d63aa", "#317ad8", "#3c97ff"],
  light: ["#dbeafe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb"],
};

const formatDate = (dateStr: string) => {
  try {
    const [year, month, day] = dateStr.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.toLocaleDateString("en-US", {
      timeZone: "UTC",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
};

const GithubGraph = () => {
  const { resolvedTheme } = useTheme();
  const [hovered, setHovered] = useState<HoveredData | null>(null);

  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      className="relative flex flex-col w-full justify-center items-center gap-4 border border-foreground/20 rounded-2xl p-5 mt-4"
      onMouseLeave={() => setHovered(null)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}>

      <div className="w-full text-xl md:text-2xl font-bold text-blue-300">
        GitHub Activity
      </div>

      <GitHubCalendar
        username="holyarsenic"
        colorScheme={isDark ? "dark" : "light"}
        blockSize={10}
        blockMargin={4}
        fontSize={17}
        className="text-xl"
        theme={themeColors}
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            onMouseEnter: (e: React.MouseEvent<SVGRectElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const container = e.currentTarget.closest(".relative")?.getBoundingClientRect();
              if (container) {
                setHovered({
                  count: activity.count,
                  date: activity.date,
                  level: activity.level,
                  x: rect.left - container.left + rect.width / 2,
                  y: rect.top - container.top,
                });
              }
            },
            onMouseLeave: () => setHovered(null),
          })
        }
      />

      <AnimatePresence>
        {hovered && (
          <motion.div
            key="calendar-tooltip"
            initial={{ opacity: 0, scale: 0.9, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute pointer-events-none z-30 -translate-x-1/2 -translate-y-full transition-[left,top] duration-100 ease-out"
            style={{
              left: hovered.x,
              top: hovered.y - 8,
            }}>
            <div className="relative flex gap-2 rounded-xl bg-white px-3 py-1 text-black dark:bg-blue-300 whitespace-nowrap min-w-32.2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xs md:text-sm">
                  {hovered.count === 0
                    ? "No contributions"
                    : `${hovered.count} contribution${hovered.count === 1 ? "" : "s"}`}
                  {` `} on {formatDate(hovered.date)}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GithubGraph;
