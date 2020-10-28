import React from "react";
import "./Home.css";
import Hero from "../hero/Hero";
import Boxes from "../boxes/Boxes";
import CallToAction from "../callToAction/CallToAction";
import Works from "../works/Works";
import Partners from "../partners/Partners";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Boxes />
      <CallToAction />
      <Works />
      <Partners />
    </React.Fragment>
  );
}

export default App;
