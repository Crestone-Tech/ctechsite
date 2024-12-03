import { useRef } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const teamRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Header
        aboutRef={aboutRef}
        teamRef={teamRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={teamRef}>
        <TeamGridLayout />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
