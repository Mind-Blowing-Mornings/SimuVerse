import "./StoreCarousel.css";
import ArrowBtn from "../arrowBtn/ArrowBtn.jsx";
import storeTshirt from "../../../../assets/images/store-tshirt.svg";
import storeJeans from "../../../../assets/images/store-jeans.svg";
import Demo from "../demo/Demo.jsx";

export default function StoreCarousel() {
  return (
    <div className="store_carousel_container">
      <h2>Recommended for you</h2>
      <div className="store_carousel">
        <div className="carousel_btn_container">
          <ArrowBtn arrowClass="store_left_arrow">
            <svg
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.93934 13.0607C0.353553 12.4749 0.353553 11.5251 0.93934 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.93934 13.0607ZM3 13.5H2V10.5H3V13.5Z"
                fill="white"
              />
            </svg>
          </ArrowBtn>
          <ArrowBtn arrowClass="store_right_arrow">
            <svg
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5H12V10.5H11V13.5Z"
                fill="white"
              />
            </svg>
          </ArrowBtn>
        </div>
        <Demo storeTshirt={storeTshirt} storeJeans={storeJeans} />
      </div>
    </div>
  );
}
