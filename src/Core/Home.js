import React from "react";
import "../styles/App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import Button from "@material-ui/core/Button";
import NavBar from "./NavBar";

class KanbanBoard extends React.Component {
  nextPath = (path) => {
    this.props.routerProps.history.push(path);
  };

  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <NavBar />
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.nextPath("/signup")}
          >
            Signup
          </Button>
          <br></br>
          <br></br>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.nextPath("/login")}
          >
            Login
          </Button>
        </ThemeProvider>
      </div>
    );
  }
}

export default KanbanBoard;
