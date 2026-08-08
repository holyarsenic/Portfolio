import Intro from "./sections/Intro";
import Contact from "./sections/Contact";
import Container from "@/components/containers"


export default function Home() {
  return (
    <div className="relative flex min-h-screen justify-center overflow-hidden flex-col">

        <div className=" w-full h-12  bg-gray-700 border-y border-white border-dashed opacity-80 dark:opacity-12" />

        <Container>
          <Intro />
        </Container>

        <div className=" w-full h-10  bg-gray-700 border-y border-white border-dashed opacity-80 dark:opacity-12" />

        <Container>
          <Contact />
        </Container>

        <div className=" w-full h-10  bg-gray-700 border-y border-white border-dashed opacity-80 dark:opacity-12" />
    </div>
  );
}
