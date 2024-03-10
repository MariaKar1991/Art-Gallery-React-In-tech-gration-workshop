import "bootstrap/dist/css/bootstrap.min.css";
import "./ShopByCategory.css";
import ListOfCategories from "../ListOfCategories/ListOfCategories";

export default function ShopByCategory() {
  return (
    <div className="shop-by-category-content text-center">
      <p className="shop-by-category-header">Shop by Category</p>
      <ListOfCategories />
    </div>
  );
}
