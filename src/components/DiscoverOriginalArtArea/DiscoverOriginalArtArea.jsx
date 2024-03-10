import "bootstrap/dist/css/bootstrap.min.css";
import "./DiscoverOriginalArtArea.css";

export default function DiscoverOriginalArtArea() {
  return (
    <div className="container">
      <hr />
      <div className="row align-items-center">
        <div className="col-md-3">
          <img
            className="gallery-image"
            src="./gallery.jpg"
            alt="gallery image"
          />
        </div>
        <div className="col-md-9">
          <div className="d-md-flex flex-md-column">
            <div>
              <p className="discover-paragraph1">
                Discover <strong>original affordable art</strong> online and in
                our gallery
              </p>
              <p className="discover-paragraph2">
                Buy original contemporary artworks and limited edition prints
                online and in our art gallery in Oxfordshire. We offer over 300
                artists, but if you cannot find what you are looking for, we
                also source artworks for clients.
              </p>
            </div>
            <div className="text-center mt-md-4">
              <button className="shop-art">SHOP ART</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
