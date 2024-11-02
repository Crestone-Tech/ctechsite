import Header from "./components/Header";
import About from "./components/About";
import TeamGridLayout from "./components/TeamGridLayout";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <About />
      <TeamGridLayout />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
