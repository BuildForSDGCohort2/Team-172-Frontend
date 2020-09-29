import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div>
              <div className="widget">
                <h5 className="text-uppercase">About AfyaPoint Africa</h5>
                <p>
                  We are driven by a passion for a strengthened health system in
                  Africa and beyond. We've got lots of specialists with the same
                  mindset.
                </p>
              </div>
            </div>
            <div>
              <div className="widget mt-5">
                <h5 className="text-uppercase">Information</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#laboratory">Laboratory</a>
                  </li>
                  <li>
                    <a href="#medical">Medical treatment</a>
                  </li>
                  <li>
                    <a href="#terms">Terms & conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div>
              <div className="widget">
                <h5 className="text-uppercase">Headquarter</h5>
                <p>
                  We have centers in all major states in the country including
                  Nairobi, Mombasa, Kisumu, etc.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span
                      className="bg-dark p-2 rounded-circle mr-2 d-flex justify-content-center align-items-center"
                      style={{ height: 40, width: 40 }}
                    >
                      <FontAwesomeIcon
                        icon={["fas", "calendar"]}
                        size="2x"
                        className="text-white p-1"
                      />
                    </span>
                    24/7 Vital Health Connection
                  </li>
                  <li className="mb-2">
                    <span
                      className="bg-dark p-2 rounded-circle mr-2 d-flex justify-content-center align-items-center"
                      style={{ height: 40, width: 40 }}
                    >
                      <FontAwesomeIcon
                        icon={["fas", "phone"]}
                        size="2x"
                        className="text-white p-1"
                      />
                    </span>
                    +234 0888 904 711
                  </li>
                  <li>
                    <span
                      className="bg-dark p-2 rounded-circle mr-2 d-flex justify-content-center align-items-center"
                      style={{ height: 40, width: 40 }}
                    >
                      <FontAwesomeIcon
                        icon={["fas", "envelope"]}
                        size="2x"
                        className="text-white p-1"
                      />
                    </span>
                    hello@afyapoint.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div>
              <div className="widget">
                <h5 className="text-uppercase">Our location</h5>
                <p>Westlands, Nairobi</p>
              </div>
            </div>
            <div>
              <div className="widget mt-5">
                <h5 className="text-uppercase">Follow us</h5>
                <ul className="company-social d-flex p-0">
                  <li className="social-facebook pr-2">
                    <a href="#facebook">
                      <FontAwesomeIcon
                        icon={["fab", "facebook"]}
                        size="2x"
                        className=""
                      />
                    </a>
                  </li>
                  <li className="social-twitter pr-2">
                    <a href="#twitter">
                      <FontAwesomeIcon
                        icon={["fab", "twitter"]}
                        size="2x"
                        className=""
                      />
                    </a>
                  </li>
                  <li className="social-google pr-2">
                    <a href="#google plus">
                      <FontAwesomeIcon
                        icon={["fab", "google-plus"]}
                        size="2x"
                        className=""
                      />
                    </a>
                  </li>
                  <li className="social-vimeo pr-2">
                    <a href="#vimeo">
                      <FontAwesomeIcon
                        icon={["fab", "vimeo-square"]}
                        size="2x"
                        className=""
                      />
                    </a>
                  </li>
                  <li className="social-dribble pr-2">
                    <a href="#dribbble">
                      <FontAwesomeIcon
                        icon={["fab", "dribbble"]}
                        size="2x"
                        className=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div>
                <div className="text-left">
                  <p>&copy;Copyright - AfyaPoint Team. All rights reserved.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div>
                <div className="text-right">
                  <div className="credits">
                    Designed by{" "}
                    <a href="https://afyapoint.netlify.app/">AFYAPOINT TEAM</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
