// Second attempt; based on: https://github.com/devias-io/react-material-dashboard/blob/master/src/theme/index.js

// import { createMuiTheme } from '@material-ui/core';

// import palette from './palette';
// import typography from './typography';
// // import overrides from './overrides';

// const theme = createMuiTheme({
//   palette,
//   typography,
//   // overrides,
//   zIndex: {
//     appBar: 1200,
//     drawer: 1100
//   }
// });

// export default theme;


// First attempt; based on: https://github.com/mui-org/material-ui/blob/master/examples/create-react-app/src/theme.js

import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      main: '#fff',
    },
    warning: {
      main: "#ff9800"
    },
  }
});

export default theme;
