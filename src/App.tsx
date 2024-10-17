import Header from "./components/Header";
import About from "./components/About";
import HorizontalDivider from "./components/HorizontalDivider";
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
      <HorizontalDivider />
      <Team />
      <HorizontalDivider />
      <Projects />
      <HorizontalDivider />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
