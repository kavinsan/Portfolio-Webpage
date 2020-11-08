import React, { useState, useEffect } from "react";
import "./styles.css";

import ProfileImage from "../../assets/profile-img.png";

import { useStyles } from "./styles";
import { useTheme } from "@material-ui/core/styles";

import ContactsPanel from "../contactsPanel/index";

const PortfolioBLock = (props) => {
  const theme = useTheme();
  const [height,setHeight] = useState(window.innerHeight);

  useEffect(() => {
    if(window.innerHeight){
      setHeight(window.innerHeight);
    }
  },[]);
  
  theme.props = {
    height: height
  }
  const classes = useStyles(theme);

  return (
    <div className={classes.portfolioBlockRoot}>
      <div className={classes.portfolioBlockBorder}></div>
      <div className={classes.portfolioBlockContainer}>
        <div className={classes.portfolioBlockLeft}></div>
        <div className={classes.portfolioBlockMiddle}>
          <img
            className={classes.profileImage}
            alt="profile"
            src={ProfileImage}
          />
          <div className={classes.portfolioTitleContainer}>
            <h1 id="portfolio-name">Kavinsan Thavanesan</h1>
            <h1 id="portfolio-occupation">Software Engineer</h1>
          </div>
          <div className={classes.subLeftPanel}>
            <ContactsPanel />
          </div>
        </div>
        <div className={classes.subLeftPanelMd}>
            <ContactsPanel />
          </div>
      </div>
      <div className={classes.portfolioBlockBorder}></div>
    </div>
  );
};

export default PortfolioBLock;
