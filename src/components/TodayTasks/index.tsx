import React from "react";
import { CheckBox } from "@mui/icons-material";
import { Grid, Typography, Box } from "@mui/material";

import { DateWithTasks, Task } from "../../types";
import { SingleTask } from "../index";

import { useStyles } from "./styles";

const TodayTasks = ({ tasks, date }: DateWithTasks) => {
  const classes = useStyles();

  return (
    <Box>
      <Grid
        className={classes.tasksTitle}
        direction="row"
        container
        alignItems="center"
      >
        <CheckBox className={classes.checkIcon} />

        <Typography variant="h5">Today Tasks:</Typography>
      </Grid>

      <Box className={classes.tasksBlock}>
        {tasks.map((task: Task) => (
          <SingleTask {...task} key={task.id} />
        ))}
      </Box>
    </Box>
  );
};

export default TodayTasks;
