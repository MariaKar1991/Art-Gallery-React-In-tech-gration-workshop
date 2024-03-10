import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import BannerInHeader from "../BannerInHeader/BannerInHeader";
import { useState, useEffect } from "react";

export default function Header() {
  const [imageHeader, setImageHeader] = useState("/header1.jpg");

  useEffect(() => {
    const interval = setInterval(() => {
      setImageHeader("/header2.jpg");

      setTimeout(() => {
        setImageHeader("header1.jpg");
      }, 5000);
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <div className="container-fluid">
      <header className="header">
        <div className="header-content">
          <img src={imageHeader} alt="header" className="img-fluid" />
          <BannerInHeader />
        </div>
      </header>
    </div>
  );
}
