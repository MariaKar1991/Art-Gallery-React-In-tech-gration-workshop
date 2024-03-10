import "bootstrap/dist/css/bootstrap.min.css";
import "./BestSellingArtworksParagraph.css";

export default function BestSellingArtworksParagraph() {
  return (
    <>
      <div className="best-selling-content">
        <p className="best-selling">Best Selling Artworks</p>
        <p className="best-selling-description">
          An exciting selection of our best selling artists artworks. If you
          like any original works that have already been sold you <br /> can
          easily commission an artist.
        </p>
        <div className="description">
          <p className="view-all">VIEW ALL</p>
          <a href="">
            <img
              className="view-more-arrow"
              src="./arrowLeft.png"
              alt="arrow left icon"
            />
          </a>
        </div>
      </div>
    </>
  );
}
