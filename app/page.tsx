import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Experience />
      {/* ...rest */}
    </>
  );
}

