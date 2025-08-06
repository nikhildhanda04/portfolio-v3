import Navbar from "./components/common/navbar";
import Hero from "./components/landingpage/hero";
import Experience from "./components/landingpage/experience";
import Footer from "./components/common/footer";

export default function Home() {
  return (
    <>
    <div className="max-w-6xl flex flex-col gap-24 mx-auto overflow-hidden border border-stone-300">

      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Footer />
      </div>

    </div>
    </>
  );
}
