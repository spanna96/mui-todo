import { createTheme } from "@mui/material/styles";

export const colors = {
  white: "#F4F4F4",
  black: "#121212",
  gray: "#282828",
  darkGray: "#222222",
  lightGray: "#ffffff99",
  inputGray: "#2d2d2d",
  blue: "#366EFF",
  green: "#10C200",
  switchGray: "#A9A9A9",
};

export const mixins = {
  appColor: {
    backgroundColor: colors.black,
  },
  tasksStyle: {
    backgroundColor: colors.gray + "!important",
    boxShadow:
      "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)!important",
    borderRadius: "25px!important",
    marginBottom: "32px!important",
  },
};

const navigationStyles = {
  styleOverrides: {
    root: {
      backgroundColor: colors.darkGray,
      boxShadow: "none",
    },
  },
};

export const theme = createTheme({
  palette: {
    text: {
      primary: colors.white,
    },
    primary: {
      main: colors.lightGray,
    },
    secondary: {
      main: colors.white,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.gray,
          "& .MuiDayPicker-header .MuiDayPicker-weekDayLabel": {
            color: colors.white,
          },

          "& .MuiPickersDay-root": {
            backgroundColor: colors.gray,
            
            "&:hover": {
              backgroundColor: colors.lightGray,
            },
          },
        },
      },
    },
    MuiAppBar: {
      ...navigationStyles,
    },
    MuiBottomNavigation: {
      ...navigationStyles,
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.lightGray,
          padding: 4,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: colors.inputGray,
          borderRadius: 4,
          borderColor: "transparent",
          "&.Mui-focused": {
            borderColor: colors.white,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "system-ui",
          fontStyle: "normal",
          fontWeight: 600,
          color: colors.white,
        },
        h4: {
          fontSize: "36px",
          lineHeight: "36px",
          height: "37px",
        },
        h5: {
          fontSize: "24px",
          lineHeight: "24px",
          height: "25px",
        },
        h6: {
          fontSize: "14px",
          lineHeight: "14px",
          height: "15px",
          color: colors.lightGray,
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "8px 16px",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "8px 18px 16px",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          fontSize: 30,
          padding: 0,
          height: 30,
          width: 51,
          borderRadius: 15,
          margin: "auto 0",

          "& .MuiButtonBase-root": {
            padding: 0,
            width: 26,
            height: 26,
            backgroundColor: colors.switchGray,
            transform: "translate(2px, 2px)",

            "&.Mui-checked": {
              transform: "translate(22px, 2px)",
            },
          },

          "&.MuiSwitch-root .Mui-checked+.MuiSwitch-track": {
            backgroundColor: colors.green,
            opacity: 1,
          },

          "&.MuiSwitch-root .MuiSwitch-track": {
            backgroundColor: colors.blue,
            opacity: 1,
          },
        },
      },
    },
  },
});
