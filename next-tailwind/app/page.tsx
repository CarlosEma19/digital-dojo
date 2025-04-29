import About from "@/components/about";
import Graphic from "@/components/graphic";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="content">
      <Header />
      <Hero />
      <Graphic />
      <About />
    </div>
  );
}

