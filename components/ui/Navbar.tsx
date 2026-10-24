"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Profile from "@/public/profile.jpg";
import ProfileLite from "@/public/Profile-lite.png";
import { motion, AnimatePresence } from "motion/react";

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
    <header className="fixed top-0 left-0 z-50 w-full border-y border-black/10 border-dashed dark:border-white/10">
      <nav className="mx-auto flex w-full items-center justify-between rounded-xl px-4 py-4 backdrop-blur-xs md:max-w-4xl md:px-8 md:py-2">

        <Link href="/" className="group flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl">
            <Image
              src={ProfileLite}
              alt="Profile"
              fill
              sizes="40px"
              className="rounded-xl border-2 border-blue-300 object-cover transition-transform duration-200 group-hover:scale-90 dark:hidden"/>

            <Image
              src={Profile}
              alt="Profile"
              fill
              sizes="40px"
              className="hidden rounded-xl border-2 border-blue-300 object-cover transition-transform duration-200 group-hover:scale-90 dark:block"/>
          </div>

          <h4 className="font-name text-sm md:text-lg">
            Holyarsenic
          </h4>
        </Link>

        <div className="flex items-center gap-5">
          <div className="hidden gap-5 md:flex">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-name transition-colors hover:text-blue-300">
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-name transition-colors hover:text-blue-300">
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center">
            <AnimatedThemeToggler
              theme={resolvedTheme === "dark" ? "dark" : "light"}
              onThemeChange={(newTheme) => setTheme(newTheme)}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full p-2 transition-colors hover:bg-blue-300/50"/>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted md:hidden">
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}>
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}>
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute left-0 right-0 top-14 flex flex-col gap-1 rounded-2xl border border-border/50 bg-background/95 p-3 shadow-lg backdrop-blur-md md:hidden"
              initial={{ opacity: 0, y: -15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.25,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
};

export default Navbar;