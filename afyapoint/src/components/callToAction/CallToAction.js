import React from "react";
import "./CallToAction.css";

function CallToAction() {
  return (
    <section id="callaction" className="home-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="callaction bg-light">
              <div className="row text-center">
                <div className="col-md-8">
                  <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <div className="cta-text">
                      <h3>In an emergency? Need help now?</h3>
                      <p>Keep calm and get a specialist from I-HealthAfrica </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wow lightSpeedIn" data-wow-delay="0.1s">
                    <div className="cta-btn">
                      <a
                        href="#book"
                        className="btn btn-info btn-lg text-uppercase"
                      >
                        Book an appoinment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
