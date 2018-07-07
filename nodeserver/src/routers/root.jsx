import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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
import PolarBottomNav from "../components/bottomnavigation";

const Root = () => (
  <Router>
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Polar App
          </Typography>
        </Toolbar>
      </AppBar>
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
      <PolarBottomNav />
    </div>
  </Router>
);

export default Root;
