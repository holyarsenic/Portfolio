import Image from "next/image";
import Profile from "@/public/profile.jpg";
import Banner from "@/public/dark-banner.jpeg";
import { FlipWords } from "@/components/ui/flip-words";

const Intro = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl p-10">

      <div className="relative h-55 w-full">
        <Image
          src={Banner}
          alt="Banner"
          fill
          className=" w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />
      </div>

      <div className="relative -mt-22 pb-8">

        <div className="flex flex-col md:flex-row items-center md:items-end gap-5 px-8">

          <div className="rounded-full border-4 border-blue-300 p-2 shadow-2xl">
            <Image
              src={Profile}
              alt="Profile"
              className="h-30 w-30 rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-5xl text-white font-name">
              Rohan Kamat
            </h1>

            <FlipWords
              className=" text-2xl text-blue-300"
              words={[
                "Full-Stack Web Developer",
                "Backend Developer",
                "Building Scalable Web Apps",
              ]}
            />
          </div>

        </div>

          <p className="mt-4 w-full text-lg leading-8 text-gray-300">
            Hi, I&apos;m <span className="text-white font-semibold">Rohan</span>, 2nd - year student and a
            passionate Full-Stack Web Developer who enjoys building modern, responsive,
            and user-focused web applications. I love turning ideas into clean,
            high-performance solutions while continuously improving my skills as a
            developer.
            <br />
            <br />
            I primarily work with{" "}
            <span className="text-blue-300 font-medium">
              TypeScript, React, Next.js, Node.js, Express, MongoDB, Tailwind CSS
            </span>
            . I&apos;m currently deepening my expertise in
            <span className="text-white font-medium">{" "}Next.js{" "}</span> by building
            real-world projects, exploring modern web development practices, and learning
            scalable application architecture. I&apos;m also passionate about open-source
            contributions, exploring GenAI, and continuously growing as a software
            engineer.
          </p>
      </div>
    </section>
  );
};

export default Intro;