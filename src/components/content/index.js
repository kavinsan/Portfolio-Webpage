import React from "react";
import "./styles.css";

const Content = (props) => {
  return (
    <div className="content-container">
      <p className="content">{props.children}</p>
    </div>
  );
};

export default Content;
