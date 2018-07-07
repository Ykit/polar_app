import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import request from "superagent";
import { withRouter } from "react-router-dom";
import PolarBottomNav from "../components/bottomnavigation";
import CameraButton from "../components/cameraButton";
import TakeScreenShotButton from "../components/takeScreenShotButton";

const styles = {
  root: {
    flexGrow: 1
  }
};

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoActivate: false,
      hasTakenPhoto: false
    };
    this.canvasRef = React.createRef();
    this.videoRef = React.createRef();
    this.cameraInit = this.cameraInit.bind(this);
    this.handleTakeScreenShotButton = this.handleTakeScreenShotButton.bind(
      this
    );
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm() {
    console.log(`Handle Confirm`);
    const url = "http://127.0.0.1:3000/image";
    request
      .post(url)
      .set("Content-Type", "application/json")
      .send({ name: "tj", pet: "tobi" })
      .then(data => {
        console.log(data);
        this.props.history.push("/items");
      });
  }

  handleTakeScreenShotButton() {
    console.log(`User take screenshot`);
    this.setState({
      hasTakenPhoto: true
    });
    this.takeSreenShot();
  }

  cameraInit(stream, canvasWidth, canvasHeight, videoActivate) {
    const video = this.videoRef.current;
    video.srcObject = stream;
    this.setState({
      videoActivate,
      video
    });
  }

  takeSreenShot() {
    const { video } = this.state;
    this.canvasRef.current.getContext("2d").drawImage(video, 0, 0, 280, 210);
  }

  render() {
    const { classes } = this.props;
    const { videoActivate, hasTakenPhoto } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Polar App
            </Typography>
          </Toolbar>
        </AppBar>
        {/* video */}
        {!hasTakenPhoto && <video ref={this.videoRef} autoPlay />}

        {/* canvas */}
        <canvas ref={this.canvasRef} className={classes.canvas} />

        {videoActivate &&
          !hasTakenPhoto && (
            <TakeScreenShotButton
              takeScreenShot={this.handleTakeScreenShotButton}
            />
          )}

        {!hasTakenPhoto && <CameraButton onCamera={this.cameraInit} />}

        {hasTakenPhoto && (
          <Button
            onClick={this.handleConfirm}
            variant="raised"
            size="large"
            color="primary"
            className={classes.button}
          >
            Confirm
          </Button>
        )}
        <PolarBottomNav />
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(HomeView));
