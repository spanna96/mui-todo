import React from "react";

import { Box } from "@mui/material";

import { useStyles } from "./styles";

const ColorClip = ({ color }: { color: string }) => {
  const classes = useStyles();

  return (
    <Box className={classes.colorClip} style={{ backgroundColor: color }} />
  );
};

export default ColorClip;
