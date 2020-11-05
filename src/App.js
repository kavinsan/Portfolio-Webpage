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
          Bacon ipsum dolor amet beef ribs doner strip steak kielbasa tenderloin
          kevin ham hock turducken pancetta prosciutto. Shoulder buffalo fatback
          landjaeger cow chicken pig capicola. Pastrami pork loin pork belly
          kevin prosciutto swine. Pastrami ground round venison, t-bone turkey
          tongue short ribs salami. Rump shankle tri-tip bresaola turkey short
          ribs alcatra ground round. Capicola drumstick flank tongue. Doner
          drumstick beef chislic biltong chuck, meatloaf meatball sausage
          tongue.
        </Content>
        <PortfolioBlock />
        <ContentTitle>Work Experience</ContentTitle>
        <Content>
          Bacon ipsum dolor amet beef ribs doner strip steak kielbasa tenderloin
          kevin ham hock turducken pancetta prosciutto. Shoulder buffalo fatback
          landjaeger cow chicken pig capicola. Pastrami pork loin pork belly
          kevin prosciutto swine. Pastrami ground round venison, t-bone turkey
          tongue short ribs salami. Rump shankle tri-tip bresaola turkey short
          ribs alcatra ground round. Capicola drumstick flank tongue. Doner
          drumstick beef chislic biltong chuck, meatloaf meatball sausage
          tongue.
        </Content>
        <ContentTitle>Project</ContentTitle>
        <Content>
          Bacon ipsum dolor amet beef ribs doner strip steak kielbasa tenderloin
          kevin ham hock turducken pancetta prosciutto. Shoulder buffalo fatback
          landjaeger cow chicken pig capicola. Pastrami pork loin pork belly
          kevin prosciutto swine. Pastrami ground round venison, t-bone turkey
          tongue short ribs salami. Rump shankle tri-tip bresaola turkey short
          ribs alcatra ground round. Capicola drumstick flank tongue. Doner
          drumstick beef chislic biltong chuck, meatloaf meatball sausage
          tongue.
        </Content>
      </div>
      <div className="RightPanel">
        <ContentTitle>Contact</ContentTitle>
        <Content>
          Bacon ipsum dolor amet beef ribs doner strip steak kielbasa tenderloin
          kevin ham hock turducken pancetta prosciutto. Shoulder buffalo fatback
          landjaeger cow chicken pig capicola. Pastrami pork loin pork belly
          kevin prosciutto swine. Pastrami ground round venison, t-bone turkey
          tongue short ribs salami. Rump shankle
        </Content>
        <ContentTitle>Skills</ContentTitle>
        <Content>
          Bacon ipsum dolor amet beef ribs doner strip steak kielbasa tenderloin
          kevin ham hock turducken pancetta prosciutto. Shoulder buffalo fatback
          landjaeger cow chicken pig capicola. Pastrami pork loin pork belly
          kevin prosciutto swine. Pastrami ground round venison, t-bone turkey
          tongue short ribs salami. Rump shankle tri-tip bresaola turkey short
          ribs alcatra ground round. Capicola drumstick flank tongue. Doner
          drumstick beef chislic biltong chuck, meatloaf meatball sausage
          tongue.
        </Content>
        <ContentTitle>Education</ContentTitle>
        <Content>
          Bacon ipsum dolor amet beef ribs doner strip steak kielbasa tenderloin
          kevin ham hock turducken pancetta prosciutto. Shoulder
        </Content>
      </div>
    </div>
  );
};

export default App;
