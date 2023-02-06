import { makeStyles } from "@mui/styles";

import { colors } from "../../theme";

export const useStyles = makeStyles(() => ({
  header: {
    height: 75,
    padding: "16px 37px",
    transition: "all 0.2s ease!important",
    overflow: "hidden",
    "&.open": {
      height: 150,
    },
  },

  headerControls: {
    backgroundColor: colors.darkGray,
    zIndex: 10,
    marginBottom: 30,
  },
}));
