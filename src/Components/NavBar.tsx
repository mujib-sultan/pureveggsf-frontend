import Logo from "../assets/Images/Property 1=Variant2.png";
import { CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
function NavBar() {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row py-3 border-bottom">
            <div className="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
              <div className="d-flex align-items-center my-3 my-sm-0">
                <a href="index.html">
                  <img src={Logo} alt="logo" className="img-fluid" />
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlinkHref="#menu"></use>
                </svg>
              </button>
            </div>

            <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
              <div className="search-bar row bg-light p-2 rounded-4">
                <div className="col-md-4 d-none d-md-block">
                  <select className="form-select border-0 bg-transparent">
                    <option>All Categories</option>
                    <option>Groceries</option>
                  </select>
                </div>
                <div className="col-11 col-md-7 position-relative">
                  <form
                    id="search-form"
                    className="text-center d-flex align-items-center"
                    action="index.html"
                    method="post"
                  >
                    <CiSearch
                      size={20}
                      className="position-absolute"
                      style={{
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    />
                    <input
                      type="text"
                      className="form-control border-0 bg-transparent ps-5"
                      placeholder="Search"
                    />
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <ul className="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-center mb-0 fw-bold text-uppercase text-dark">
                <li className="nav-item active">
                  <a href="index.html" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle pe-3"
                    role="button"
                    id="pages"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul
                    className="dropdown-menu border-0 p-3 rounded-0 shadow"
                    aria-labelledby="pages"
                  >
                    <li>
                      <a href="index.html" className="dropdown-item">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Shop
                      </a>
                    </li>

                    <li>
                      <a href="index.html" className="dropdown-item">
                        Product
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Service
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Cart
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Saved
                      </a>
                    </li>

                    <li>
                      <a href="index.html" className="dropdown-item">
                        Contact
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
              <ul className="d-flex justify-content-end list-unstyled m-0">
                <li>
                  <a href="#" className="p-2 mx-1">
                    <CiUser size={24} color="green"></CiUser>
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2 mx-1">
                    <FiShoppingCart size={24} color="green"></FiShoppingCart>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="p-2 mx-1"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasCart"
                    aria-controls="offcanvasCart"
                  >
                    <svg width="24" height="24">
                      <use color="green" xlinkHref="#wishlist"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
