import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import classnames from "classnames";

const styles = {
  root: {
    perspective: "2048px"
  },
  panel: {
    transformStyle: "preserve-3d",
    transition: "all .6s ease"
  },
  readonly: {
    margin: "4px",
    width: "200px",
    height: "200px",
    background: "#5677fc"
  },
  edit: {
    margin: "4px",
    width: "200px",
    height: "200px",
    background: "red",
    transform: "rotateY(180deg)"
  },
  insidePanel: {
    transformStyle: "preserve-3d"
  },
  insideEdit: {
    height: "100%",
    transform: "rotateY(180deg)"
  },
  insideReadonly: {
    height: "100%",
    backfaceVisibility: "hidden"
  }
};

class MyCard extends React.Component {
  render() {
    const { classes, isEditable } = this.props;
    return (
      <div className={classes.root}>
        <div
          className={classnames(
            classes.panel,
            isEditable ? classes.edit : classes.readonly
          )}
        >
          <div
            className={classnames(
              classes.insidePanel,
              isEditable ? classes.insideEdit : classes.insideReadonly
            )}
          >
            Mode: {isEditable ? "Editable" : "ReadOnly"}
          </div>
        </div>
      </div>
    );
  }
}

MyCard.propTypes = {
  theme: PropTypes.object.isRequired,
  isEditable: PropTypes.bool
};

export default withStyles(styles)(MyCard);
