import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hero.css";

function Hero() {
  return (
    <section id="intro" className="intro">
      <div className="intro-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="wow fadeInDown text-left"
                data-wow-offset="0"
                data-wow-delay="0.1s"
              >
                <h2 className="h-ultra highlight">Afya-Point medical group</h2>
                <h2 className="h-medium">
                  Provide high quality healthcare for you
                </h2>
              </div>
              <div className="well well-trans">
                <div className="wow fadeInRight" data-wow-delay="0.1s">
                  <ul className="lead-list text-left">
                    <li>
                      <FontAwesomeIcon
                        icon={["fas", "check"]}
                        size="2x"
                        className="icon-success"
                      />
                      <span className="list">
                        <strong>Affordable monthly premium packages</strong>
                        <br />
                        Our cost is cheap, but your health isn't.We wouldn't toy
                        with that.
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
                        <br />
                        From in-state doctors to foreign doctors.
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
                        <br />
                        Our user interface is very easy, Connect! with just a
                        click.
                      </span>
                    </li>
                  </ul>
                  <p className="text-right wow bounceIn" data-wow-delay="0.4s">
                    <a href="./user/index.html" className="btn btn-info mr-2">
                      Sign up <i className="fa fa-angle-right"></i>
                    </a>
                    <a href="./staff/index.html" className="btn btn-info">
                      Sign up as Health Workers{" "}
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </p>
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
