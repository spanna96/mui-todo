import { makeStyles } from "@mui/styles";
import { mixins, colors } from "../../theme";

export const useStyles = makeStyles(() => ({
  tasksBlock: {
    ...mixins.tasksStyle,
  },
  expandIcon: {
    color: colors.lightGray,
  },
}));
