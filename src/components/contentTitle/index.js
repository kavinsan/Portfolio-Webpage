import React from "react";
import "./styles.css";

const ContentTitle = (props) => {
  return (
    <div className="title-container">
      <h1 className="content-title">{props.children}</h1>
      <div className="title-underline"></div>
    </div>
  );
};

export default ContentTitle;
