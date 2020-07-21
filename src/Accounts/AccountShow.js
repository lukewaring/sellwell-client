import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

const style = {
  background: 'linear-gradient(30deg, #FF4F5A 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  float: 'right'
}

class AccountShow extends React.Component {
    state = {
      account: {
        id: null,
        name: '',
        industry: '',
        website: '',
        notes: '',
        contacts: [],
        opportunities: [],
        activities: [],
        user: {}
      }
    }

    componentDidMount () {
      fetch(`http://localhost:3001/api/v1/accounts/${this.props.routerProps.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({
          account: data
        }))
    }

    nextPath = (path) => {
      this.props.routerProps.history.push(path)
    }

    deleteAccount = () => {
      fetch(`http://localhost:3001/api/v1/accounts/${this.props.routerProps.match.params.id}`, { method: 'DELETE' })
      this.nextPath('/accounts')
    }

    render () {
      if (this.state.account) {
        return (
          <div>
            <h2 style={{ textAlign: 'center' }}>{this.state.account.name}</h2>

            <Button
              onClick={() => window.confirm('Are you sure you want to delete this account?') && this.deleteAccount()}
              variant='contained'
              style={style}
              startIcon={<DeleteIcon />}
            >
                            Delete
            </Button>

            <p><strong>Responsible Party</strong></p>
            <p>{this.state.account.user.name}</p>
            <p><strong>Industry</strong></p>
            <p>{this.state.account.industry}</p>
            <a style={{ color: '#5C74FF' }} rel='noopener noreferrer' target='_blank' href={this.state.account.website}><p><strong>Website</strong></p></a>
            <p><strong>Notes</strong></p>
            <p>{this.state.account.notes}</p>

            <Fab onClick={() => this.nextPath(`/accounts/${this.state.account.id}/edit`)} color='secondary' aria-label='add'>
              <EditIcon />
            </Fab>

            <h3>Contacts</h3>
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='left'>Name</TableCell>
                    <TableCell align='left'>Title</TableCell>
                    <TableCell align='left'>Phone</TableCell>
                    <TableCell align='left'>Email</TableCell>
                    <TableCell align='left'>Notes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.account.contacts.map(contact => (
                    <TableRow key={contact.id}>
                      <TableCell component='th' scope='row'>{contact.name}</TableCell>
                      <TableCell align='left'>{contact.title}</TableCell>
                      <TableCell align='left'>{contact.phone}</TableCell>
                      <TableCell align='left'>{contact.email}</TableCell>
                      <TableCell align='left'>{contact.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <h3>Opportunities</h3>
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='left'>Name</TableCell>
                    <TableCell align='left'>Open Date</TableCell>
                    <TableCell align='left'>Close Date</TableCell>
                    <TableCell align='left'>Stage</TableCell>
                    <TableCell align='left'>Value</TableCell>
                    <TableCell align='left'>Priority</TableCell>
                    <TableCell align='left'>Notes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.account.opportunities.map(opportunity => (
                    <TableRow key={opportunity.id}>
                      <TableCell component='th' scope='row'>{opportunity.name}</TableCell>
                      <TableCell align='left'>{opportunity.open_date}</TableCell>
                      <TableCell align='left'>{opportunity.close_date}</TableCell>
                      <TableCell align='left'>{opportunity.stage}</TableCell>
                      <TableCell align='left'>{opportunity.value}</TableCell>
                      <TableCell align='left'>{opportunity.priority}</TableCell>
                      <TableCell align='left'>{opportunity.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <h3>Activities</h3>
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='left'>Name</TableCell>
                    <TableCell align='left'>Date</TableCell>
                    <TableCell align='left'>Notes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.account.activities.map(activity => (
                    <TableRow key={activity.id}>
                      <TableCell component='th' scope='row'>{activity.name}</TableCell>
                      <TableCell align='left'>{activity.date}</TableCell>
                      <TableCell align='left'>{activity.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

          </div>
        )
      } else {
        return null
      }
    }
}

export default AccountShow
