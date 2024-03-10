import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="footer-part">
        <div className="row align-items-center">
          <div className=" text-center">
            <p className="header-footer-center">ART GALLERY</p>
          </div>
          <div className=" text-center">
            <div className="social-media-links">
              <ul className="d-flex justify-content-center justify-content-md-center">
                <li>
                  <a href="https://www.facebook.com/">
                    <img
                      className="icons"
                      src="./facebook.png"
                      alt="Facebook icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <img
                      className="icons"
                      src="./instagram.png"
                      alt="Instagram icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <img
                      className="icons"
                      src="./twitter.png"
                      alt="Twitter icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="hr-line" />
        <button className="scrollToTop" onClick={scrollToTop}>
          <img src="arrowUp.png" alt="arrow up icon" className="arrow-up" />
        </button>
        <p className="copyright">Copyright &copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
