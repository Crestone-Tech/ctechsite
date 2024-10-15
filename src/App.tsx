import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import HorizontalDivider from "./components/HorizontalDivider";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <About />
      <HorizontalDivider />
      <p>MAIN CONTENT! Coming soon =)</p>
      <HorizontalDivider />
      <Footer />
    </>
  );
}

export default App;
