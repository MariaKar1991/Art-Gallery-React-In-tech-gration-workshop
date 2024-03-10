import "bootstrap/dist/css/bootstrap.min.css";
import "./ExtraServicesWhite.css";

export default function ExtraServicesWhite() {
  return (
    <>
      <hr className="line-top-services" />
      <div className="container-services">
        <ul className="list-unstyled d-flex justify-content-between align-items-center">
          <li className="d-flex flex-column align-items-center">
            <div className="text-center">
              <img
                className="extraServicesWhite"
                src="/interest-free.jpg"
                alt="Service 1"
              />
            </div>
            <span>INTEREST FREE CREDIT</span>
          </li>
          <li className="d-flex flex-column align-items-center">
            <div className="text-center">
              <img
                className="extraServicesWhite"
                src="/delivery.jpg"
                alt="Service 2"
              />
            </div>
            <span>FREE INSURANCE DELIVERY</span>
          </li>
          <li className="d-flex flex-column align-items-center">
            <div className="text-center">
              <img
                className="extraServicesWhite"
                src="/customer-service.jpg"
                alt="Service 3"
              />
            </div>
            <span>EXCELLENT CLIENT SERVICE</span>
          </li>
          <li className="d-flex flex-column align-items-center">
            <div className="text-center">
              <img
                className="extraServicesWhite"
                src="/returns.jpg"
                alt="Service 4"
              />
            </div>
            <span>FREE 14 DAY RETURNS</span>
          </li>
        </ul>
        <hr className="line-under-services" />
      </div>
    </>
  );
}
