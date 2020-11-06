import React from "react";
import "./App.css";

import ContentTitle from "./components/contentTitle/index";
import Content from "./components/content/index";
import PortfolioBlock from "./components/portfolioBlock/index";

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
        <ContentTitle>Work Experience</ContentTitle>
        <Content>
          <span>April 2019 - Present</span>
          <span>Surge ERP Consulting | Markham, ON</span>
          <span>Full Stack Software Developer</span>
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
        </Content>
        <ContentTitle>Project</ContentTitle>
        <Content>
          <div>CryptoMibs Platform - React, Web3, Express</div>
          <ul>
            <li>
              A decentralized application using Web3 to communicate with the
              Ethereum blockchain. Front-end built in React/Redux.
            </li>
            <li>
              Developed an image editing web app, Express server to handle
              service controls, Python 3 for image manipulation and Front-end
              built in React/Redux.
            </li>
          </ul>
          <div>Google Maps - Node, Express, Python 3</div>
          <ul>
            <li>
              A bot developed to manage and interact with users on a live
              discord server. Using the Discord API to manage user events, role
              based commands and server side service controllers
            </li>
            <li>
              Utilizes web scrapers to fetch user stats for certain online games
              that don’t provide APIs.
            </li>
          </ul>
          <div>Discord Bot - Node, Express, Python 3</div>
          <ul>
            <li>
              A bot developed to manage and interact with users on a live
              discord server. Using the Discord API to manage user events, role
              based commands and server side service controllers
            </li>
            <li>
              Utilizes web scrapers to fetch user stats for certain online games
              that don’t provide APIs.
            </li>
          </ul>
        </Content>
      </div>
      <div className="RightPanel">
        <Content>
          <ContentTitle>Contact</ContentTitle>
          <div>
            <ul>
              <li>647-896-4103</li>
              <li>kavinsan.nesan@gmail.com</li>
              <li>github.com/kavinsan</li>
              <li>linkedin.com/in/kavinsan</li>
            </ul>
          </div>
        </Content>
        <Content>
          <ContentTitle>Skills</ContentTitle>
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
        </Content>
        <Content>
          <ContentTitle>Education</ContentTitle>
          <span>2014 - 2018</span>
          <span>BACHELORS OF COMPUTER SCIENCE</span>
          <span>Ryerson University</span>
        </Content>
      </div>
    </div>
  );
};

export default App;
