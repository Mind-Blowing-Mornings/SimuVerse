import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="wraper">
        <div className="logo_cointainer">
          <img src={logo} alt="Simuverse" width={200} height={49} />
        </div>
        <div className="links_cointainer">
            <span className="link">Home</span>
            <span className="link">Store</span>
            <span className="link">Contact</span>
            <span className="link">Seller</span>
            <span className="link">Avatar</span>
        </div>
        <div className="right_side">
        <div className="items_container">
          <div className="items"></div>
          <div className="items"></div>
          <div className="items"></div>
          <div className="items"></div>
        </div>
        <div className="button">
        
          <button>Signup/Login</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
