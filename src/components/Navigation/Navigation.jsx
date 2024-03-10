import SearchBar from "../SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              ART GALLERY
            </a>
            <ul className="navbar-nav w-100 nav-fill  me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ALL ART
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ORIGINAL PAINTINGS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ART PRINTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ARTISTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <SearchBar />
            </div>
          </div>
          <img className="heart-icon" src="./heart.png" alt="heart icon" />
          <img className="avatar" src="./avatar.png" alt="avatar icon" />
          <img className="cart" src="./cart.png" alt="cart icon" />
        </div>
      </nav>
    </>
  );
}
