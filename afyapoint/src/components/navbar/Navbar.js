import React from "react";
import "./Navbar.css";
import logo from "../../assets/Asset 1.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between position-fixed w-100 shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" width="60" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#doctors">
                Doctors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#org">
                Health Organization
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#access">
                Health Workers Access
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-info my-2 my-sm-0"
                type="button"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
