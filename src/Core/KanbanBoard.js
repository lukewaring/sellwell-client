import React from "react";
import { Route } from "react-router-dom";
import "../styles/App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import NavBar from "./NavBar";
import Board from "react-trello";
import * as API from "./API";

class KanbanBoard extends React.Component {
  state = {
    accounts: [],
    opportunities: [],
    isLoading: true,
    kanbanData: {},
  };

  async componentDidMount() {
    const accounts = await API.fetchAccounts();
    this.setState({ accounts: accounts });

    const opportunities = await API.fetchOpportunities();
    this.setState({ opportunities: opportunities });

    this.setKanbanData(opportunities);
  }

  setKanbanData(opportunities) {
    const kanbanData = this.mapOppsToKanbanData(opportunities);
    this.setState({
      kanbanData: kanbanData,
      isLoading: false,
    });
  }

  mapOppsToKanbanData(opportunities) {
    const kanbanData = {
      lanes: [
        {
          id: "lane1",
          title: "New",
          cards: [],
        },
        {
          id: "lane2",
          title: "Follow-Up",
          cards: [],
        },
        {
          id: "lane3",
          title: "Negotiations",
          cards: [],
        },
        {
          id: "lane4",
          title: "Won",
          cards: [],
        },
      ],
    };

    // eslint-disable-next-line
    opportunities.map((opportunity) => {
      switch (opportunity.stage) {
        case "New":
          kanbanData.lanes[0].cards.push({
            id: `Card${opportunity.id}`,
            title: opportunity.name,
            description: opportunity.account.name,
            label: `$${opportunity.value}`,
          });
          break;

        case "Follow-Up":
          kanbanData.lanes[1].cards.push({
            id: `Card${opportunity.id}`,
            title: opportunity.name,
            description: opportunity.account.name,
            label: `$${opportunity.value}`,
          });
          break;

        case "Negotiations":
          kanbanData.lanes[2].cards.push({
            id: `Card${opportunity.id}`,
            title: opportunity.name,
            description: opportunity.account.name,
            label: `$${opportunity.value}`,
          });
          break;

        case "Won":
          kanbanData.lanes[3].cards.push({
            id: `Card${opportunity.id}`,
            title: opportunity.name,
            description: opportunity.account.name,
            label: `$${opportunity.value}`,
          });
          break;

        default:
          return null;
      }
    });
    return kanbanData;
  }

  render() {
    return this.state.isLoading ? (
      <h3 style={{ textAlign: "center" }}>Loading...</h3>
    ) : (
      <div className="App">
        <ThemeProvider theme={theme}>
          <NavBar />
          <Route
            path="/kanbanboard"
            render={(routerProps) => (
              <Board
                data={this.state.kanbanData}
                style={{ backgroundColor: "#ACB8FF" }}
                routerProps={routerProps}
              />
            )}
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default KanbanBoard;
