import "bootstrap/dist/css/bootstrap.min.css";
import "./UnderHeaderButtons.css";

export default function UnderHeaderButtons() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <button className="under-header-buttons">LARGE ART</button>
      <button className="under-header-buttons">ABSTRACT ART</button>
      <button className="under-header-buttons">SEASCAPES</button>
      <button className="under-header-buttons">LANDSCAPES</button>
    </div>
  );
}
