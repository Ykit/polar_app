import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';
import style from './index.scss';
import koalaPicture from './koala.jpg';
import boarPicture from './boar.jpeg';

const Index = () => {
  return(
    <div id="welcome_msg">
      <h1>Hello World</h1>
      <img src={koalaPicture} />
      <img src={boarPicture} />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
