import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import "../styles/App.css";
import Routes from "./Routes";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
