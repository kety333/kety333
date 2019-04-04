import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LayoutsGridRow from "./LayoutsGridRow";

const styles = () => ({
  root: {
    flexGrow: 1
  }
});

function LayoutsGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid container item xs={12} spacing={24}>
          <LayoutsGridRow classes={classes} rowId={0} />
        </Grid>
        <Grid container item xs={12} spacing={24}>
          <LayoutsGridRow classes={classes} rowId={1} />
        </Grid>
        <Grid container item xs={12} spacing={24}>
          <LayoutsGridRow classes={classes} rowId={2} />
        </Grid>
      </Grid>
    </div>
  );
}

LayoutsGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LayoutsGrid);
