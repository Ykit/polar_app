import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  // Link
} from "react-router-dom";
import HomeView from "./home";
import ItemsView from "./items";
import ReceiptsView from "./receipts";
import PolarBottomNav from "../components/bottomnavigation";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    height: "125vw"
  }
});

const Root = ({ classes }) => (
  <Router>
    <main>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Polar App
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper className={classes.paper}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/items" component={ItemsView} />
          <Route exact path="/receipts" component={ReceiptsView} />
          <Redirect to="/" />
        </Switch>
      </Paper>
      <PolarBottomNav />
    </main>
  </Router>
);

export default withStyles(styles)(Root);
