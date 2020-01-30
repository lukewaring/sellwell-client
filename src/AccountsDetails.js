import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const AccountsDetails = (props) => {
    
    console.log('AccountsDetails props', props)
    
    return (
        <div>
        <h2>Accounts</h2>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Industry</TableCell>
                <TableCell align="left">Website</TableCell>
                <TableCell align="left">Notes</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.accounts.map(account => (
                <TableRow key={account.id}>
                <TableCell component="th" scope="row">{account.name}</TableCell>
                <TableCell align="left">{account.industry}</TableCell>
                <TableCell align="left">{account.website}</TableCell>
                <TableCell align="left">{account.notes}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    )

}

export default AccountsDetails;
