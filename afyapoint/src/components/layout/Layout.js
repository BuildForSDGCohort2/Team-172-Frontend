import React from "react";
import "./Layout.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function App({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="main-content">{children}</div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
