import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import * as API from "../Core/API";

class ActivitiesTable extends React.Component {
  state = {
    activities: [],
  };

  nextPath = (path) => {
    this.props.routerProps.history.push(path);
  };

  async componentDidMount() {
    const activities = await API.fetchActivities();
    this.setState({ activities: activities });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Activities</h1>

        <Fab
          className="add-btn"
          onClick={() => this.nextPath("/activities/new")}
          color="secondary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
        <br />
        <br />
        <br />
        <br />

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }} align="left">
                  Activity
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="left">
                  Related Opportunity
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="left">
                  Date
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="left">
                  Notes
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", color: "white" }}
                  align="left"
                >
                  View
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.activities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell component="th" scope="row">
                    {activity.name}
                  </TableCell>
                  <TableCell align="left">
                    {activity.opportunity.name}
                  </TableCell>
                  <TableCell align="left">{activity.date}</TableCell>
                  <TableCell align="left">{activity.notes}</TableCell>
                  <TableCell>
                    <Button
                      style={{}}
                      variant="contained"
                      color="primary"
                      href={`/activities/${activity.id}`}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default ActivitiesTable;
