import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
} from "@mui/material";
import { ExpandCircleDown } from "@mui/icons-material";

import { SingleTask, ColorClip } from "../index";
import { DateWithTasks, Task } from "../../types";
import { getDateLabel } from "../../helpers";

import { useStyles } from "./styles";
import { colors } from "../../theme";

const TasksByDateList = ({ tasks, date }: DateWithTasks) => {
  const classes = useStyles();

  return (
    <Accordion className={classes.tasksBlock}>
      <AccordionSummary
        expandIcon={<ExpandCircleDown className={classes.expandIcon} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid direction="row" container alignItems="center">
          <ColorClip color={colors.switchGray} />

          <Typography variant="h5">{getDateLabel(date)} Tasks</Typography>
        </Grid>
      </AccordionSummary>

      <AccordionDetails>
        {tasks.map((task: Task) => (
          <SingleTask {...task} key={task.id} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default TasksByDateList;
