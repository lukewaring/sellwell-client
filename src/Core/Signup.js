// import React from "react";

// class Signup extends React.Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     passwordConfirmation: "",
//   };

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     if (this.state.password === this.state.passwordConfirmation) {
//       // Account creation code
//     } else {
//       alert("Password and confirmation fields do not match. Try again.");
//     }
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             placeholder="Name"
//           />
//           <input
//             name="email"
//             value={this.state.email}
//             onChange={this.handleChange}
//             placeholder="Email"
//           />
//           <input
//             name="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//             placeholder="Password"
//             type="password"
//           />
//           <input
//             name="passwordConfirmation"
//             value={this.state.passwordConfirmation}
//             onChange={this.handleChange}
//             placeholder="Password Confirmation"
//             type="password"
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Signup;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions.js';

const Signup = props => {
  // initializing dispatch
  const dispatch = useDispatch();

  // Setting up local state using the useState hook
  const [signupForm, setSignupForm] = useState({
    email: '',
    password: ''
  });

  // Controlled form functions
  const handleChange = e =>
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(userActions.newUserToDB(signupForm));
    history.push('/');
  };

  // Destructuring keys from our local state to use in the form
  const { name, email, password } = signupForm;

  // Component code
  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
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

export default Signup;
