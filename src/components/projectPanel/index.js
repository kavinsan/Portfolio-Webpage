import React from "react";

import ContentTitle from "../contentTitle/index";

import { useStyles } from "./styles";
import { useTheme } from "@material-ui/core/styles";

const ProjectsPanel = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.panelContainer}>
      <ContentTitle>Projects</ContentTitle>
      <div className={classes.content}>
        <div className={classes.projectContainer}>
          <h2 className={classes.projectTitle}>
            <span
              className="project-name"
              onClick={() => {
                window.open("http://cryptomibs.io/", "_blank");
              }}
            >
              CryptoMibs Platform
            </span>
            {" - "}
            <span className="project-tools">React, Web3, Express</span>
          </h2>
        </div>
        <ul>
          <li>
            A decentralized application using Web3 to communicate with the
            Ethereum blockchain. Front-end built in React/Redux.
          </li>
          <li>
            Developed an image editing web app, Express server to handle service
            controls, Python 3 for image manipulation and Front-end built in
            React/Redux.
          </li>
        </ul>
        <div className={classes.projectContainer}>
          <h2 className={classes.projectTitle}>
            <span
              className="project-name"
              onClick={() => {
                window.open(
                  "https://github.com/kavinsan/Google-Weather-App-Prototype",
                  "_blank"
                );
              }}
            >
              Google Maps
            </span>
            {" - "}
            <span className="project-tools">React, Redux &amp; Redux Saga</span>
          </h2>
        </div>
        <ul>
          <li>
            Using Google Maps API to display real time Weather in different
            cities of British Colombia.
          </li>
          <li>
            Utilizes the Open Weather API for accurate weather details, using
            local storage to handle API rate limit on refetch.
          </li>
        </ul>
        <div className={classes.projectContainer}>
          <h2 className={classes.projectTitle}>
            <span
              className="project-name"
              onClick={() => {
                window.open("https://github.com/kavinsan/Ned-Bot", "_blank");
              }}
            >
              Discord Bot
            </span>
            {" - "}
            <span className="project-tools">Node, Express, Python 3</span>
          </h2>
        </div>
        <ul>
          <li>
            A bot developed to manage and interact with users on a live discord
            server. Using the Discord API to manage user events, role based
            commands and server side service controllers
          </li>
          <li>
            Utilizes web scrapers to fetch user stats for certain online games
            that don’t provide APIs.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPanel;
