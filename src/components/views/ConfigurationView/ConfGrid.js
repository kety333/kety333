import React from "react";
import ElementsList from "../../ui/ElementsList";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ElementsGridLayout from "../../ui/ElementsGridLayout";
import { Link } from "react-router-dom";

const styles = theme => {
  return {
    root: {
      padding: 20
    },
    layoutView: {
      padding: theme.spacing.unit,
      textAlign: "center",
      rowHeight: 200,
      marginLeft: 30
    },
    itemsView: {
      padding: theme.spacing.unit,
      textAlign: "center",
      rowHeight: 200
    }
  };
};

class ConfGridRow extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    layoutId: PropTypes.number.isRequired
  };

  state = {
    rowWidth: 600
  };
  updateDimensions = e => {
    if (e.currentTarget.innerWidth) {
      const newWidth = ((e.currentTarget.innerWidth - 150) / 12) * 10;
      this.setState({ rowWidth: newWidth });
    }
  };
  componentDidMount = () => {
    this.setState({ rowWidth: ((window.innerWidth - 150) / 12) * 10 });
    window.addEventListener("resize", this.updateDimensions);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  render() {
    return (
      <React.Fragment>
        <Grid item xs={2}>
          <Paper className={this.props.classes.itemsView}>
            <ElementsList />
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={this.props.classes.layoutView}>
            <Link to={"/fullscreen/" + this.props.layoutId} target="_blank">
              <div className="layout-configrtion-view">
                <ElementsGridLayout
                  id="conf-grid-layput"
                  rowHeight={200}
                  width={this.state.rowWidth}
                  layoutId={this.props.layoutId}
                />
              </div>
            </Link>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
}

function ConfGrid(props) {
  const { classes, layoutId } = props;

  return (
    <div className={classes.root}>
      <Grid container item xs={12} spacing={8}>
        <ConfGridRow classes={classes} layoutId={layoutId} />
      </Grid>
    </div>
  );
}

ConfGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  layoutId: PropTypes.number.isRequired
};

export default withStyles(styles)(ConfGrid);
