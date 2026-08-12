"use client";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic"

const AnimatedThemeToggler = dynamic(
  () => import("@/components/ui/animated-theme-toggler").then((mod) => mod.AnimatedThemeToggler),
  { ssr: false }
)

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="fixed top-10 right-100 z-50">
      <AnimatedThemeToggler
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onThemeChange={(newTheme) => setTheme(newTheme)}
        variant="star"
        className="bg-card hover:bg-background flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border transition-colors [&>svg]:h-4 [&>svg]:w-4"
      />
    </div>
  );
};

export default Navbar;