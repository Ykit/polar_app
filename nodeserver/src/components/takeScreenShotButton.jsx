import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";

const styles = {
  root: {
    margin: 0,
    top: "auto",
    left: 20,
    bottom: 80,
    right: "auto",
    position: "fixed"
  }
};

class TakeScreenShotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    this.props.takeScreenShot();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          onClick={this.handleButton}
          variant="fab"
          color="secondary"
          aria-label="edit"
        >
          <DoneIcon />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(TakeScreenShotButton);
