"use client";

import Image from "next/image";
import Profile from "@/public/profile.jpg";
import Banner from "@/public/banner.png"
import { FlipWords } from "@/components/ui/flip-words";

const Intro = () => {

  return (
    <section className="relative w-full overflow-hidden px-10 pt-10 pb-4">

      <div className="relative h-60 w-full rounded-3xl">
        <Image
          src={Banner}
          alt="Banner"
          loading="eager"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-blue-50 via-blue-50/10 dark:from-black dark:via-black/10 to-transparent" />
      </div>

      <div className="relative -mt-22">

        <div className="flex flex-col md:flex-row items-center md:items-end gap-5 px-8">

          <div className="rounded-full border-4 border-blue-300 p-2">
            <Image
              src={Profile}
              alt="Profile"
              sizes="100vw"
              className="h-30 w-30 rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-5xl font-name text-black dark:text-white">
              Rohan Kamat
            </h1>

            <FlipWords
              className=" text-2xl text-blue-400 dark:text-blue-300"
              words={[
                "Full-Stack Web Developer",
                "Backend Developer",
                "Building Scalable Web Apps",
              ]}
            />
          </div>

        </div>
        <p className="mt-4 w-full text-lg leading-8 text-gray-700 dark:text-gray-300">
          Hey, I&apos;m <span className="text-black dark:text-white font-semibold">Rohan</span> — a 2nd-year student and Full-Stack Developer who likes turning random ideas into things that actually work. I enjoy building, experimenting, and learning by breaking things and figuring out how to fix them.
          <br />
          <br />
          I mostly work with{" "}
          <span className="text-blue-400 dark:text-blue-300 font-medium">
            TypeScript, React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS
          </span>
          . Right now, I&apos;m diving deeper into <span className="text-black dark:text-white font-medium">Next.js</span>, playing around with GenAI, and building projects that are fun to work on — because honestly, that&apos;s where most of the learning happens.
        </p>
      </div>
    </section>
  );
};

export default Intro;