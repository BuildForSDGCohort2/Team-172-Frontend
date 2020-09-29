import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Boxes.css";

function Boxes() {
  return (
    <section id="boxes" className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div>
              <div className="box text-center">
                <FontAwesomeIcon
                  icon={["fas", "check"]}
                  size="3x"
                  className="circled bg-skin mb-5 p-4"
                />
                <h5 className="h-bold">Make an appoinment</h5>
                <p>
                  Just from your comfort zone, you can book a session with our
                  certified specialists of any kind. We are here for you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div>
              <div className="box text-center">
                <FontAwesomeIcon
                  icon={["fas", "list-alt"]}
                  size="3x"
                  className="circled bg-skin mb-5 p-4"
                />
                <h5 className="h-bold">Choose your package</h5>
                <p>
                  Choose the grades of specialists you would like to meet.
                  There's a wide range so definitely, you're going to love one
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div>
              <div className="box text-center">
                <FontAwesomeIcon
                  icon={["fas", "user-md"]}
                  size="3x"
                  className="circled bg-skin mb-5 p-4"
                />
                <h5 className="h-bold">Help by specialist</h5>
                <p>
                  Since your health is on us, we're yearning to listen to your
                  problems or needs. Select what exact help you'll want
                  rendered.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div>
              <div className="box text-center">
                <FontAwesomeIcon
                  icon={["fas", "hospital"]}
                  size="3x"
                  className="circled bg-skin mb-5 p-4"
                />
                <h5 className="h-bold">Get diagnostic report</h5>
                <p>
                  With no stress at all, engage in a striking conversation with
                  our specialists and get your diagnostic report electronically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Boxes;
