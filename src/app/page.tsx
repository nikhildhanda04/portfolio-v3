import Navbar from "./components/common/navbar";
import Hero from "./components/landingpage/hero";
import Projects from "./components/landingpage/projects";
import {projects} from "./components/landingpage/projectData";
import Experience from "./components/landingpage/experience";
import Footer from "./components/common/footer";

export default function Home() {
  return (
    <>
    <div className="max-w-6xl flex flex-col gap-24 mx-auto overflow-hidden ">

      <div className="w-full">
        <Navbar />
      </div>
      
      <div id="hero">
        <Hero />
      </div>
      <div id="projects">
        <Projects projects={projects} />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div>
        <Footer />
      </div>

    </div>
    </>
  );
}
