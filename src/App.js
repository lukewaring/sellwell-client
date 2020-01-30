import React from 'react'
import './CSS/App.css'
import NavBar from './NavBar'
import AccountsDetails from './AccountsDetails'
import ContactsDetails from './ContactsDetails'
import OpportunitiesDetails from './OpportunitiesDetails'
import ActivitiesDetails from './ActivitiesDetails'
import { Route } from 'react-router-dom'

class App extends React.Component {
  
  state = {
    accounts: [],
    contacts: [],
    opportunities: [],
    activities: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/accounts')
    .then(res => res.json())
    .then(data => {
      this.setState({
        accounts: data
      })
    })
  
    fetch('http://localhost:3001/api/v1/contacts')
    .then(res => res.json())
    .then(data => {
      this.setState({
        contacts: data
      })
    })
  
    fetch('http://localhost:3001/api/v1/opportunities')
    .then(res => res.json())
    .then(data => {
      this.setState({
        opportunities: data
      })
    })

    fetch('http://localhost:3001/api/v1/activities')
    .then(res => res.json())
    .then(data => {
      this.setState({
        activities: data
      })
    })
  
  }

  render() {
    console.log('App state', this.state)
    return (
      <div className="App">
        <NavBar />
        <Route path="/accounts" render={() => <AccountsDetails accounts={this.state.accounts} />} />
        <Route path="/contacts" render={() => <ContactsDetails contacts={this.state.contacts} />} />
        <Route path="/opportunities" render={() => <OpportunitiesDetails opportunities={this.state.opportunities} />} />
        <Route path="/activities" render={() => <ActivitiesDetails activities={this.state.activities} />} />
      </div>
    )
  }
}

export default App
