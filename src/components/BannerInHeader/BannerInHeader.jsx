import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BannerInHeader.css";

export default function BannerInHeader() {
  const [bannerText, setBannerText] = useState(
    "DO YOU NEED SOME HELP CHOOSING ART?"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerText("CHECK OUR TOP PICKS THIS WEEK");

      setTimeout(() => {
        setBannerText("DO YOU NEED SOME HELP CHOOSING ART?");
      }, 5000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-in-header">
      <p className="banner-text">{bannerText}</p>
      <img
        src="arrowLeft.png"
        alt="arrow left icon"
        className={
          bannerText.includes("CHECK OUR TOP PICKS THIS WEEK")
            ? "arrow-left with-margin-arrow"
            : "arrow-left"
        }
      />
    </div>
  );
}
