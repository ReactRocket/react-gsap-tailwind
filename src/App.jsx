import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "aos/dist/aos.css";
import Aos from "aos";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <BrowserRouter>
      <main className="max-w-[1920px] h-screen mx-auto">
        <Header />
        <Routing />
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
