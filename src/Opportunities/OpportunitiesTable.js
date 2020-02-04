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

class OpportunitiesTable extends React.Component {

    state = {
        opportunities: []
    }

    nextPath = (path) => {
        this.props.routerProps.history.push(path);
    }
    
    componentDidMount() {
        fetch('http://localhost:3001/api/v1/opportunities')
        .then(res => res.json())
        .then(data => {
          this.setState({
            opportunities: data
          })
        })
    }

    render() {
        
        return (
            <div>
            <h2>Opportunities</h2>
            
            <Fab onClick={() => this.nextPath('/opportunities/new') } color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
            
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="left">Opportunity</TableCell>
                    <TableCell align="left">Account</TableCell>
                    <TableCell align="left">Open Date</TableCell>
                    <TableCell align="left">Close Date</TableCell>
                    <TableCell align="left">Stage</TableCell>
                    <TableCell align="left">Value</TableCell>
                    <TableCell align="left">Priority</TableCell>
                    <TableCell align="left">Notes</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.state.opportunities.map(opportunity => (
                <TableRow key={opportunity.id}>
                    <TableCell component="th" scope="row">{opportunity.name}</TableCell>
                    <TableCell align="left">{opportunity.account.name}</TableCell>
                    <TableCell align="left">{opportunity.open_date}</TableCell>
                    <TableCell align="left">{opportunity.close_date}</TableCell>
                    <TableCell align="left">{opportunity.stage}</TableCell>
                    <TableCell align="left">{opportunity.value}</TableCell>
                    <TableCell align="left">{opportunity.priority}</TableCell>
                    <TableCell align="left">{opportunity.notes}</TableCell>
                    <Button variant="contained" color="primary" href={`/opportunities/${opportunity.id}`}>View</Button>
                </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </div>
        )
    }
}

export default OpportunitiesTable;