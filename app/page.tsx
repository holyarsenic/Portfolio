import Intro from "./sections/Intro";
import Contact from "./sections/Contact";
import Container from "@/components/containers"
import Projects from "./sections/Projects"
import TechStack from "./sections/TechStack";
import FooterContactSection from "./sections/FooterContactSection";
import Quote from "./sections/Quote";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";

export default function Home() {
  return (
    <div className="relative flex min-h-screen justify-center overflow-hidden flex-col">

        <Container>
          <Navbar />
        </Container>

        <div className=" w-full h-6 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-12" />

        <Container>
          <Intro />
        </Container>

        <div className=" w-full h-6 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-12" />

        <Container>
          <Contact />
        </Container>

       <div className=" w-full h-6 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-12" />

        <Container>
          <Projects />
        </Container>

        <div className=" w-full h-6 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-12" />

        <Container>
          <TechStack />
        </Container>

        <div className=" w-full h-6 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-12" />

        <Container>
          <FooterContactSection />
        </Container>

        <div className=" w-full h-6 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-12" />

        <Container>
          <Quote />
        </Container>

        <div className=" w-full h-6 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-12" />

        <Container>
          <Footer />
        </Container>

        <div className=" w-full h-20 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-12" />
    </div>
  );
}
