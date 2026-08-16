"use client";

import Image from "next/image";
import Profile from "@/public/profile.jpg";
import ProfileLite from "@/public/Profile-lite.png"
import Banner from "@/public/banner.png";
import { FlipWords } from "@/components/ui/flip-words";
import { Meteors } from "@/components/ui/meteors";

const Intro = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 md:px-10 pt-20 pb-4">

      <div className="relative h-full md:h-60 w-full overflow-hidden">
      
        <div className="absolute -top-10 inset-x-0 bottom-0 z-0">
          <Meteors
            className="absolute inset-0"
            angle={250}
            number={10}
            maxDelay={2.5}
          />
        </div>

       
        <Image
          src={Banner}
          alt="Banner"
          loading="eager"
          className="z-10 w-full h-full object-cover"
        />

      
        <div className="absolute inset-0 z-20 bg-linear-to-t from-blue-50 via-blue-50/10 dark:from-black/95 dark:via-black/10 to-transparent" />
      </div>

      <div className="relative -mt-22 z-30">

        <div className="flex flex-col md:flex-row items-center md:items-end gap-5 px-8">

          <div className="rounded-full border-4 border-blue-300 p-1">
            <Image
              src={ProfileLite}
              alt="Profile"
              width={120}
              height={120}
              className="h-25 w-25 md:h-30 md:w-30 rounded-full object-cover dark:hidden"
              />

            <Image
              src={Profile}
              alt="Profile"
              width={120}
              height={120}
              className="hidden h-25 w-25 md:h-30 md:w-30 rounded-full object-cover dark:block"
            />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-5xl font-name text-black dark:text-white">
              Rohan Kamat
            </h1>

            <FlipWords
              className="text-xl md:text-2xl text-blue-400 dark:text-blue-300"
              words={[
                "Full-Stack Web Developer",
                "Backend Developer",
                "Building Scalable Web Apps",
              ]}
            />
          </div>

        </div>
        <p className="mt-4 w-full text-base md:text-lg leading-relaxed md:leading-8 text-gray-800 dark:text-gray-300 text-justify">
          I&apos;m Rohan, a 2nd-year student and Full-Stack Developer who likes
          building things from scratch and seeing an idea slowly turn into something
          real. I work across the stack, from{" "}
          <span className="text-blue-400 dark:text-blue-300 font-medium">
            React and Next.js
          </span>{" "}
          on the frontend to{" "}
          <span className="text-blue-400 dark:text-blue-300 font-medium">
            Node.js, Express, and MongoDB
          </span>{" "}
          on the backend.
          <br />
          <br />
          Most of my time goes into experimenting, building projects, and learning
          along the way. I like keeping things simple, trying new ideas, and turning
          random thoughts into something that actually works.
        </p>
      </div>
    </section>
  );
};

export default Intro;