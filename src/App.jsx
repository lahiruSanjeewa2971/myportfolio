import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <span className="flex flex-col items-center justify-center">
        <Navbar />
        <Hero />
        <Skills />
        <Portfolio />
        <Experience /> 
      </span>
      {/* <Navbar />
      <div className="w-full">
        <div className="flex flex-col justify-center items-center bg-red-500 w-full">
        </div>
      </div> */}
    </>
  );
};

export default App;
