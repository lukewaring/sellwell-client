import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
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

const style = {
    background: 'linear-gradient(30deg, #FF4F5A 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    float: 'right'
}

class OpportunityShow extends React.Component {

    state = {
        opportunity: {
            id: null,
            name: '',
            open_date: '',
            close_date: '',
            stage: '',
            value: '',
            priority: '',
            notes: '',
            account: {},
            activities: [],
            contacts: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/v1/opportunities/${this.props.routerProps.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({
            opportunity: data
        }))
    }

    nextPath = (path) => {
        this.props.routerProps.history.push(path);
    }

    deleteOpportunity = () => {
        fetch(`http://localhost:3001/api/v1/opportunities/${this.props.routerProps.match.params.id}`, { method: 'DELETE' })
        this.nextPath('/opportunities')
    }

    render() {
        if (this.state.opportunity) {
            return (
                    <div>
                        <h2 style={{ textAlign: 'center' }}>{this.state.opportunity.name}</h2>

                        <Button onClick={() => window.confirm("Are you sure you want to delete this opportunity?") && this.deleteOpportunity()}
                            variant="contained"
                            style={style}
                            startIcon={<DeleteIcon />}
                        >
                            Delete
                        </Button>

                        <p><strong>Account</strong></p>
                        <p>{this.state.opportunity.account.name}</p>
                        <p><strong>Open Date</strong></p>
                        <p>{this.state.opportunity.open_date}</p>
                        <p><strong>Close Date</strong></p>
                        <p>{this.state.opportunity.close_date}</p>
                        <p><strong>Stage</strong></p>
                        <p>{this.state.opportunity.stage}</p>
                        <p><strong>Value</strong></p>
                        <p>${this.state.opportunity.value}</p>
                        <p><strong>Priority</strong></p>
                        <p>{this.state.opportunity.priority}</p>
                        <p><strong>Notes</strong></p>
                        <p>{this.state.opportunity.notes}</p>
                    
                        <Fab onClick={() => this.nextPath(`/opportunities/${this.state.opportunity.id}/edit`) } color="secondary" aria-label="add">
                            <EditIcon />
                        </Fab>

                        <h4>Contacts</h4>
                        <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Phone</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Notes</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.state.opportunity.contacts.map(contact => (
                            <TableRow key={contact.id}>
                                <TableCell component="th" scope="row">{contact.name}</TableCell>
                                <TableCell align="left">{contact.title}</TableCell>
                                <TableCell align="left">{contact.phone}</TableCell>
                                <TableCell align="left">{contact.email}</TableCell>
                                <TableCell align="left">{contact.notes}</TableCell>
                            </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                        
                        <h4>Activities</h4>
                        <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Date</TableCell>
                                <TableCell align="left">Notes</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.state.opportunity.activities.map(activity => (
                            <TableRow key={activity.id}>
                                <TableCell component="th" scope="row">{activity.name}</TableCell>
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

export default OpportunityShow
