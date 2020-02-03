import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const OpportunitiesDetails = (props) => {
    
    console.log('OpportunitiesDetails props', props)
    
    return (
        <div>
        <h2>Opportunities</h2>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Account Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Open Date</TableCell>
                <TableCell align="left">Close Date</TableCell>
                <TableCell align="left">Stage</TableCell>
                <TableCell align="left">Value</TableCell>
                <TableCell align="left">Priority</TableCell>
                <TableCell align="left">Notes</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.opportunities.map(opportunity => (
                <TableRow key={opportunity.id}>
                <TableCell component="th" scope="row">{opportunity.account_id}</TableCell>
                <TableCell align="left">{opportunity.name}</TableCell>
                <TableCell align="left">{opportunity.open_date}</TableCell>
                <TableCell align="left">{opportunity.close_date}</TableCell>
                <TableCell align="left">{opportunity.value}</TableCell>
                <TableCell align="left">{opportunity.stage}</TableCell>
                <TableCell align="left">{opportunity.priority}</TableCell>
                <TableCell align="left">{opportunity.notes}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    )

}

export default OpportunitiesDetails;
