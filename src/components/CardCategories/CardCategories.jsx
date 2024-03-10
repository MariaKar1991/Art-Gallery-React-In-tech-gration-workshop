import "bootstrap/dist/css/bootstrap.min.css";
import "./CardCategories.css";

// eslint-disable-next-line react/prop-types
export default function CardCategories({ title, image }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card text-center">
        <img src={image} className="img-top" alt="Painting Image" />
        <div className="card-body ">
          <h6>{title}</h6>
        </div>
      </div>
    </div>
  );
}
