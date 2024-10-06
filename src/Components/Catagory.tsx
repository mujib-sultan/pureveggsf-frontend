import { useEffect } from "react";
import "swiper/swiper-bundle.css"; // This should work for older versions
import "swiper/css"; // For v9 and above, use this for core styles
import "swiper/css/navigation"; // Import Navigation styles
import f from "../assets/Images/f.jpg";
import v from "../assets/Images/v.png";

function Catagory() {
  useEffect(() => {}, []);

  return (
    <section className="py-5 overflow-hidden">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Category</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn btn-primary me-2">
                  View All
                </a>
                <div className="swiper-buttons">
                  <button className="swiper-prev category-carousel-prev btn btn-yellow">
                    ❮
                  </button>
                  <button className="swiper-next category-carousel-next btn btn-yellow">
                    ❯
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="category-carousel swiper">
              <div className="swiper-wrapper">
                <a href="#" className="nav-link swiper-slide text-center">
                  <img
                    src={v}
                    className="rounded-circle"
                    alt="Category Thumbnail"
                  />
                  <h4 className="fs-6 mt-3 fw-normal category-title">Fruits</h4>
                </a>
                <a href="#" className="nav-link swiper-slide text-center">
                  <img
                    src={f}
                    className="rounded-circle"
                    alt="Category Thumbnail"
                  />
                  <h4 className="fs-6 mt-3 fw-normal category-title">Veges</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catagory;
