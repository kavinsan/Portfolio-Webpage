import React from "react";
import "./App.css";

import { useStyles } from "./styles";
import { useTheme } from "@material-ui/core/styles";

import ContentTitle from "./components/contentTitle/index";
import Content from "./components/content/index";
import PortfolioBlock from "./components/portfolioBlock/index";

import ContactsPanel from "./components/contactsPanel/index";
import SkillsPanel from "./components/skillsPanel/index";
import EducationPanel from "./components/educationPanel/index";
import ProjectsPanel from "./components/projectPanel/index";
import ExperiencePanel from "./components/experiencePanel/index";

const App = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.App}>
      <div className={classes.LeftPanel}>
        <div id="profileContainer">
          <ContentTitle>About Me</ContentTitle>
          <Content>
            A full stack Software Engineer and a life-long learner focused on
            new technology and best practices to write beautiful code. Looking
            for a full-time position at a company to further understandings in
            backend architecture in large scale project design as well as
            fundamentals of frontend UX/UI designs. Experienced in object
            oriented programming, software development processes and working in
            an agile startup environments.
          </Content>
        </div>
        <div id="portfolioBlockContainer">
          <PortfolioBlock />
        </div>
        <div className={classes.subLeftPanel}>
          <SkillsPanel />
        </div>
        <ExperiencePanel />
        <ProjectsPanel />
        <div className={classes.subLeftEducationPanel}>
          <EducationPanel />
        </div>
      </div>
      <div className={classes.RightPanel}>
        <ContactsPanel />
        <div className="divider" />
        <SkillsPanel />
        <div className="divider" />
        <EducationPanel />
      </div>
    </div>
  );
};

export default App;
