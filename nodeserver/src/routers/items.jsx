import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {},
  label: {
    color: "#rgba(0,0,0,.6)",
    fontWeight: 700
  },
  headerList: {
    paddingBottom: "20px",
    borderBottom: "1px solid #rgba(0,0,0,.6)"
  }
};

const generateKey = pre => `${pre}_${new Date().getTime()}`;

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
    const dummyItems = [
      { id: 1, itemName: "H.Latte:g", amount: "$78.0" },
      { id: 2, itemName: "H.Mocha:g", amount: "$42.0" },
      { id: 3, itemName: "H.BTGrap:t", amount: "$31.0" }
    ];
    return (
      <div className={classes.root}>
        <List className={classes.headerList}>
          <Grid container spacing={24}>
            <Grid item xs>
              <ListItem>
                <PersonIcon color="secondary" />
                <ListItemText className={classes.label} primary="Seller" />
                <ListItemText primary="Starbucks" />
              </ListItem>
            </Grid>
            <Grid item xs>
              <ListItem>
                <AccessTimeIcon color="secondary" />
                <ListItemText className={classes.label} primary="Date & Time" />
                <ListItemText primary="2018-07-08 07:00" />
              </ListItem>
            </Grid>
          </Grid>
        </List>
        <Divider />
        <List>
          <Grid container spacing={24}>
            {dummyItems.map((item, index) => (
              <ListItem key={generateKey(index)}>
                <Grid key={generateKey(item.id)} item xs={2}>
                  <ListItemText primary={item.id} />
                </Grid>
                <Grid key={generateKey(item.itemName)} item xs={7}>
                  <ListItemText primary={item.itemName} />
                </Grid>
                <Grid key={generateKey(item.amount)} item xs={3}>
                  <ListItemText primary={item.amount} />
                </Grid>
              </ListItem>
            ))}
          </Grid>
        </List>
        <Divider />
        <Grid container spacing={24}>
          <Grid item xs={9}>
            <Typography>Total</Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography>$151</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(ItemsView));
