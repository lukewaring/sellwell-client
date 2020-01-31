import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class AccountShow extends React.Component {
    
    state = {
        account: null
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/v1/accounts/${this.props.routerProps.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({
            account: data
        }))
    }

    render() {
        
        if (this.state.account) {
            console.log(this.state.account.contacts)
            return (
                    <div>
                        <h2>{this.state.account.name}</h2>
                        <h5>Responsible Party ID: {this.state.account.user_id}</h5>
                        <h5>Industry: {this.state.account.industry}</h5>
                        <a rel="noopener noreferrer" target="_blank" href={this.state.account.website}><h5>Website</h5></a>
                        <h5>Notes: {this.state.account.notes}</h5>

                        <h4>Account Contacts</h4>
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
                        {this.state.account.contacts.map(contact => (
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

export default AccountShow
