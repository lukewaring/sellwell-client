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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.nextPath("/signup")}
              style={{ margin: "1rem" }}
            >
              Signup
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.nextPath("/login")}
              style={{ margin: "1rem" }}
            >
              Login
            </Button>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default KanbanBoard;
