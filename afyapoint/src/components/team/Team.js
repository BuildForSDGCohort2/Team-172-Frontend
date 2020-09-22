import React, { useState, useEffect } from "react";
import two from "../../assets/team/2.jpg";
import five from "../../assets/team/5.jpg";
import six from "../../assets/team/6.png";
import seven from "../../assets/team/7.png";

// import "./styles.css";

const portfolio = [
  {
    name: "Alice Grue",
    category: ["all", "psychiatrist"],
    img: five,
  },
  {
    name: "Joseph Murphy",
    category: ["all", "cardiologist"],
    img: two,
  },
  {
    name: "Alison Davis",
    category: ["all", "cardiologist"],
    img: seven,
  },
  {
    name: "Adam Taylor",
    category: ["all", "neurologist"],
    img: six,
  },
];

function Team() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <section className="bg-light mt-3 py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wow fadeInDown" data-wow-delay="0.1s">
              <div className="section-heading text-center">
                <h2 className="h-bold mb-3 font-weight-bold">Doctors</h2>
                <p>Highly certified doctors from all parts of the world.</p>
              </div>
            </div>
            <div className="divider-short"></div>
          </div>
        </div>
      </div>
      <div className="container pt-5 text-center">
        <div className="portfolio__labels mb-4">
          <button
            className="btn btn-outline-info mr-2"
            active={(filter === "all").toString()}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className="btn btn-outline-info mr-2"
            active={(filter === "psychiatrist").toString()}
            onClick={() => setFilter("psychiatrist")}
          >
            Psychiatrist
          </button>
          <button
            className="btn btn-outline-info mr-2"
            active={(filter === "cardiologist").toString()}
            onClick={() => setFilter("cardiologist")}
          >
            Cardiologist
          </button>
          <button
            className="btn btn-outline-info"
            active={(filter === "neurologist").toString()}
            onClick={() => setFilter("neurologist")}
          >
            Neurologist
          </button>
        </div>
        <div className="portfolio__container d-flex flex-wrap justify-content-center">
          {projects.map((item) =>
            item.filtered === true ? (
              <div
                key={item.name}
                className="card m-1"
                style={{ width: 18 + "rem" }}
              >
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.name}
                  height="230"
                />
                <div className="card-body">
                  <p className="card-text">{item.name}</p>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Team;
