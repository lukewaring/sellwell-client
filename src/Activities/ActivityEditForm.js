import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

class ActivityEditForm extends React.Component {
  state = {
    name: "",
    date: "",
    notes: "",
  };

  componentDidMount() {
    fetch(
      `http://localhost:3001/api/v1/activities/${this.props.routerProps.match.params.id}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          name: data.name,
          date: data.date,
          notes: data.notes,
        })
      );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `http://localhost:3001/api/v1/activities/${this.props.routerProps.match.params.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: this.state.name,
          date: this.state.date,
          notes: this.state.notes,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: data.name,
          date: data.date,
          notes: data.notes,
        });
      });

    this.nextPath(`/activities/${this.props.routerProps.match.params.id}`);
  };

  nextPath = (path) => {
    this.props.routerProps.history.push(path);
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Edit Activity</h2>

        <form
          onSubmit={(e) => this.handleSubmit(e)}
          noValidate
          autoComplete="off"
        >
          <TextField
            onChange={(e) => this.handleChange(e)}
            label="Activity Name"
            name="name"
            value={this.state.name}
            required
          />
          <br />
          <br />
          <TextField
            onChange={(e) => this.handleChange(e)}
            label="Date"
            name="date"
            value={this.state.date}
            required
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            onChange={(e) => this.handleChange(e)}
            label="Notes"
            name="notes"
            value={this.state.notes}
          />
          <br />
          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

export default ActivityEditForm;
