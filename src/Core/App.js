import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../App.css'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme/theme'

import NavBar from './NavBar'
import Signup from './Signup'
import Login from './Login'

import AccountsTable from '../Accounts/AccountsTable'
import AccountShow from '../Accounts/AccountShow'
import AccountForm from '../Accounts/AccountForm'
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

import Board from 'react-trello'

class App extends React.Component {

  state = {
    isLoading: true,
    kanbanData: null
  }

  dataObj = {
    lanes: [
      {
        id: 'lane1',
        title: 'New',
        cards: []
      },
      {
        id: 'lane2',
        title: 'Follow-Up',
        cards: []
      },
      {
        id: 'lane3',
        title: 'Negotiations',
        cards: []
      },
      {
        id: 'lane4',
        title: 'Won',
        cards: []
      }
    ]
  }

  getKanbanLanes = () => {
    fetch('http://localhost:3001/api/v1/opportunities')
    .then(res => res.json())
    .then(data => {
        
        data.map((opportunity, index) => {
            
            switch (opportunity.stage) {
    
                case 'New':
                  this.dataObj.lanes[0].cards.push(
                    {
                      id: `Card${index+1}`,
                      title: opportunity.name,
                      description: opportunity.account.name,
                      label: `$${opportunity.value}`
                    }
                  )
                  break
    
                case 'Follow-Up':
                  this.dataObj.lanes[1].cards.push(
                    {
                      id: `Card${index+1}`,
                      title: opportunity.name,
                      description: opportunity.account.name,
                      label: `$${opportunity.value}`
                    }
                  )
                  break
    
                case 'Negotiations':
                  this.dataObj.lanes[2].cards.push(
                    {
                      id: `Card${index+1}`,
                      title: opportunity.name,
                      description: opportunity.account.name,
                      label: `$${opportunity.value}`
                    }
                  )
                  break
    
                case 'Won':
                  return this.dataObj.lanes[3].cards.push(
                    {
                      id: `Card${index+1}`,
                      title: opportunity.name,
                      description: opportunity.account.name,
                      label: `$${opportunity.value}`
                    }
                  )
    
                default:
                  return null
            }  
        })
    })
  }

  componentDidMount () {
    this.getKanbanLanes()
    this.setState({
      kanbanData: this.dataObj
    })
    this.setState({
      isLoading: false,
    })
  }

//   async function updateLanes() {
//     const response = await fetch('http://localhost:3001/api/v1/opportunities')
//     const json = await response.json()
        
//     json.map((opportunity, index) => {
        
//         switch (opportunity.stage) {

//             case 'New':
//               this.dataObj.lanes[0].cards.push(
//                 {
//                   id: `Card${index+1}`,
//                   title: opportunity.name,
//                   description: opportunity.account.name,
//                   label: `$${opportunity.value}`
//                 }
//               )
//               break

//             case 'Follow-Up':
//               this.dataObj.lanes[1].cards.push(
//                 {
//                   id: `Card${index+1}`,
//                   title: opportunity.name,
//                   description: opportunity.account.name,
//                   label: `$${opportunity.value}`
//                 }
//               )
//               break

//             case 'Negotiations':
//               this.dataObj.lanes[2].cards.push(
//                 {
//                   id: `Card${index+1}`,
//                   title: opportunity.name,
//                   description: opportunity.account.name,
//                   label: `$${opportunity.value}`
//                 }
//               )
//               break

//             case 'Won':
//               return this.dataObj.lanes[3].cards.push(
//                 {
//                   id: `Card${index+1}`,
//                   title: opportunity.name,
//                   description: opportunity.account.name,
//                   label: `$${opportunity.value}`
//                 }
//               )

//             default:
//               return null
//         }  
//     })


// }

  // async function hello() {
  //   return greeting = await Promise.resolve("Hello");
  // };
  
  // hello().then(alert);


  render() {

    console.log('APP.JS STATE', this.state)

    if (this.state.isLoading) {
			return (<h3>Loading...</h3>)
		}

    return (
      <div className='App'>
      <ThemeProvider theme={theme}>
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
          
          <Route path="/" render={(routerProps) => <Board data={this.state.kanbanData} routerProps={routerProps} />} />
        </Switch>
        </ThemeProvider>
      </div>
    )
  }
}

export default App
