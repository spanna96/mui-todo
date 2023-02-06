import React, { useContext, useState } from "react";
import moment from "moment";
import {
  Accordion,
  TextField,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import { MuiColorInput } from "mui-color-input";

import Context from "../../context";
import { Task } from "../../types";
import { getRandomColor } from "../../helpers";

import { useStyles } from "./styles";

const dateFormat = "DD/MM/YYYY";

const getDefaultTask = () => {
  return {
    color: getRandomColor(),
    title: "",
    description: "",
    date: moment().format(dateFormat),
    completed: false,
    id: Date.now(),
  };
};

const Input = () => {
  const classes = useStyles();

  const { addTask } = useContext<any>(Context);

  const [expanded, setExpanded] = useState(false);
  const [newTask, setNewTask] = useState<Task>(getDefaultTask());

  const handleChangeAccordion = (
    event: React.SyntheticEvent<Element, Event>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded);
  };

  const updateField = (field: string, value: string | moment.Moment) => {
    setNewTask((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  const onChangeColor = (color: string) => {
    updateField("color", color);
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateField(e.target.name, e.target.value);
  };

  const onChangeDate = (date: moment.Moment | null) => {
    const formattedDate = date?.format(dateFormat) as string;

    updateField("date", formattedDate);
  };

  const onClickAdd = () => {
    if (newTask.title) {
      setExpanded(false);
      addTask(newTask);
      setNewTask(getDefaultTask());
    }
  };

  return (
    <Accordion
      defaultExpanded={false}
      expanded={expanded}
      onChange={handleChangeAccordion}
      className={classes.inputBlock}
    >
      <AccordionSummary
        className={classes.accordionSummary}
        expandIcon={<AddCircleIcon className={classes.expandIcon} />}
      >
        <Typography variant="h5">New Task</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={1}>
          <Grid container item spacing={1} xs={11}>
            <Grid item width={64}>
              <MuiColorInput
                name="color"
                className={classes.colorPicker}
                value={newTask.color}
                onChange={onChangeColor}
                PopoverProps={{ classes: { paper: classes.colorPaper } }}
              />
            </Grid>

            <Grid item xs>
              <TextField
                fullWidth
                variant="outlined"
                label="Text"
                name="title"
                value={newTask.title}
                onChange={onChangeText}
              />
            </Grid>

            <Grid item width={192}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                  inputFormat={dateFormat}
                  value={moment(newTask.date, dateFormat)}
                  onChange={onChangeDate}
                  renderInput={(params) => <TextField {...params} />}
                  disablePast
                />
              </LocalizationProvider>
            </Grid>

            <Grid container item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Description"
                name="description"
                value={newTask.description}
                onChange={onChangeText}
              />
            </Grid>
          </Grid>

          <Grid item container xs={1} alignItems="center">
            <Grid item>
              <IconButton aria-label="add" size="large" onClick={onClickAdd}>
                <AddCircleIcon color="primary" fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default Input;
