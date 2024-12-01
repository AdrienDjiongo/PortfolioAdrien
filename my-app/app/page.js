import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className=" mx-10 font-fira  lg:mx-auto max-w-[1100px] ">
      <Header />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
