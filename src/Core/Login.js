// import React from "react";

// class Login extends React.Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     fetch(
//       `http://localhost:3001/api/v1/login?email=${this.state.email}&password=${this.state.password}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((authObj) => this.checkForToken(authObj));
//   };

//   checkForToken = (authObj) => {
//     authObj.token
//       ? this.storeToken(authObj)
//       : alert("Please enter the correct password.");
//   };

//   storeToken = (authObj) => {
//     localStorage.setItem("token", authObj.token);
//     this.props.history.push("/");
//   };

//   render() {
//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="email"
//             value={this.state.email}
//             onChange={this.handleChange}
//             placeholder="Email"
//           />
//           <br></br>
//           <input
//             type="password"
//             name="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//             placeholder="Password"
//           />
//           <br></br>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

const Login = props => {
  // initializing dispatch
  const dispatch = useDispatch();
  // Setting up local state using the useState hook
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  // controlled form functions
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.loginUserToDB(loginForm));
    dispatch(userActions.persistUser());
    props.routerProps.history.push('/kanbanboard');
  };

  const handleChange = e =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  // Destructuring keys from our local state to use in the form
  const { email, password } = loginForm;

  // Component code
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input type="submit" />
    </form>
  );
};

export default Login;
