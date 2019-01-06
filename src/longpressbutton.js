import React, { useState } from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const styles = {
  root: {}
};

function LongPressButton(props) {
  const { classes, ...rest } = props;
  return <Button props={rest}>LongPress</Button>;
}

LongPressButton.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withStyles(styles)(LongPressButton);
