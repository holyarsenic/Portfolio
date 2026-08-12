"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="fixed top-10 right-100 z-50">
      <AnimatedThemeToggler
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onThemeChange={(newTheme) => setTheme(newTheme)}
        variant="square"
        className="bg-card hover:bg-background flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border transition-colors [&>svg]:h-4 [&>svg]:w-4"
      />
    </div>
  );
};

export default Navbar;