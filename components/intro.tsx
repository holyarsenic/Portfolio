import Image from "next/image";
import Profile from "@/public/profile.jpg";

const Intro = () => {
  return (
    <div className="flex items-center justify-center gap-4 w-full h-1/2">
      <Image 
        src={Profile} 
        alt="Profile" 
        className="rounded-full w-40 h-40 object-cover" 
      />

      <div className="flex flex-col items-start">
        <h1 className="text-4xl text-white font-heading">Rohan Kamat</h1>
        <div className="relative h-24 w-full">
        </div>
        <p className="text-gray-400 text-sm mt-2">
          I build modern, interactive web applications using TypeScript, 
          React, 
          Next.js, Node.js, and MongoDB, with a strong emphasis on clean UI, Performance, and User Experience
        </p>
      </div>
    </div>
  )
}

export default Intro
