import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
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
// import ContactShow from './ContactShow'
// // // import ContactForm from './ContactForm'
// import ContactEditForm from './ContactEditForm'
// import { Switch, Route } from 'react-router-dom'

class ContactsTable extends React.Component {

    state = {
        contacts: []
    }

    nextPath = (path) => {
        this.props.routerProps.history.push(path);
    }
    
    componentDidMount() {
    
        fetch('http://localhost:3001/api/v1/contacts')
        .then(res => res.json())
        .then(data => {
          this.setState({
            contacts: data
          })
        })
    }

    render() {
    
        return (
            <div>
            <h2>Contacts</h2>
            
            <Fab onClick={() => this.nextPath('/contacts/new') } color="secondary" aria-label="add">
                <AddIcon />
            </Fab>

            {/* <Switch> */}

            {/* <Route path="/contacts/new" render={(routerProps) => <ContactForm routerProps={routerProps} />} /> */}
            
                <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Account</TableCell>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="left">Phone</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Notes</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.contacts.map(contact => (
                    <TableRow  key={contact.id}>
                        <TableCell component="th" scope="row">{contact.name}</TableCell>
                        <TableCell align="left">{contact.account.name}</TableCell>
                        <TableCell align="left">{contact.title}</TableCell>
                        <TableCell align="left">{contact.phone}</TableCell>
                        <TableCell align="left">{contact.email}</TableCell>
                        <TableCell align="left">{contact.notes}</TableCell>
                        <Button variant="contained" color="primary" href={`/contacts/${contact.id}`}>View</Button>
                    </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>

            {/* <Route path="/contacts/:id" render={(routerProps) => <ContactShow routerProps={routerProps} contacts={this.state.contacts} />} />

            <Route path="/contacts/:id/edit" render={(routerProps) => <ContactEditForm routerProps={routerProps} contacts={this.state.contacts} />} />

            </Switch> */}

            </div>
        )
    }
}

export default ContactsTable;
