import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  );
}

export default App;
