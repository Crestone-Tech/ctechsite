import Header from "./components/Header";
import About from "./components/About";
import HorizontalDivider from "./components/HorizontalDivider";
import Team from "./components/Team";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App;
