import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import "../styles/App.css";
import Routes from "./Routes";
import NavBar from "./NavBar";

const AuthenticatedApp = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <Routes />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default AuthenticatedApp;
