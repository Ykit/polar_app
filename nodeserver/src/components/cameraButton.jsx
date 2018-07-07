import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Camera from "@material-ui/icons/CameraAlt";

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
      hasTakenPhoto: false
    };
    this.handleButton = this.handleButton.bind(this);
  }

  initialUserMedia() {
    console.log("Using user media");
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: { width: 250, height: 300 } })
      .then(stream => {
        /* use the stream */
      })
      .catch(err => {
        /* handle the error */
        console.log(`Error occurs in the getUserMedia - ${err}`);
      });
  }

  handleButton() {
    /** Call image widget */
    this.initialUserMedia();
  }

  render() {
    const { classes } = this.props;
    const { hasTakenPhoto } = this.state;
    console.log(`Has taken photo: ${hasTakenPhoto}`);
    return (
      <div className={classes.root}>
        <Button
          onClick={this.handleButton}
          variant="fab"
          color="primary"
          aria-label="add"
        >
          <Camera />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(CameraButton);
