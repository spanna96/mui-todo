import React, { useState } from "react";
import { Grid, Typography, Box, Switch, IconButton } from "@mui/material";
import { Cancel, CheckCircle } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { ColorClip } from "../index";
import { useContext } from "react";
import Context from "../../context";
import { Task } from "../../types";

import { useStyles } from "./styles";

const SingleTask = ({
  color,
  title,
  description,
  date,
  completed,
  id,
}: Task) => {
  const classes = useStyles();
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const { completeTask, deleteTask } = useContext<any>(Context);

  const onClickComplete = () => {
    completeTask(id);
  };

  const onClickDelete = () => {
    deleteTask(id);
  };

  const toggleDeleteButton = () => {
    setShowDeleteButton(!showDeleteButton);
  };

  return (
    <Box className={classes.singleTask}>
      <Grid container height={40}>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={onClickDelete}
          className={`${classes.deleteButton} ${
            showDeleteButton ? "visible" : ""
          }`}
        >
          <DeleteForeverIcon color="primary" fontSize="large" />
        </IconButton>

        <ColorClip color={color} />
        <Grid
          container
          item
          xs
          onClick={toggleDeleteButton}
          flexDirection="column"
          justifyContent="center"
        >
          <Typography
            variant="h5"
            className={`${classes.taskText} ${completed ? "checked" : ""}`}
          >
            {title}
          </Typography>

          {description && (
            <Typography variant="h6" className={classes.taskText}>
              {description}
            </Typography>
          )}
        </Grid>

        <Switch
          checked={completed}
          onChange={onClickComplete}
          checkedIcon={
            <CheckCircle className={classes.switchIcon} fontSize="inherit" />
          }
          icon={<Cancel className={classes.switchIcon} fontSize="inherit" />}
        />
      </Grid>
    </Box>
  );
};

export default SingleTask;
