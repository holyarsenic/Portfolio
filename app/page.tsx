import Intro from "./sections/Intro";
import Contact from "./sections/Contact";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 py-20 gap-3 h-full w-1/2">
      <Intro />
      <Contact />
    </div>
  );
}
