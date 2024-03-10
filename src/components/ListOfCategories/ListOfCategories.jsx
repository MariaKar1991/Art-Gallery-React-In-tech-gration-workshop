import "bootstrap/dist/css/bootstrap.min.css";
import "./ListOfCategories.css";
import CardCategories from "../CardCategories/CardCategories";

import originalPaintings from "/or-painting.jpg";
import artPrints from "/art-prints.jpg";

export default function ListOfCategories() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <CardCategories title="Original Paintings" image={originalPaintings} />
        <CardCategories title="Art Prints" image={artPrints} />
      </div>
    </div>
  );
}
