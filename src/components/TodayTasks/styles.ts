import { makeStyles } from "@mui/styles";
import { mixins, colors } from "../../theme";

export const useStyles = makeStyles(() => ({
  tasksBlock: {
    ...mixins.tasksStyle,
    padding: 18,
  },

  tasksTitle: {
    marginBottom: 15,
  },

  checkIcon: {
    color: colors.white,
    margin: "auto 10px",
  },
}));
