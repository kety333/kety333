import React from "react";
import ElementsList from "../../ui/ElementsList";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ElementsGridLayout from "../../ui/ElementsGridLayout";

const styles = theme => {
    return {
        root: {
            minW: 1890,
            width: 1890,
            padding: 20,
            paddingleft: 40
        },
        paper: {
            padding: theme.spacing.unit,
            textAlign: "center",
            rowHeight: 200
        }
    };
};

function ConfGridRow(props) {
  const { classes, layoutId } = props;

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
              rowHeight={200}
              width={1200}
              className={classes.paper}
              layoutId={layoutId}
            />
          </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

ConfGridRow.propTypes = {
  classes: PropTypes.object.isRequired,
  layoutId: PropTypes.number.isRequired
};

function ConfGrid(props) {
  const { classes, layoutId } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid container item xs={12} spacing={16}>
          <ConfGridRow classes={classes} layoutId={layoutId} />
        </Grid>
      </Grid>
    </div>
  );
}

ConfGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  layoutId: PropTypes.number.isRequired
};

export default withStyles(styles)(ConfGrid);
