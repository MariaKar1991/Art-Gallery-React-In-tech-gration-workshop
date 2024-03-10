import "bootstrap/dist/css/bootstrap.min.css";
import "./BudgetArtwork.css";

export default function BudgetArtwork() {
  return (
    <>
      <h1 className="budget-header">
        Find your perfect artwork whatever your budget
      </h1>

      <div className="container d-flex justify-content-center align-items-center">
        <button className="under-header-buttons">Under £100</button>
        <button className="under-header-buttons">Under £500</button>
        <button className="under-header-buttons">£500 - £1000</button>
        <button className="under-header-buttons">£1000 - £2000</button>
        <button className="under-header-buttons">£2000+</button>
      </div>
    </>
  );
}
