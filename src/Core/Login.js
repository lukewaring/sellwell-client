import React from "react";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `http://localhost:3001/api/v1/login?email=${this.state.email}&password=${this.state.password}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((authObj) => this.checkForToken(authObj));
  };

  checkForToken = (authObj) => {
    authObj.token
      ? this.storeToken(authObj)
      : alert("Please enter the correct password.");
  };

  storeToken = (authObj) => {
    localStorage.setItem("token", authObj.token);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <br></br>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
