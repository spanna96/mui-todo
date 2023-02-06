import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { Input, TasksList, Header, RandomNews } from "../index";
import { TaskProvider } from "../../context";

import { theme } from "../../theme";
import { useStyles } from "./styles";

const queryClient = new QueryClient();

const App = () => {
  const classes = useStyles();

  return (
    <TaskProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Box className={classes.app}>
            <Box className={classes.appContent}>
              <Header />

              <Box className={classes.appBody}>
                <Input />

                <TasksList />
              </Box>

              <RandomNews />
            </Box>
          </Box>
        </QueryClientProvider>
      </ThemeProvider>
    </TaskProvider>
  );
};

export default App;
