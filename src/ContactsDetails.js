import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ContactsDetails = (props) => {
    
    console.log('ContactsDetails props', props)
    
    return (
        <div>
        <h2>Contacts</h2>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Account Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Notes</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.contacts.map(contact => (
                <TableRow key={contact.id}>
                <TableCell component="th" scope="row">{contact.account_id}</TableCell>
                <TableCell align="left">{contact.name}</TableCell>
                <TableCell align="left">{contact.title}</TableCell>
                <TableCell align="left">{contact.phone}</TableCell>
                <TableCell align="left">{contact.email}</TableCell>
                <TableCell align="left">{contact.notes}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    )

}

export default ContactsDetails;
