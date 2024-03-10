import "bootstrap/dist/css/bootstrap.min.css";
import "./ExtraServices.css";
import ExtraServicesWhite from "../ExtraServicesWhite/ExtraServicesWhite";
import ExtraServicesBlue from "../ExtraServicesBlue/ExtraServicesBlue";

export default function ExtraServices() {
  const currentHour = new Date().getHours();
  const isDayNow = currentHour >= 6 && currentHour <= 18;

  //  Components Conditional Rendering for Practicing Purposes.
  return <>{isDayNow ? <ExtraServicesWhite /> : <ExtraServicesBlue />}</>;
}
