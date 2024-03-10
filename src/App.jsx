import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header";
import MainArea from "./components/MainArea/MainArea.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
// import MyButton from "./components/MyButton/MyButton.jsx";
import TopMainPageBanner from "./components/TopMainPageBanner/TopMainPageBanner.jsx";
import "./App.css";
import UnderMainPageBanner from "./components/UnderNavMainPageBanner/UnderNavMainPagebanner.jsx";

function App() {
  return (
    <>
      <TopMainPageBanner />
      <Navigation />
      <UnderMainPageBanner />
      <Header />
      {/* <MyButton /> */}
      <MainArea />
      <Footer />
    </>
  );
}

export default App;
