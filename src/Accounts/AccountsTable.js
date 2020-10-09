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

class AccountsTable extends React.Component {
  state = {
    accounts: [],
  };

  async componentDidMount() {
    const accounts = await API.fetchAccounts();
    this.setState({ accounts: accounts });
  }

  nextPath = (path) => {
    this.props.routerProps.history.push(path);
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Accounts</h1>

        <Fab
          className="add-btn"
          onClick={() => this.nextPath("/accounts/new")}
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
                  Name
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="left">
                  Industry
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="left">
                  Website
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
              {this.state.accounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell component="th" scope="row">
                    {account.name}
                  </TableCell>
                  <TableCell align="left">{account.industry}</TableCell>
                  <TableCell align="left">{account.website}</TableCell>
                  <TableCell align="left">{account.notes}</TableCell>
                  <TableCell>
                    <Button
                      style={{}}
                      variant="contained"
                      color="primary"
                      href={`/accounts/${account.id}`}
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

export default AccountsTable;
