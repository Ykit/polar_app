import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PolarBottomNav from "../components/bottomnavigation";
import CameraButton from "../components/cameraButton";

const styles = {
  root: {
    flexGrow: 1
  }
};

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stream: null
    };
  }

  render() {
    const { classes } = this.props;
    const { stream } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Polar App
            </Typography>
          </Toolbar>
        </AppBar>
        <video width="250" height="300" autoPlay>
          <track default kind="subtitles" srcLang="en" />
        </video>
        <CameraButton />
        <PolarBottomNav />
      </div>
    );
  }
}

export default withStyles(styles)(HomeView);
