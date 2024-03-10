import "bootstrap/dist/css/bootstrap.min.css";
import "./Inspiration.css";

export default function Inspiration() {
  return (
    <div className="inspiration-container">
      <div className="inspiration-header-button">
        <p className="inspiration-header">Looking for inspiration?</p>
        <button className="inspiration-button">INSPIRE ME</button>
      </div>
      <img
        src="/inspiration1.jpg"
        className="inspiration-img-1"
        alt="inspiration image 1"
      />
      <img
        src="/inspiration2.jpg"
        className="inspiration-img-2"
        alt="inspiration image 2"
      />
      <img
        src="/inspiration3.jpg"
        className="inspiration-img-3"
        alt="inspiration image 3"
      />
    </div>
  );
}
