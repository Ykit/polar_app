import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const Index = () => (
  <div id="welcome_msg">
    <h1>Hello World</h1>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("index"));
