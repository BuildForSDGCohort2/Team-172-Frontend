import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Boxes from "./components/boxes/Boxes";
import CallToAction from "./components/callToAction/CallToAction";

function App() {
  return (
    <div className="App position-relative">
      <Navbar />
      <Hero />
      <Boxes />
      <CallToAction />
    </div>
  );
}

export default App;
