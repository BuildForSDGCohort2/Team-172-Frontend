import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Hero.css";

function Hero() {
  const [state] = useContext(AppContext);
  return (
    <section id="intro" className="intro">
      <div className="intro-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="well well-trans">
                <div>
                  <ul className="lead-list text-left">
                    <li>
                      <FontAwesomeIcon
                        icon={["fas", "check"]}
                        size="2x"
                        className="icon-success"
                      />
                      <span className="list">
                        <strong>Affordable monthly premium packages</strong>
                      </span>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={["fas", "check"]}
                        size="2x"
                        className="icon-success"
                      />
                      <span className="list">
                        <strong>Choose your favourite doctor</strong>
                      </span>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={["fas", "check"]}
                        size="2x"
                        className="icon-success"
                      />
                      <span className="list">
                        <strong>Only use friendly environment</strong>
                      </span>
                    </li>
                  </ul>
                  {!state.isAuthenticated ? (
                    <p className="text-right">
                      <Link
                        to="/signup"
                        href="./user/index.html"
                        className="btn btn-info mr-2"
                      >
                        Sign up <i className="fa fa-angle-right"></i>
                      </Link>
                      <Link to="/worker-signup" className="btn btn-info">
                        Sign up as Health Workers
                        <i className="fa fa-angle-right"></i>
                      </Link>
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
