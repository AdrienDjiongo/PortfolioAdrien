import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className=" sm:mx-10 mx-3 font-fira  lg:mx-auto max-w-[1100px] ">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
