import BestSellingArtworksParagraph from "../BestSellingArtworksParagraph/BestSellingArtworksParagraph";
import BudgetArtwork from "../BudgetArtWork/BudgetArtwork";
import DiscoverOriginalArtArea from "../DiscoverOriginalArtArea/DiscoverOriginalArtArea";
import ExtraServices from "../ExtraServices/ExtraServices";
import Inspiration from "../Inspiration/Inspiration";
import ListOfPaintings from "../ListOfPaintings/ListOfPaintings";
import NewsLetter from "../NewsLetter/NewsLetter";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import UnderHeaderButtons from "../UnderHeaderButtons/UnderHeaderButtons";
import "./MainArea.css";

export default function MainArea() {
  return (
    <>
      <div className="main-area">
        <main>
          <UnderHeaderButtons />
          <BestSellingArtworksParagraph />
          <ListOfPaintings />
          <DiscoverOriginalArtArea />
          <ShopByCategory />
          <ExtraServices />
          <Inspiration />
          <BudgetArtwork />
          <NewsLetter />
        </main>
      </div>
    </>
  );
}
