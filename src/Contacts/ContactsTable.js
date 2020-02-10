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
            <h2 style={{ textAlign: 'center' }}>Contacts</h2>
            
            <Fab className='add-btn' onClick={() => this.nextPath('/contacts/new') } color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
            
                <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: 'bold' }} align="left">Name</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="left">Account</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="left">Title</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="left">Phone</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="left">Email</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="left">Notes</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.contacts.map(contact => (
                    <TableRow key={contact.id}>
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
            </div>
        )
    }
}

export default ContactsTable;
