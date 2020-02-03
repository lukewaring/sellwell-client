import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
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

class ActivityShow extends React.Component {

    state = {
        activity: {
            id: null,
            name: '',
            date: '',
            notes: '',
            opportunity: {},
            contacts: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/v1/activities/${this.props.routerProps.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({
            activity: data
        }))
    }

    nextPath = (path) => {
        this.props.routerProps.history.push(path);
    }

    deleteOpportunity = () => {
        fetch(`http://localhost:3001/api/v1/activities/${this.props.routerProps.match.params.id}`, { method: 'DELETE' })
        this.nextPath('/activities')
    }

    render() {
        if (this.state.activity) {
            return (
                    <div>
                        <h2>{this.state.activity.name}</h2>
                        <Fab onClick={() => this.nextPath(`/activities/${this.state.activity.id}/edit`) } color="secondary" aria-label="add">
                            <EditIcon />
                        </Fab>
                        <br></br>
                        <br></br>
                        <Button onClick={() => window.confirm("Are you sure you want to delete this activity?") && this.deleteOpportunity()}
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                        >
                            Delete
                        </Button>
                        <h5>Related Opportunity: {this.state.activity.opportunity.name}</h5>
                        <h5>Date: {this.state.activity.date}</h5>
                        <h5>Notes: {this.state.activity.notes}</h5>
                    
                        <h4>Activity Contacts</h4>
                        <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="left">Account ID</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Phone</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Notes</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.state.activity.contacts.map(contact => (
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
        } else {
            return null
        }
    }
}

export default ActivityShow
