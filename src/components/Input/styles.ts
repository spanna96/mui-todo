import { makeStyles } from "@mui/styles";
import { mixins, colors } from "../../theme";

export const useStyles = makeStyles(() => ({
  accordionSummary: {
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(135deg) !important",
    },
    "& *": {
      fontWeight: "600!important",
    },
  },

  expandIcon: {
    color: colors.lightGray,
  },

  datePicker: {
    backgroundColor: colors.gray + "!important",
    "&.MuiPaper-root":{
      display: "none!important"
    }
  },

  colorPicker: {
    "& > div": {
      overflow: "hidden",
    },

    "& .MuiColorInput-Button": {
      left: 0,
      width: "100%",
      height: "100%",
      display: "block",
      position: "absolute",
      padding: "0",
    },
  },

  colorPaper: {
    backgroundColor: colors.gray + "!important",
  },

  inputBlock: {
    ...mixins.tasksStyle,
  },
}));
