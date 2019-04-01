import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ElementsGridLayout from "./ElementsGridLayout";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 180,
    padding: theme.spacing.unit,
    textAlign: "center",
    margin: 10
  }
});

function LayoutsGridRow(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <ElementsGridLayout
            rowHeight={30}
            width={300}
            className={classes.paper}
          />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <ElementsGridLayout
            rowHeight={30}
            width={300}
            className={classes.paper}
          />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <ElementsGridLayout
            rowHeight={30}
            width={300}
            className={classes.paper}
          />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

LayoutsGridRow.propTypes = {
  classes: PropTypes.object.isRequired
};

function LayoutsGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={20}>
        <Grid container item xs={12} spacing={24}>
          <LayoutsGridRow classes={classes} />
        </Grid>
        <Grid container item xs={12} spacing={24}>
          <LayoutsGridRow classes={classes} />
        </Grid>
        <Grid container item xs={12} spacing={24}>
          <LayoutsGridRow classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
}

LayoutsGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LayoutsGrid);
