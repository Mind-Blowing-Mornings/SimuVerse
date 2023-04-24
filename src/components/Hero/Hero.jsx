import React from "react";
import image from "../../assets/images/Hero.png";
import "./Hero.css";
import Navbar from "../Navbar/Navbar.jsx";
const hero = () => {
  return (
    <>
      <div className="Hero_wrapper">
      <div className="navbar_div">
        <Navbar></Navbar>
      </div>
      <div className="hero-section">
        <div className="container">
          <div className="left-section">
            <h1 className="heading">
              Re imagining the way you shop Introducing SIMUVERSE
            </h1>
            <span className="span">
              Click on the explore button below to know more about SimuVerse.
            </span>
            <button>Explore</button>
          </div>
          <div className="right-section">
            <img src={image} alt="SimuVerse" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default hero;
