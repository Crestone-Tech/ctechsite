import Header from "./components/Header";
import About from "./components/About";
import Team from "./components/TeamGridLayout";
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
      <Team />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
