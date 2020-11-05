import React from "react";
import "./styles.css";
import ProfileImage from "../../assets/profile-image.png";

const PortfolioBLock = (props) => {
  return (
    <div className="portfolio-block-root">
      <div className="portfolio-block-border"></div>
      <div className="portfolio-block-container">
        <div className="portfolio-block-left"></div>
        <img id="profile-image" alt="profile" src={ProfileImage} />
        <div className="portfolio-title-container">
          <h1 id="portfolio-name">Kavinsan Thavanesan</h1>
          <h1 id="portfolio-occupation">Software Engineer</h1>
        </div>
      </div>
      <div className="portfolio-block-border"></div>
    </div>
  );
};

export default PortfolioBLock;
