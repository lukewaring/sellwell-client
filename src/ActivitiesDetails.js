import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ActivitiesDetails = (props) => {
    
    console.log('ActivitiesDetails props', props)
    
    return (
        <div>
        <h2>Activities</h2>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Opportunity Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Notes</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.activities.map(activity => (
                <TableRow key={activity.id}>
                <TableCell component="th" scope="row">{activity.opportunity_id}</TableCell>
                <TableCell align="left">{activity.name}</TableCell>
                <TableCell align="left">{activity.date}</TableCell>
                <TableCell align="left">{activity.notes}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    )

}

export default ActivitiesDetails;
