import React from "react";

import ContentTitle from "../contentTitle/index";

import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";

const SkillsPanel = (props) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.panelContainer}>
      <ContentTitle>Skills</ContentTitle>
      <div className={classes.content}>
        <h2>Languages</h2>
        <ul>
          <li>JavaScript - 2 Years</li>
          <li>Python 3 - 2 Years</li>
          <li>Java</li>
          <li>C - 1 Year</li>
        </ul>
        <h2>Front-End</h2>
        <ul>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>React JS &amp; Redux Saga</li>
          <li>Vue JS</li>
          <li>Bootsrap, Material UI</li>
        </ul>
        <h2>Back-End</h2>
        <ul>
          <li>Node JS</li>
          <li>Express JS</li>
          <li>AWS</li>
          <ul>
            <li>CloudFront</li>
            <li>S3</li>
            <li>Lambda</li>
          </ul>
        </ul>
        <h2>Database</h2>
        <ul>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsPanel;
