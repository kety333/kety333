import React from "react";
import ElementsList from "../../ui/ElementsList";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ElementsGridLayout from "../../ui/ElementsGridLayout";

const styles = theme => ({
  root: {
    width: 1260
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    margin: 10
  }
});

function ConfGridRow(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={2}>
        <Paper className={classes.paper}>
          <ElementsList />
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          <div className="layout-configrtion-view">
            <ElementsGridLayout
              rowHeight={115}
              width={800}
              className={classes.paper}
            />
          </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

ConfGridRow.propTypes = {
  classes: PropTypes.object.isRequired
};

function ConfGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={20}>
        <Grid container item xs={12} spacing={48}>
          <ConfGridRow classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
}

ConfGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConfGrid);
