import "./Section.css";
import model from "../../../assets/images/3dmodel.svg";
import exchange from "../../../assets/images/exchange.svg";
import waste from "../../../assets/images/trash.svg";
import buy from "../../../assets/images/buy.svg";

export default function Section() {
  return (
    <div className="container_Features">
      <div className="features_div">
        <div className="box_one grid_item">
          <div className="heading_div">
            <img src={model} className="svg" />
            <h5>VIRTUAL TRY ON</h5>
          </div>
          <span>
            Allow your customers to try-on any of your products, anywhere,
            anytime - without the wait of a change room
          </span>
        </div>
        <div className="box_two grid_item">
          <div className="heading_div">
            <img src={buy} className="svg" />
            <h5>REDUCE RETURN</h5>
          </div>
          <span>
            Reduce returns by allowing customers to see your products in hi-res
            on their body type
          </span>
        </div>
        <div className="box_three grid_item">
          <div className="heading_div">
            <img src={exchange} className="svg" />
            <h5>INCREASE AOV</h5>
          </div>
          <span>
            Average oder value is bound to increase with this easy and
            competitive shopping experience
          </span>
        </div>
        <div className="box_four grid_item">
          <div className="heading_div">
            <img src={waste} className="svg" />
            <h5>REDUCE WASTE</h5>
          </div>
          <span>
            Help reduce your eco footprint by providing a solution that
            minimises material wastage or damaged stock
          </span>
        </div>
      </div>
    </div>
  );
}
