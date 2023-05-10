import "./Cloth.css";

export default function Cloth(props) {
  return (
    <div className="store_carousel_cloth">
      <div className="cloth_img">
        <img src={props.image} alt="cloth img" />
      </div>
      <div style={{ alignSelf: "flex-start" }}>
        <h4>{props.title}</h4>
        <span>Brand name</span>
        <span>Product type</span>
      </div>
      <button>Buy</button>
    </div>
  );
}
