import React from "react";

import ContentTitle from "../contentTitle/index";

import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";

const EducationPanel = (props) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.panelContainer}>
      <ContentTitle>Education</ContentTitle>
      <div className={classes.content}>
        <span id="graduation-year">2014 - 2018</span>
        <span id="degree-title">BACHELORS OF COMPUTER SCIENCE</span>
        <span id="school-title">Ryerson University</span>
      </div>
    </div>
  );
};

export default EducationPanel;
