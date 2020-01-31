import React from 'react'
import './CSS/App.css'
import NavBar from './NavBar'
import Signup from './Signup'
import Login from './Login'
import AccountsContainer from './AccountsContainer'
import ContactsDetails from './ContactsDetails'
import OpportunitiesDetails from './OpportunitiesDetails'
import ActivitiesDetails from './ActivitiesDetails'
import { Route, Switch } from 'react-router-dom'
import AccountShow from './AccountShow'
import AccountForm from './AccountForm'
import AccountEditForm from './AccountEditForm'

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
    // className="App"
    return (
      <div >
        <NavBar />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/accounts/new" render={(routerProps) => <AccountForm routerProps={routerProps} />}/>
          <Route path="/accounts/:id/edit" render={(routerProps) => <AccountEditForm routerProps={routerProps} accounts={this.state.accounts} />} />
          <Route path="/accounts/:id" render={(routerProps) => <AccountShow routerProps={routerProps} accounts={this.state.accounts} />}/>
          <Route path="/accounts" render={(routerProps) => <AccountsContainer routerProps={routerProps} accounts={this.state.accounts} />} />
          <Route path="/contacts" render={(routerProps) => <ContactsDetails routerProps={routerProps} contacts={this.state.contacts} />} />
          <Route path="/opportunities" render={(routerProps) => <OpportunitiesDetails routerProps={routerProps} opportunities={this.state.opportunities} />} />
          <Route path="/activities" render={(routerProps) => <ActivitiesDetails routerProps={routerProps} activities={this.state.activities} />} />
          <Route path="/" render={() => <div><h2>Home</h2><h3>Kanban View</h3></div>} />
        </Switch>
      </div>
    )
  }
}

export default App
