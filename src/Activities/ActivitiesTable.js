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

class ActivitiesTable extends React.Component {

    state = {
        activities: []
    }

    nextPath = (path) => {
        this.props.routerProps.history.push(path);
    }
    
    componentDidMount() {
        fetch('http://localhost:3001/api/v1/activities')
        .then(res => res.json())
        .then(data => {
          this.setState({
            activities: data
          })
        })
    }

    render() {
        
        return (
            <div>
            <h2>Activities</h2>
            
            <Fab onClick={() => this.nextPath('/activities/new') } color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
            
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="left">Activity</TableCell>
                    <TableCell align="left">Related Opportunity</TableCell>
                    <TableCell align="left">Date</TableCell>
                    <TableCell align="left">Notes</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.state.activities.map(activity => (
                <TableRow key={activity.id}>
                    <TableCell component="th" scope="row">{activity.name}</TableCell>
                    <TableCell align="left">{activity.opportunity.name}</TableCell>
                    <TableCell align="left">{activity.date}</TableCell>
                    <TableCell align="left">{activity.notes}</TableCell>
                    <Button variant="contained" color="primary" href={`/activities/${activity.id}`}>View</Button>
                </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </div>
        )
    }
}

export default ActivitiesTable;
