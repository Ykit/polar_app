import * as React from "react";
// import reactLoadable from "react-loadable";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Home from "../components/home";

const Root = () => (
  <Router>
    <main>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </main>
  </Router>
);

export default Root;
