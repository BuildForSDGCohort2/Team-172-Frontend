import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Boxes from "./components/boxes/Boxes";
import CallToAction from "./components/callToAction/CallToAction";
import Services from "./components/services/Services";
import Team from "./components/team/Team";
import Works from "./components/works/Works";
import Partners from "./components/partners/Partners";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App position-relative">
      <Navbar />
      <Hero />
      <Boxes />
      <CallToAction />
      <Services />
      <Team />
      <Works />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
