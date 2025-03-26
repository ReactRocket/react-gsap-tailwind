import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
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
