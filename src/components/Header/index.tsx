import React, { useContext } from "react";
import { Grid, Typography, Switch, AppBar, IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";

import Context from "../../context";

import { useStyles } from "./styles";

const Header = () => {
  const classes = useStyles();
  const { toggleRandomNews, showRandomNews } = useContext(Context);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        position="relative"
        className={`${classes.header} ${open ? "open" : ""}`}
      >
        <Grid
          container
          justifyContent="space-between"
          className={classes.headerControls}
        >
          <Typography variant="h4">To Do</Typography>

          <IconButton aria-label="add" size="large" onClick={toggleDrawer}>
            <Settings color="secondary" fontSize="large" />
          </IconButton>
        </Grid>

        <Grid container flexDirection="row" justifyContent="space-between">
          <Typography variant="h5">Show News</Typography>

          <Switch checked={showRandomNews} onChange={toggleRandomNews} />
        </Grid>
      </AppBar>
    </>
  );
};

export default Header;
