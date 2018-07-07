import * as React from "react";
// import reactLoadable from "react-loadable";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  // Link
} from "react-router-dom";
import HomeView from "./home";
import ItemsView from "./items";

const Root = () => (
  <Router>
    <main>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul> */}
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/items" component={ItemsView} />
        <Redirect to="/" />
      </Switch>
    </main>
  </Router>
);

export default Root;
