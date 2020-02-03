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

class ContactShow extends React.Component {

    state = {
        contact: {
            id: null,
            name: '',
            title: '',
            phone: '',
            email: '',
            notes: '',
            account: {},
            opportunities: [],
            activities: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/v1/contacts/${this.props.routerProps.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({
            contact: data
        }))
    }

    nextPath = (path) => {
        this.props.routerProps.history.push(path);
    }

    deleteContact = () => {
        fetch(`http://localhost:3001/api/v1/contacts/${this.props.routerProps.match.params.id}`, { method: 'DELETE' })
        this.nextPath('/contacts')
    }

    render() {
        if (this.state.contact) {
            return (
                    <div>
                        <h2>{this.state.contact.name}</h2>
                        <Fab onClick={() => this.nextPath(`/contacts/${this.state.contact.id}/edit`) } color="secondary" aria-label="add">
                            <EditIcon />
                        </Fab>
                        <br></br>
                        <br></br>
                        <Button onClick={() => window.confirm("Are you sure you want to delete this contact?") && this.deleteContact()}
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                        >
                            Delete
                        </Button>
                        <h5>Account: {this.state.contact.account.name}</h5>
                        <h5>Title: {this.state.contact.title}</h5>
                        <h5>Phone: {this.state.contact.phone}</h5>
                        <h5>Email: {this.state.contact.email}</h5>
                        <h5>Notes: {this.state.contact.notes}</h5>
                    
                        <h4>Contact Opportunities</h4>
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
                            {this.state.contact.opportunities.map(opportunity => (
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
                        
                        <h4>Contact Activities</h4>
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
                            {this.state.contact.activities.map(activity => (
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
        } else {
            return null
        }
    }
}

export default ContactShow
