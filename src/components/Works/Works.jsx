import "./Works.css";
import image from "../../assets/images/Works_girl.png";
import image1 from "../../assets/images/Works_shirt.png";
import image2 from "../../assets/images/Works_girl1.png";
import link1 from "../../assets/images/link1.png";

function Works() {
  return (
    <div className="App">
      <p className="p">How it works</p>
      <div className="img">
        <img src={image} alt="images" />
      </div>

      <div className="img1">
        <img src={image1} alt="selected cloth" />
        <p>selected cloth</p>
      </div>

      <div className="img2">
        <img src={image2} alt="images" />
        <p>Your beautiful image</p>
      </div>

      <div className="link1">
        <img src={link1} alt="images" />
      </div>

      <p className="text">
        Select the clothing item you liked and use the avatar that you created
        to find the best fit for you.
      </p>
    </div>
  );
}

export default Works;
