import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const styles = {
  root: {}
};

class ItemsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    console.log(`Components did mount: call api to get data`);
    this.setState({
      items: []
    });
  }

  render() {
    const { items } = this.state;
    console.log(`items: ${items}`);
    const { classes } = this.props;
    return <div className={classes.root} />;
  }
}

export default withRouter(withStyles(styles)(ItemsView));
