import Intro from "./sections/Intro";
import Contact from "./sections/Contact";
import Container from "@/components/containers"
import Projects from "./sections/Projects"
import TechStack from "./sections/TechStack";
import FooterContactSection from "./sections/Connect";
import Quote from "./sections/Quote";
import Footer from "./sections/Footer";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div className="relative flex min-h-screen justify-center overflow-hidden flex-col">
        
        <Navbar />

        <div className="fixed bottom-0 left-0 w-full h-10 bg-linear-to-t z-50 from-blue-100/90 dark:from-black/80 to-transparent pointer-events-none"/>
        <Container>
          <Intro />
        </Container>

        <div className=" w-full h-6 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-20" />

        <Container>
          <Contact />
        </Container>

       <div className=" w-full h-6 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-20" />

        <Container>
          <Projects />
        </Container>

        <div className=" w-full h-6 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-20" />

        <Container>
          <TechStack />
        </Container>

        <div className=" w-full h-6 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-20" />

        <Container>
          <FooterContactSection />
        </Container>

        <div className=" w-full h-6 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-20" />

        <Container>
          <Quote />
        </Container>

        <div className=" w-full h-6 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-20" />

        <Container>
          <Footer />
        </Container>

        <div className=" w-full h-20 bg-gray-700/10 border-y border-black dark:border-white border-dashed opacity-20" />
    </div>
  );
}
