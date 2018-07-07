import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    console.log(
      `Components did mount: call api to get data: ${
        this.props.location.state.some
      }`
    );
    this.setState({
      items: []
    });
  }

  render() {
    const { items } = this.state;
    console.log(`items: ${items}`);
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List>
          <ListItem>
            <ListItemText primary="Seller" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Date" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Time" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(ItemsView));
