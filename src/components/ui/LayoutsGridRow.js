import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ElementsGridLayout from "./ElementsGridLayout";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {},
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    margin: 10
  }
});

class LayoutsGridRow extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    rowId: PropTypes.number.isRequired
  };

  state = {
    rowWidth: 240
  };
  updateDimensions = e => {
    if (e.currentTarget.innerWidth) {
      const newWidth = (e.currentTarget.innerWidth - 250) / 3;
      if (newWidth > 240) {
        this.setState({ rowWidth: (e.currentTarget.innerWidth - 200) / 3 });
      } else {
        this.setState({ rowWidth: 240 });
      }
    }
  };
  componentDidMount = () => {
    this.setState({ rowWidth: (window.innerWidth - 250) / 3 });
    window.addEventListener("resize", this.updateDimensions);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  render() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Link to={"configuration/" + (this.props.rowId * 3 + 1)}>
            <Paper className={this.props.classes.paper}>
              <ElementsGridLayout
                layoutId={this.props.rowId * 3 + 1}
                rowHeight={40}
                width={this.state.rowWidth}
                className={this.props.classes.paper}
              />
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={"configuration/" + (this.props.rowId * 3 + 2)}>
            <Paper className={this.props.classes.paper}>
              <ElementsGridLayout
                layoutId={this.props.rowId * 3 + 2}
                rowHeight={40}
                width={this.state.rowWidth}
                className={this.props.classes.paper}
              />
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={"configuration/" + (this.props.rowId * 3 + 3)}>
            <Paper className={this.props.classes.paper}>
              <ElementsGridLayout
                layoutId={this.props.rowId * 3 + 3}
                rowHeight={40}
                width={this.state.rowWidth}
                className={this.props.classes.paper}
              />
            </Paper>
          </Link>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LayoutsGridRow);
