import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Greek Style Plain Yogurt",
    price: 18.0,
    originalPrice: 24.0,
    discount: "10% OFF",
    rating: 4.5,
    reviews: 222,
    image: "Image/product-thumb-10.png",
  },
  {
    id: 2,
    title: "Honeycrisp Apples",
    price: 12.0,
    originalPrice: 15.0,
    discount: "20% OFF",
    rating: 4.0,
    reviews: 100,
    image: "Image/product-thumb-11.png",
  },
  {
    id: 3,
    title: "Almond Milk",
    price: 10.0,
    originalPrice: 12.0,
    discount: "15% OFF",
    rating: 4.8,
    reviews: 150,
    image: "Image/product-thumb-16.png",
  },
  {
    id: 4,
    title: "Organic Eggs",
    price: 8.0,
    originalPrice: 10.0,
    discount: "15% OFF",
    rating: 4.2,
    reviews: 80,
    image: "Image/product-thumb-16.png",
  },
  {
    id: 5,
    title: "Oat Milk",
    price: 9.0,
    originalPrice: 11.0,
    discount: "18% OFF",
    rating: 4.5,
    reviews: 110,
    image: "Image/product-thumb-10.png",
  },
  {
    id: 6,
    title: "Quinoa Salad",
    price: 13.0,
    originalPrice: 16.0,
    discount: "20% OFF",
    rating: 4.9,
    reviews: 200,
    image: "Image/product-thumb-11.png",
  },
  {
    id: 7,
    title: "Vegan Cheese",
    price: 10.0,
    originalPrice: 12.0,
    discount: "15% OFF",
    rating: 4.4,
    reviews: 120,
    image: "Image/product-thumb-10.png",
  },
];

const FeaturedProducts: React.FC = () => {
  const getSlides = (products: Product[]) => {
    return products.map((product) => (
      <SwiperSlide key={product.id}>
        <div className="product-item">
          <figure>
            <a href="#" title={product.title}>
              <img
                src={product.image}
                alt={product.title}
                className="tab-image"
              />
            </a>
          </figure>
          <div className="d-flex flex-column text-center">
            <h3 className="fs-6 fw-normal">{product.title}</h3>
            <div>
              <span className="rating">
                {[...Array(Math.floor(product.rating))].map((_, index) => (
                  <svg
                    key={index}
                    width="18"
                    height="18"
                    className="text-warning"
                  >
                    <use xlinkHref="#star-full"></use>
                  </svg>
                ))}
                {product.rating % 1 !== 0 && (
                  <svg width="18" height="18" className="text-warning">
                    <use xlinkHref="#star-half"></use>
                  </svg>
                )}
              </span>
              <span>({product.reviews})</span>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <del>${product.originalPrice.toFixed(2)}</del>
              <span className="text-dark fw-semibold">
                ${product.price.toFixed(2)}
              </span>
              <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
                {product.discount}
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
      </SwiperSlide>
    ));
  };

  return (
    <section className="py-5 overflow-hidden" id="featured-products">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Featured Products</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn btn-primary me-2">
                  View All
                </a>
                <div className="swiper-buttons">
                  <button className="swiper-prev btn btn-yellow">❮</button>
                  <button className="swiper-next btn btn-yellow">❯</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-none d-lg-block">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-4">
              {products.map((product) => (
                <div key={product.id} className="col">
                  <div className="product-item">
                    <figure>
                      <a href="#" title={product.title}>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="tab-image"
                        />
                      </a>
                    </figure>
                    <div className="d-flex flex-column text-center">
                      <h3 className="fs-6 fw-normal">{product.title}</h3>
                      <div>
                        <span className="rating">
                          {[...Array(Math.floor(product.rating))].map(
                            (_, index) => (
                              <svg
                                key={index}
                                width="18"
                                height="18"
                                className="text-warning"
                              >
                                <use xlinkHref="#star-full"></use>
                              </svg>
                            )
                          )}
                          {product.rating % 1 !== 0 && (
                            <svg
                              width="18"
                              height="18"
                              className="text-warning"
                            >
                              <use xlinkHref="#star-half"></use>
                            </svg>
                          )}
                        </span>
                        <span>({product.reviews})</span>
                      </div>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <del>${product.originalPrice.toFixed(2)}</del>
                        <span className="text-dark fw-semibold">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
                          {product.discount}
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
          </div>
          <div className="col-md-12 d-lg-none">
            <Swiper
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            >
              {getSlides(products)}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
