import React from "react";
import partnerOne from "./../../assets/partners/partner-1.jpg";
import partnerTwo from "./../../assets/partners/partner-2.jpg";
import partnerThree from "./../../assets/partners/partner-3.jpg";
import partnerFour from "./../../assets/partners/partner-4.jpg";

function Partners() {
  return (
    <section id="partner" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div>
              <div className="section-heading text-center">
                <h2 className="h-bold">Our Partners</h2>
                <p>
                  Take charge of your health today with our specially designed
                  health packages
                </p>
              </div>
            </div>
            <div className="divider-short"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="partner">
              <a href="#pharmacy">
                <img
                  className="img-fluid"
                  src={partnerOne}
                  alt="pharmacy logo"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="partner">
              <a href="#dumbhospital">
                <img
                  className="img-fluid"
                  src={partnerTwo}
                  alt="dumbhospital logo"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="partner">
              <a href="#stainless">
                <img
                  className="img-fluid"
                  src={partnerThree}
                  alt="stainless logo"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="partner">
              <a href="#mainstream">
                <img
                  className="img-fluid"
                  src={partnerFour}
                  alt="mainstream logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
