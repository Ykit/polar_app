import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { withRouter } from "react-router-dom";

const styles = {
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
};

class PolarBottomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.toHome = this.toHome.bind(this);
    this.toReceipts = this.toReceipts.bind(this);
    this.toSetting = this.toSetting.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  toHome() {
    this.props.history.push("/");
  }

  toReceipts() {
    this.props.history.push("/receipts");
  }

  toSetting() {
    this.props.history.push("/items", {
      some: "state"
    });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        color="primary"
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          onClick={this.toHome}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={this.toReceipts}
          label="Receipts"
          icon={<DashboardIcon />}
        />
        <BottomNavigationAction
          onClick={this.toSetting}
          label="Reward"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    );
  }
}

export default withRouter(withStyles(styles)(PolarBottomNav));
