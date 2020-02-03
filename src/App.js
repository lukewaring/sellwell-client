import React from 'react'
// import './CSS/App.css'

import NavBar from './NavBar'
import Signup from './Signup'
import Login from './Login'

import AccountsTable from './AccountsTable'
import AccountShow from './AccountShow'
import AccountForm from './AccountForm'
import AccountEditForm from './AccountEditForm'

import ContactsTable from './ContactsTable'
import ContactShow from './ContactShow'
import ContactNewForm from './ContactNewForm'
import ContactEditForm from './ContactEditForm'

import OpportunitiesTable from './OpportunitiesTable'
import OpportunityShow from './OpportunityShow'
import OpportunityNewForm from './OpportunityNewForm'
import OpportunityEditForm from './OpportunityEditForm'

import ActivitiesTable from './ActivitiesTable'
import ActivityShow from './ActivityShow'
import ActivityNewForm from './ActivityNewForm'
import ActivityEditForm from './ActivityEditForm'

import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  
  // state = {
  //   // accounts: [],
  //   // contacts: [],
  //   opportunities: [],
  //   activities: []
  // }

  // componentDidMount() {
    
  //   // fetch('http://localhost:3001/api/v1/accounts')
  //   // .then(res => res.json())
  //   // .then(data => {
  //   //   this.setState({
  //   //     accounts: data
  //   //   })
  //   // })
  
  //   // fetch('http://localhost:3001/api/v1/contacts')
  //   // .then(res => res.json())
  //   // .then(data => {
  //   //   this.setState({
  //   //     contacts: data
  //   //   })
  //   // })
  
  //   fetch('http://localhost:3001/api/v1/opportunities')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       opportunities: data
  //     })
  //   })

  //   fetch('http://localhost:3001/api/v1/activities')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       activities: data
  //     })
  //   })
  
  // }

  render() {
    // className="App"
    return (
      <div >
        <NavBar />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />

          <Route path="/accounts/new" render={(routerProps) => <AccountForm routerProps={routerProps} />} />
          <Route path="/accounts/:id/edit" render={(routerProps) => <AccountEditForm routerProps={routerProps} />} />
          <Route path="/accounts/:id" render={(routerProps) => <AccountShow routerProps={routerProps} />} />
          <Route path="/accounts" render={(routerProps) => <AccountsTable routerProps={routerProps} />} />

          <Route path="/contacts/new" render={(routerProps) => <ContactNewForm routerProps={routerProps} />} />
          <Route path="/contacts/:id/edit" render={(routerProps) => <ContactEditForm routerProps={routerProps} />} />
          <Route path="/contacts/:id" render={(routerProps) => <ContactShow routerProps={routerProps} />} />
          <Route path="/contacts" render={(routerProps) => <ContactsTable routerProps={routerProps} />} />

          <Route path="/opportunities/new" render={(routerProps) => <OpportunityNewForm routerProps={routerProps} />} />
          <Route path="/opportunities/:id/edit" render={(routerProps) => <OpportunityEditForm routerProps={routerProps} />} />
          <Route path="/opportunities/:id" render={(routerProps) => <OpportunityShow routerProps={routerProps} />} />
          <Route exact path="/opportunities" render={(routerProps) => <OpportunitiesTable routerProps={routerProps} />} />

          <Route path="/activities/new" render={(routerProps) => <ActivityNewForm routerProps={routerProps} />} />
          <Route path="/activities/:id/edit" render={(routerProps) => <ActivityEditForm routerProps={routerProps} />} />
          <Route path="/activities/:id" render={(routerProps) => <ActivityShow routerProps={routerProps} />} />
          <Route path="/activities" render={(routerProps) => <ActivitiesTable routerProps={routerProps} />} />
          
          <Route path="/" render={() => <div><h2>Home</h2><h3>Kanban View</h3></div>} />
        </Switch>
      </div>
    )
  }
}

export default App
