import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5C74FF",
    },
    secondary: {
      main: "#74FFA7",
    },
    error: {
      main: red.A400,
    },
    background: {
      main: "#fff",
    },
    warning: {
      main: "#ff9800",
    },
  },
});

export default theme;

// Based on: https://github.com/mui-org/material-ui/blob/master/examples/create-react-app/src/theme.js
