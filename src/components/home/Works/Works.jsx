import "./Works.css";
import image from "../../../assets/images/Works_girl.png";
import image1 from "../../../assets/images/Works_shirt.png";
import image2 from "../../../assets/images/Works_girl1.png";
import link1 from "../../../assets/images/link1.png";

function Works() {
  return (
    <>
      <div>
        <p className="p">How it works</p>
      </div>
      <div className="Works_wrapper">
        <div className="Works_container">
          <div className="Left_side">
            <div className="cloth" id="shirt">
              <img src={image1} alt="images" />
              <p>selected cloth</p>
            </div>
            <div className="cloth" id="blue_women">
              <img src={image2} alt="images" />
              <p>Your beautiful image</p>
            </div>
          </div>
          <div className="Middle_side">
            <img src={link1} alt="images" />
          </div>
          <div className="Right_side">
            <img src={image} alt="images" />
          </div>
        </div>
      </div>
      <div>
        <p className="text">
          Select the clothing item you liked and use the avatar that you created
          to find the best fit for you.
        </p>
      </div>
    </>
  );
}

export default Works;
