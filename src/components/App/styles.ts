import { makeStyles } from "@mui/styles";

import { colors } from "../../theme";

export const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: colors.black,
    width: "100%",
    height: "100vh",
    padding: 40,
    boxSizing: "border-box",
    overflow: "hidden",
  },

  appContent: {
    margin: "auto",
    backgroundColor: colors.darkGray,
    boxSizing: "border-box",
    borderRadius: 30,
    maxWidth: 600,
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },

  appBody: {
    overflowY: "scroll",
    boxSizing: "border-box",
    height: "100%",
    maxHeight: "100%",
    padding: "20px",
  },
}));
