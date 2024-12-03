import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import TeamSection from "./components/TeamSection"

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <About />
      <TeamSection />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
