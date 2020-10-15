// import React from "react";
// import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "../styles/theme";
// import "../styles/App.css";
// import Routes from "./Routes";
// import NavBar from "./NavBar";

// const App = () => {
//   return (
//     <div className="App">
//       <ThemeProvider theme={theme}>
//         <NavBar />
//         <Routes />
//       </ThemeProvider>
//     </div>
//   );
// };

// export default App;

// eslint-disable-next-line
import React from 'react';
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

async function bootstrapAppData() {
  function getToken() {
    return window.localStorage.getItem("token")
  }
  
  const token = await getToken()

  return token
}

class App extends React.Component {
  state = {
    tokenInState: ""
  }
  
  componentDidMount() {
    this.setState({ tokenInState: localStorage.token })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.tokenInState !== prevState.tokenInState) {
    this.setState({ tokenInState: localStorage.token })
    }
  }

  render() {
    console.log(this.state)
    if (this.state.tokenInState) {
      return (
      <AuthenticatedApp />  
    );
  } else {
    return (
      <UnauthenticatedApp />
    )
  }
  }
}

export default App;
