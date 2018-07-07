import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Camera from "@material-ui/icons/CameraAlt";
import Close from "@material-ui/icons/Close";

const styles = {
  root: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 80,
    left: "auto",
    position: "fixed"
  }
};

class CameraButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activate: false
    };
    this.handleActivateButton = this.handleActivateButton.bind(this);
    this.handleCancelButton = this.handleCancelButton.bind(this);
  }

  activateUserMedia() {
    console.log("Using user media");
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: { width: 280, height: 210 } })
      .then(stream => {
        /* use the stream */
        this.props.onCamera(stream, 280, 210, true);
      })
      .catch(err => {
        /* handle the error */
        console.log(`Error occurs in the getUserMedia - ${err}`);
      });
  }

  deactivateUserMedia() {
    console.log(`User cancel video`);
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: { width: 280, height: 210 } })
      .then(stream => {
        /* use the stream */
        this.props.onCamera(null, 0, 0, false);
      })
      .catch(err => {
        /* handle the error */
        console.log(`Error occurs in the getUserMedia - ${err}`);
      });
  }

  handleActivateButton() {
    /** Call image widget */
    console.log(`Camera activate button press`);
    this.setState({
      activate: true
    });
    this.activateUserMedia();
  }

  handleCancelButton() {
    console.log(`Camera deactivate button press`);
    this.setState({
      activate: false
    });
    this.deactivateUserMedia();
  }

  render() {
    const { classes } = this.props;
    const { activate } = this.state;
    return (
      <div className={classes.root}>
        {/* {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )} */}
        {!activate ? (
          <Button
            onClick={this.handleActivateButton}
            variant="fab"
            color="primary"
            aria-label="add"
          >
            <Camera />
          </Button>
        ) : (
            <Button
              onClick={this.handleCancelButton}
              variant="fab"
              color="default"
              aria-label="cancel"
            >
              <Close />
            </Button>
          )}
      </div>
    );
  }
}

export default withStyles(styles)(CameraButton);
