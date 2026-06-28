import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Research />
      {/* ...rest */}
    </>
  );
}