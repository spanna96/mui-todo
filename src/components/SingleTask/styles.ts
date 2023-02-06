import { makeStyles } from "@mui/styles";
import { colors } from "../../theme";

export const useStyles = makeStyles(() => ({
  switchIcon: {
    color: colors.white,
    fontSize: 30,
  },

  singleTask: {
    "&:not(:last-child)": {
      marginBottom: 16,
    },
    "& .checked": {
      textDecoration: "line-through",
    },
  },

  taskText: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    cursor: "pointer"
  },

  deleteButton: {
    opacity: 0,
    width: 0,
    pointerEvents: "none",
    cursor: "none",
    transition: "all 0.2s ease-in!important",
    "&.visible": {
      opacity: 1,
      width: 50,
      pointerEvents: "auto",
      cursor: "pointer",
    },
  },
}));
