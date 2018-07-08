import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import request from "superagent";
import { withRouter } from "react-router-dom";
import CameraButton from "../components/cameraButton";
import TakeScreenShotButton from "../components/takeScreenShotButton";

const SERVER_PATH = "http://127.0.0.1:3000";

const styles = {
  root: {
    width: "100%",
    flexGrow: 1
  },
  canvas: {
    margin: "auto",
    display: "block"
  },
  video: {
    margin: "auto",
    display: "block"
  },
  confirmButton: {
    margin: "auto",
    display: "block",
    marginTop: "30px"
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
    const url = `${SERVER_PATH}/image`;
    request
      .post(url)
      .set("Content-Type", "application/json")
      .send({ name: "tj", pet: "tobi" })
      .then(data => {
        console.log(data);
        this.props.history.push("/items", { some: "state" });
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
        {/* video */}
        {!hasTakenPhoto && (
          <video className={classes.video} ref={this.videoRef} autoPlay />
        )}

        {/* canvas */}
        <canvas ref={this.canvasRef} className={classes.canvas} />

        {videoActivate &&
          !hasTakenPhoto && (
            <TakeScreenShotButton
              takeScreenShot={this.handleTakeScreenShotButton}
            />
          )}

        {!hasTakenPhoto && <CameraButton onCamera={this.cameraInit} />}

        {/* Confirm button */}
        {hasTakenPhoto && (
          <Button
            onClick={this.handleConfirm}
            variant="raised"
            size="large"
            color="secondary"
            className={classes.confirmButton}
          >
            Confirm
          </Button>
        )}
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(HomeView));
