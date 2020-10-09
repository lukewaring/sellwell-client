import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Signup from './Signup'
import Login from './Login'

import AccountsTable from '../Accounts/AccountsTable'
import AccountShow from '../Accounts/AccountShow'
import AccountNewForm from '../Accounts/AccountNewForm'
import AccountEditForm from '../Accounts/AccountEditForm'

import ContactsTable from '../Contacts/ContactsTable'
import ContactShow from '../Contacts/ContactShow'
import ContactNewForm from '../Contacts/ContactNewForm'
import ContactEditForm from '../Contacts/ContactEditForm'

import OpportunitiesTable from '../Opportunities/OpportunitiesTable'
import OpportunityShow from '../Opportunities/OpportunityShow'
import OpportunityNewForm from '../Opportunities/OpportunityNewForm'
import OpportunityEditForm from '../Opportunities/OpportunityEditForm'

import ActivitiesTable from '../Activities/ActivitiesTable'
import ActivityShow from '../Activities/ActivityShow'
import ActivityNewForm from '../Activities/ActivityNewForm'
import ActivityEditForm from '../Activities/ActivityEditForm'

import KanbanBoard from './KanbanBoard'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={(routerProps) => <Home routerProps={routerProps} />} />
      <Route path='/signup' render={(routerProps) => <Signup routerProps={routerProps} />} />
      <Route path='/login' render={(routerProps) => <Login routerProps={routerProps} />} />

      <Route path='/accounts/new' render={(routerProps) => <AccountNewForm routerProps={routerProps} />} />
      <Route path='/accounts/:id/edit' render={(routerProps) => <AccountEditForm routerProps={routerProps} />} />
      <Route path='/accounts/:id' render={(routerProps) => <AccountShow routerProps={routerProps} />} />
      <Route path='/accounts' render={(routerProps) => <AccountsTable routerProps={routerProps} />} />

      <Route path='/contacts/new' render={(routerProps) => <ContactNewForm routerProps={routerProps} />} />
      <Route path='/contacts/:id/edit' render={(routerProps) => <ContactEditForm routerProps={routerProps} />} />
      <Route path='/contacts/:id' render={(routerProps) => <ContactShow routerProps={routerProps} />} />
      <Route path='/contacts' render={(routerProps) => <ContactsTable routerProps={routerProps} />} />

      <Route path='/opportunities/new' render={(routerProps) => <OpportunityNewForm routerProps={routerProps} />} />
      <Route path='/opportunities/:id/edit' render={(routerProps) => <OpportunityEditForm routerProps={routerProps} />} />
      <Route path='/opportunities/:id' render={(routerProps) => <OpportunityShow routerProps={routerProps} />} />
      <Route path='/opportunities' render={(routerProps) => <OpportunitiesTable routerProps={routerProps} />} />

      <Route path='/activities/new' render={(routerProps) => <ActivityNewForm routerProps={routerProps} />} />
      <Route path='/activities/:id/edit' render={(routerProps) => <ActivityEditForm routerProps={routerProps} />} />
      <Route path='/activities/:id' render={(routerProps) => <ActivityShow routerProps={routerProps} />} />
      <Route path='/activities' render={(routerProps) => <ActivitiesTable routerProps={routerProps} />} />

      <Route path='/kanbanboard' render={(routerProps) => <KanbanBoard style={{ backgroundColor: '#ACB8FF' }} routerProps={routerProps} />} />
  </Switch>
  )
}

export default Routes;
