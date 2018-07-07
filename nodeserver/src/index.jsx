import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Root from "./routers/root";
/** Disable for dev env */
// import serviceworker from "./serviceworker";

const Index = () => (
  <div id="welcome_msg">
    <h1>
      <Root />
    </h1>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("index"));

/** Disable for dev env */
// serviceworker.registerServiceWorker();
