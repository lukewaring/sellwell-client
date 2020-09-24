import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import * as API from '../Core/API'

class ContactsTable extends React.Component {
    state = {
      contacts: []
    }

    nextPath = (path) => {
      this.props.routerProps.history.push(path)
    }

    async componentDidMount () {
      const contacts = await API.fetchContacts()
      this.setState({ contacts: contacts })
    }

    render () {
      return (
        <div>
          <h1 style={{ textAlign: 'center' }}>Contacts</h1>

          <Fab className='add-btn' onClick={() => this.nextPath('/contacts/new')} color='secondary' aria-label='add'>
            <AddIcon />
          </Fab>
          <br />
          <br />
          <br />
          <br />

          <TableContainer component={Paper}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }} align='left'>Name</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }} align='left'>Account</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }} align='left'>Title</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }} align='left'>Phone</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }} align='left'>Email</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }} align='left'>Notes</TableCell>
                  <TableCell style={{ fontWeight: 'bold', color: 'white' }} align='left'>View</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.contacts.map(contact => (
                  <TableRow key={contact.id}>
                    <TableCell component='th' scope='row'>{contact.name}</TableCell>
                    <TableCell align='left'>{contact.account.name}</TableCell>
                    <TableCell align='left'>{contact.title}</TableCell>
                    <TableCell align='left'>{contact.phone}</TableCell>
                    <TableCell align='left'>{contact.email}</TableCell>
                    <TableCell align='left'>{contact.notes}</TableCell>
                    <TableCell><Button style={{}} variant='contained' color='primary' href={`/contacts/${contact.id}`}>View</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )
    }
}

export default ContactsTable
