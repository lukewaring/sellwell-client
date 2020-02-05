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
import AccountShow from './AccountShow'
import AccountForm from './AccountForm'
import { Switch, Route } from 'react-router-dom'
import AccountEditForm from './AccountEditForm'

class AccountsTable extends React.Component {

    state = {
        accounts: []
    }

    nextPath = (path) => {
        this.props.routerProps.history.push(path);
    }
    
    componentDidMount() {
    
        fetch('http://localhost:3001/api/v1/accounts')
        .then(res => res.json())
        .then(data => {
          this.setState({
            accounts: data
          })
        })
    }

    render() {
    
        return (
            <div>
            <h2>Accounts</h2>
            
            <Fab className='add-btn' onClick={() => this.nextPath('/accounts/new') } color="secondary" aria-label="add">
                <AddIcon />
            </Fab>

            <Switch>

            <Route path="/accounts/new" render={(routerProps) => <AccountForm routerProps={routerProps} />} />

            <Route path="/accounts" render={() => 
                <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left">Account</TableCell>
                        <TableCell align="left">Industry</TableCell>
                        <TableCell align="left">Website</TableCell>
                        <TableCell align="left">Notes</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.accounts.map(account => (
                    <TableRow  key={account.id}>
                        <TableCell component="th" scope="row">{account.name}</TableCell>
                        <TableCell align="left">{account.industry}</TableCell>
                        <TableCell align="left">{account.website}</TableCell>
                        <TableCell align="left">{account.notes}</TableCell>
                        <Button variant="contained" color="primary" href={`/accounts/${account.id}`}>View</Button>
                    </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            }
            />

            <Route path="/accounts/:id" render={(routerProps) => <AccountShow routerProps={routerProps} accounts={this.state.accounts} />} />

            <Route path="/accounts/:id/edit" render={(routerProps) => <AccountEditForm routerProps={routerProps} accounts={this.state.accounts} />} />

            </Switch>

            </div>
        )
    }
}

export default AccountsTable;
