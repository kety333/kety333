import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ElementsGridLayout from "./ElementsGridLayout";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
    paper: {
    height: 180,
    padding: theme.spacing.unit,
    textAlign: "center",
    margin: 10
  }
});

function LayoutsGridRow(props) {
  const { classes, rowId } = props;

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Link to={"configuration/" + (rowId * 3 + 1)}>
          <Paper className={classes.paper}>
            <ElementsGridLayout
              layoutId={rowId * 3 + 1}
              rowHeight={30}
              width={300}
              className={classes.paper}
            />
          </Paper>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link to={"configuration/" + (rowId * 3 + 2)}>
          <Paper className={classes.paper}>
            <ElementsGridLayout
              layoutId={rowId * 3 + 2}
              rowHeight={30}
              width={300}
              className={classes.paper}
            />
          </Paper>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link to={"configuration/" + (rowId * 3 + 3)}>
          <Paper className={classes.paper}>
            <ElementsGridLayout
              layoutId={rowId * 3 + 3}
              rowHeight={30}
              width={300}
              className={classes.paper}
            />
          </Paper>
        </Link>
      </Grid>
    </React.Fragment>
  );
}

LayoutsGridRow.propTypes = {
  classes: PropTypes.object.isRequired,
  rowId: PropTypes.number.isRequired
};

export default withStyles(styles)(LayoutsGridRow);
