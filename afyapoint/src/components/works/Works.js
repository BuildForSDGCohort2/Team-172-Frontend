import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import one from "../../assets/works/1.jpg";
import two from "../../assets/works/2.jpg";
import three from "../../assets/works/3.jpg";
import four from "../../assets/works/4.jpg";
import five from "../../assets/works/5.jpg";
import six from "../../assets/works/6.jpg";

class Works extends Component {
  state = {
    items: [
      { id: 1, image: one, desc: "Hospital facility" },
      { id: 2, image: two, desc: "Hospital laboratory" },
      { id: 3, image: three, desc: "Hospital equipment" },
      { id: 4, image: four, desc: "Hospital equipment" },
      { id: 5, image: five, desc: "Hospital stats" },
      { id: 6, image: six, desc: "Hospital doctors" },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <div className="section-heading text-center">
                  <h2 className="h-bold">Health Organization</h2>
                  <p>
                    We are bent on getting your health organized. Let's connect!
                  </p>
                </div>
              </div>
              <div className="divider-short"></div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <Carousel itemsToShow={4} showArrows={false}>
              {items.map((item) => (
                <div key={item.id} className="mx-2">
                  <img className="img-fluid" src={item.image} alt={item.desc} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Works;
