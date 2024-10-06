import React from "react";
import img from "../assets/Images/pexels-janetrangdoan-1128678.jpg";
import "./Best.css"; // Make sure to import your CSS file

// Define a type for your product
interface Product {
  title: string;
  rating: number;
  reviews: number;
  originalPrice: number;
  discountedPrice: number;
}

const BestSellingProducts: React.FC = () => {
  // Sample product data
  const products: Product[] = Array.from({ length: 10 }, (_, index) => ({
    title: `Product Title ${index + 1}`,
    rating: 5, // Assuming a 5-star rating
    reviews: Math.floor(Math.random() * 300), // Random number of reviews
    originalPrice: parseFloat((Math.random() * 100 + 20).toFixed(2)), // Random original price
    discountedPrice: parseFloat((Math.random() * 50 + 10).toFixed(2)), // Random discounted price
  }));

  return (
    <section className="pb-5">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between my-4">
              <h2 className="section-title">Best Selling Products</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn btn-primary rounded-1">
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="product-grid row row-cols-1  row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
              {products.map((product, index) => (
                <div className="col" key={index}>
                  <div className="product-item">
                    <figure>
                      <a href="index.html" title={product.title}>
                        <img
                          src={img}
                          alt="Product Thumbnail"
                          className="tab-image  rounded-4"
                        />
                      </a>
                    </figure>
                    <div className="d-flex flex-column text-center">
                      <h3 className="fs-6 fw-normal">{product.title}</h3>
                      <div>
                        <span className="rating">
                          {[...Array(product.rating)].map((_, starIndex) => (
                            <svg
                              key={starIndex}
                              width="18"
                              height="18"
                              className="text-warning"
                            >
                              <use xlinkHref="#star-full"></use>
                            </svg>
                          ))}
                        </span>
                        <span>({product.reviews})</span>
                      </div>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <del>${product.originalPrice.toFixed(2)}</del>
                        <span className="text-dark fw-semibold">
                          ${product.discountedPrice.toFixed(2)}
                        </span>
                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
                          {Math.round(
                            (1 -
                              product.discountedPrice / product.originalPrice) *
                              100
                          )}
                          % OFF
                        </span>
                      </div>
                      <div className="button-area p-3 pt-0">
                        <div className="row g-1 mt-2">
                          <div className="col-3">
                            <input
                              type="number"
                              name="quantity"
                              className="form-control border-dark-subtle input-number quantity"
                              defaultValue="1"
                            />
                          </div>
                          <div className="col-7">
                            <a
                              href="#"
                              className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"
                            >
                              <svg width="18" height="18">
                                <use xlinkHref="#cart"></use>
                              </svg>{" "}
                              Add to Cart
                            </a>
                          </div>
                          <div className="col-2">
                            <a
                              href="#"
                              className="btn btn-outline-dark rounded-1 p-2 fs-6"
                            >
                              <svg width="18" height="18">
                                <use xlinkHref="#heart"></use>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* / product-grid */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
