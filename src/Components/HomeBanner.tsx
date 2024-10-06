import React from "react";
import CountUp from "react-countup";
import fresh from "../../public/Image/fruit (1).png";
import organic from "../../public/Image/organic.png";

const HomeBanner: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/Image/homebanner.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 pt-5 mt-5">
            <h2 className="display-1 ls-1">
              <span className="fw-bold" style={{ color: "#0599FB" }}>
                <span style={{ color: "#0599FB" }}>Pure</span>{" "}
                {/* Change "Pure" to blue */}
                <span style={{ color: "#64BC6D" }}>Veggs</span>{" "}
                {/* Change "Veggs" to green */}
              </span>{" "}
              Freshness at your <span className="fw-bold">Doorsteps</span>
            </h2>
            <p className="fs-4">Delivering wholesome organic goodness.</p>
            <div className="d-flex gap-3">
              <a
                href="#"
                className="btn btn-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3"
              >
                Start Shopping
              </a>
              <a
                href="#"
                className="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3"
              >
                About Us
              </a>
            </div>

            <div className="row my-5">
              <div className="col">
                <div
                  className="card text-white bg-gradient m-1"
                  style={{
                    background: "#64BC6D",
                  }}
                >
                  <div className="card-body text-center">
                    <p className="fs-1 fw-bold mb-0">
                      <CountUp end={14000} duration={3} />+
                    </p>
                    <p className="text-uppercase">Organic Products</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card text-white bg-gradient m-1"
                  style={{
                    background: "#64BC6D",
                  }}
                >
                  <div className="card-body text-center">
                    <p className="fs-1 fw-bold mb-0">
                      <CountUp end={50000} duration={3} />+
                    </p>
                    <p className="text-uppercase">Satisfied Customers</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card text-white bg-gradient m-1"
                  style={{
                    background: "#64BC6D",
                  }}
                >
                  <div className="card-body text-center">
                    <p className="fs-1 fw-bold mb-0">
                      <CountUp end={10} duration={3} />+
                    </p>
                    <p className="text-uppercase">Delivery Locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          <div className="col">
            <div className="card border-0 bg-primary rounded-5 p-4 text-light">
              <div className="row align-items-center">
                <div className="col-3 text-center">
                  <img src={fresh} height={60} alt="Fresh from farm" />
                </div>
                <div className="col-9">
                  <div className="card-body p-0">
                    <h5 className="text-light">Fresh from farm</h5>
                    <p className="card-text">
                      Handpicked produce, sourced directly from local farms to
                      ensure the highest quality and freshness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card border-0 bg-secondary rounded-5 p-4 text-light">
              <div className="row align-items-center">
                <div className="col-3 text-center">
                  <img src={organic} height={60} alt="100% Organic" />
                </div>
                <div className="col-9">
                  <div className="card-body p-0">
                    <h5 className="text-light">100% Organic</h5>
                    <p className="card-text">
                      Grown naturally without the use of chemicals or
                      pesticides, bringing you wholesome, healthy choices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card border-0 bg-danger rounded-5 p-4 text-light">
              <div className="row align-items-center">
                <div className="col-3 text-center">
                  <svg width="60" height="60">
                    <use xlinkHref="#delivery"></use>
                  </svg>
                </div>
                <div className="col-9">
                  <div className="card-body p-0">
                    <h5 className="text-light">Delivery</h5>
                    <p className="card-text">
                      Enjoy delivery at your convenience, bringing farm-fresh
                      goodness right to your doorstep.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
