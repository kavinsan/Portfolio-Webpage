import React from "react";

import ContentTitle from "../contentTitle/index";

import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";

const ExperiencePanel = (props) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.panelContainer}>
      <ContentTitle>Work Experience</ContentTitle>
      <div className={classes.content}>
        <div className={classes.experienceContainer}>
          <span className="experience-years">April 2019 - Present</span>
          <span className="experience-name">
            Surge ERP Consulting | Markham, ON
          </span>
          <span className="experience-title">Full Stack Software Developer</span>
        </div>
        <ul>
          <li>
            Developed a website including a landing page, login and user
            functionality.{" "}
          </li>
          <li>Developed the UI for an image editing tool in React JS. </li>
          <li>
            Implemented service controllers on a Express server using RESTful
            API methodologies.{" "}
          </li>
          <li>Dynamic image generation using Python 3</li>
          <li>Dynamic service side SVG generation in Node, Express</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperiencePanel;
