import CountUp from "react-countup";

function HomeBanner() {
  return (
    <>
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
                <span className="fw-bold text-primary">PureVeggs</span>{" "}
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

          {/* Your additional card components can stay the same */}
        </div>
      </section>
    </>
  );
}

export default HomeBanner;
