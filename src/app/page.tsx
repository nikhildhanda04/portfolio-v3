import Navbar from "./components/common/navbar";
import Hero from "./components/landingpage/hero";
import Projects from "./components/landingpage/projects";
import {projects} from "./components/landingpage/projectData";
import Experience from "./components/landingpage/experience";
import Footer from "./components/common/footer";

export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-0 overflow-hidden ">

      <div className="w-full">
        <Navbar />
      </div>
      
      <div id="hero" className="relative top-10">
        <Hero />
      </div>



      <div id="experience">
        <Experience />
      </div>

      <div id="projects">
        <Projects projects={projects} />
      </div>



      <div>
        <Footer />
      </div>

    </div>
    </>
  );
}
