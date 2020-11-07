import React from "react";
import "./App.css";

import ContentTitle from "./components/contentTitle/index";
import Content from "./components/content/index";
import PortfolioBlock from "./components/portfolioBlock/index";

import ContactsPanel from "./components/contactsPanel/index";
import SkillsPanel from "./components/skillsPanel/index";
import EducationPanel from "./components/educationPanel/index";
import ProjectsPanel from "./components/projectPanel/index";
import ExperiencePanel from "./components/experiencePanel/index";

const App = (props) => {
  return (
    <div className="App">
      <div className="LeftPanel">
        <ContentTitle>Profile</ContentTitle>
        <Content>
          A full stack Software Engineer and a life-long learner focused on new
          technology and best practices to write beautiful code. Looking for a
          full-time position at a company to further understandings in backend
          architecture in large scale project design as well as fundamentals of
          frontend UX/UI designs. Experienced in object oriented programming,
          software development processes and working in an agile startup
          environments.
        </Content>
        <PortfolioBlock />
        <ExperiencePanel/>
        <ProjectsPanel/>
      </div>
      <div className="RightPanel">
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
