/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardPainting.css";

// eslint-disable-next-line react/prop-types
export default function Card({
  description = "Cool Painting For Sure",
  title,
  price,
  image = "/default-painting.jpg",
}) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card">
        <img src={image} className="img-top" alt="Painting Image" />
        <div className="card-body">
          <h4 className="card-text">{description}</h4>
          <h6>{title}</h6>
          <h6>{price}</h6>
        </div>
      </div>
    </div>
  );
}
