"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Profile from "@/public/profile.jpg";

const AnimatedThemeToggler = dynamic(
  () =>
    import("@/components/ui/animated-theme-toggler").then(
      (mod) => mod.AnimatedThemeToggler
    ),
  { ssr: false }
);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/Project" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-y border-black/10 dark:border-white/10 border-dashed ">
      <nav className="mx-auto flex w-full md:max-w-4xl items-center justify-between rounded-xl py-4 md:py-2 backdrop-blur-xs px-4 md:px-8">

        <Link
          href="/"
          className="group flex items-center gap-2"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-xl">
            <Image
              src={Profile}
              alt="Profile"
              fill
              sizes="40px"
              className="rounded-xl object-cover transition-transform border-2 border-blue-300 duration-200 group-hover:scale-90"
            />
          </div>

          <h4 className="font-name text-sm md:text-lg">
            Holyarsenic
          </h4>
        </Link>

        <div className="flex items-center">

          <div className="hidden gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-2 text-base font-name transition-colors hover:bg-muted hover:text-foreground">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <AnimatedThemeToggler
              theme={resolvedTheme === "dark" ? "dark" : "light"}
              onThemeChange={(newTheme) => setTheme(newTheme)}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full p-2 transition-colors hover:bg-muted"/>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div
            className="
              absolute left-0 right-0 top-14
              flex flex-col gap-1
              rounded-2xl border border-border/50
              bg-background/95 p-3
              shadow-lg backdrop-blur-md
              md:hidden
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  rounded-xl px-4 py-3 text-sm
                  text-muted-foreground
                  transition-colors
                  hover:bg-muted hover:text-foreground
                "
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;