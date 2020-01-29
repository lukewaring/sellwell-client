import React from 'react';
import './App.css';
import DetailsContainer from './Containers/DetailsContainer'

class App extends React.Component {
  
  state = {
    accounts: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/accounts')
    .then(res => res.json())
    .then(data => {
      this.setState({
        accounts: data
      })
    })
  }

  render() {
    console.log('App state', this.state)
    return (
      <div className="App">
        <DetailsContainer accounts={this.state.accounts} />
      </div>
    );
  }
}

export default App;
