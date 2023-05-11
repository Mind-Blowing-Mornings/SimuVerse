import "./Demo.css";
import Cloth from "../cloth/Cloth.jsx";

export default function Demo(props) {
  const { storeJeans, storeTshirt } = props;

  return (
    <div className="demo_container">
      <div className="cloth_container">
        <Cloth image={storeTshirt} title="Cloth 1" />
        <Cloth image={storeJeans} title="Cloth 2" />
      </div>

      <div className="pair_container">
        <h4>Demo Outfit</h4>
        <div className="pair_img_container">
          <img src={storeTshirt} alt="shirt icon" />
          <img src={storeJeans} alt="pants icon" />
        </div>
      </div>
    </div>
  );
}
