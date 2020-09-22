import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Services.css";
import background from "../../assets/Group 5@2x.png";

function Services() {
  return (
    <section id="service" className="home-section pt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <img src={background} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="wow fadeInRight" data-wow-delay="0.1s">
              <div className="service-box">
                <div className="service-icon">
                  <FontAwesomeIcon
                    icon={["fas", "stethoscope"]}
                    size="3x"
                    className="skin"
                  />
                </div>
                <div className="service-desc">
                  <h5 className="h-light">Medical checkup</h5>
                  <p>Regular medical checkup! Connect with low cost.</p>
                </div>
              </div>
            </div>

            <div className="wow fadeInRight" data-wow-delay="0.2s">
              <div className="service-box">
                <div className="service-icon">
                  <span className="fa fa-wheelchair fa-3x"></span>
                  <FontAwesomeIcon
                    icon={["fas", "wheelchair"]}
                    size="3x"
                    className="skin"
                  />
                </div>
                <div className="service-desc">
                  <h5 className="h-light">Nursing Services</h5>
                  <p>Get the best services from our virtual nurses.</p>
                </div>
              </div>
            </div>
            <div className="wow fadeInRight" data-wow-delay="0.3s">
              <div className="service-box">
                <div className="service-icon">
                  <FontAwesomeIcon
                    icon={["fas", "plus-square"]}
                    size="3x"
                    className="skin"
                  />
                </div>
                <div className="service-desc">
                  <h5 className="h-light">Pharmacy</h5>
                  <p>Drug recommendations and health tips is to a tee.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="wow fadeInRight" data-wow-delay="0.1s">
              <div className="service-box">
                <div className="service-icon">
                  <FontAwesomeIcon
                    icon={["fas", "h-square"]}
                    size="3x"
                    className="skin"
                  />
                </div>
                <div className="service-desc">
                  <h5 className="h-light">Gyn Care</h5>
                  <p>We are well aware of female health intricacies.</p>
                </div>
              </div>
            </div>

            <div className="wow fadeInRight" data-wow-delay="0.2s">
              <div className="service-box">
                <div className="service-icon">
                  <FontAwesomeIcon
                    icon={["fas", "filter"]}
                    size="3x"
                    className="skin"
                  />
                </div>
                <div className="service-desc">
                  <h5 className="h-light">Neurology</h5>
                  <p>Get the best services from trained neurologists.</p>
                </div>
              </div>
            </div>
            <div className="wow fadeInRight" data-wow-delay="0.3s">
              <div className="service-box d-flex">
                <div className="service-icon">
                  <FontAwesomeIcon
                    icon={["fas", "user-md"]}
                    size="3x"
                    className="skin"
                  />
                </div>
                <div className="service-desc">
                  <h5 className="h-light">Sleep Center</h5>
                  <p>
                    Connect with a specialist to tackle any sleep disorders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
