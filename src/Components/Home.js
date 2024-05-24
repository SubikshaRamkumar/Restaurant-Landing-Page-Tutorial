import React from "react";
// import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="Banner Background" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            AI-Powered Aircraft Damage and Fault Detection System
          </h1>
          <p className="primary-text">
            Leveraging advanced imaging and analysis techniques to ensure the safety, reliability, and operational continuity of aircraft through meticulous damage assessment and fault detection.
          </p>
          <div className="button-horizontal">

          {/* <button className="secondary-button">
            Learn More <FiArrowRight />
          </button> */}
          <button className="secondary-button">
            Upload Image <FiArrowRight />
          </button>
          <button className="secondary-button">
            Start Chat <FiArrowRight />
          </button>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Home;
