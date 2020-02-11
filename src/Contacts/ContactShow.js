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

import MessageForm from './MessageForm'

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

class ContactShow extends React.Component {

    state = {
        emailFormOpen: false,
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

    toggleEmailFormOpen = () => {
        this.setState({emailFormOpen: !this.state.emailFormOpen})
    }

    render() {
        if (this.state.emailFormOpen) {
            return <MessageForm emailFormOpen={this.state.emailFormOpen} contact={this.state.contact} />
        } else {

        if (this.state.contact) {
            return (
                    <div>
                        <h2 style={{ textAlign: 'center' }}>{this.state.contact.name}</h2>
                        <Button onClick={this.toggleEmailFormOpen} variant="contained" color="primary">Send Email</Button>

                        <Button onClick={() => window.confirm("Are you sure you want to delete this contact?") && this.deleteContact()}
                            variant="contained"
                            style={style}
                            startIcon={<DeleteIcon />}
                        >
                            Delete
                        </Button>
                        
                        <p><strong>Account</strong></p>
                        <p>{this.state.contact.account.name}</p>
                        <p><strong>Title</strong></p>
                        <p>{this.state.contact.title}</p>
                        <p><strong>Phone</strong></p>
                        <p>{this.state.contact.phone}</p>
                        <p><strong>Email</strong></p>
                        <p>{this.state.contact.email}</p>
                        <p><strong>Notes</strong></p>
                        <p>{this.state.contact.notes}</p>
                    
                        <Fab onClick={() => this.nextPath(`/contacts/${this.state.contact.id}/edit`) } color="secondary" aria-label="add">
                            <EditIcon />
                        </Fab>

                        <h4>Opportunities</h4>
                        <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
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
                                <TableCell component="th" scope="row">{opportunity.name}</TableCell>
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
                            {this.state.contact.activities.map(activity => (
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
    }}
}

export default ContactShow
