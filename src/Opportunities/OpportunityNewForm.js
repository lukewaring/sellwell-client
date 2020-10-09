import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import MenuItem from '@material-ui/core/MenuItem'

import * as API from '../Core/API'

class OpportunityNewForm extends React.Component {
    state = {
      accounts: [],
      account_id: null,
      name: '',
      open_date: '',
      close_date: '',
      stage: '',
      value: '',
      priority: '',
      notes: ''
    }

    async componentDidMount () {
      const accounts = await API.fetchAccounts()
      this.setState({ accounts: accounts })
    }

    nextPath = (path) => {
      this.props.routerProps.history.push(path)
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()

      fetch('http://localhost:3001/api/v1/opportunities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ account_id: this.state.account_id, name: this.state.name, open_date: this.state.open_date, close_date: this.state.close_date, stage: this.state.stage, value: this.state.value, priority: this.state.priority, notes: this.state.notes })
      })
        .then(res => res.json())
        .then(data => this.nextPath(`/opportunities/${data.id}`))
    }

    render () {
      return (
        <div style={{ textAlign: 'center' }}>
          <h2>New Opportunity</h2>

          <form onSubmit={e => this.handleSubmit(e)} noValidate autoComplete='off'>
            <TextField onChange={e => this.handleChange(e)} label='Deal Name' name='name' value={this.state.name} required />
            <br />
            <br />
            <TextField onChange={e => this.handleChange(e)} label='Open Date' name='open_date' value={this.state.open_date} required type='date' InputLabelProps={{ shrink: true }} />
            <br />
            <br />
            <TextField onChange={e => this.handleChange(e)} label='Close Date' name='close_date' value={this.state.close_date} type='date' InputLabelProps={{ shrink: true }} />
            <br />
            <br />
            <TextField onChange={e => this.handleChange(e)} label='Stage' name='stage' value={this.state.stage} helperText='Please select the deal value' select required>
              <MenuItem value='New'>New</MenuItem>
              <MenuItem value='Follow-Up'>Follow-Up</MenuItem>
              <MenuItem value='Negotiations'>Negotiations</MenuItem>
              <MenuItem value='Won'>Won</MenuItem>
            </TextField>
            <br />
            <br />
            <TextField onChange={e => this.handleChange(e)} label='Value ($)' name='value' value={this.state.value} type='number' />
            <br />
            <br />
            <TextField onChange={e => this.handleChange(e)} label='Priority' name='priority' value={this.state.priority} helperText='Please select the deal priority' select>
              <MenuItem value='High'>High</MenuItem>
              <MenuItem value='Medium'>Medium</MenuItem>
              <MenuItem value='Low'>Low</MenuItem>
            </TextField>
            <br />
            <br />
            <TextField onChange={e => this.handleChange(e)} label='Notes' name='notes' value={this.state.notes} />
            <br />
            <br />
            <TextField
              select
              onChange={e => this.handleChange(e)}
              label='Account'
              name='account_id'
              value={this.state.account_id}
              helperText='Please select the related account'
              required
            >
              {this.state.accounts.map(acct => (
                <MenuItem key={acct.id} value={acct.id}>
                  {acct.name}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <br />
            <br />
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              size='large'
              startIcon={<SaveIcon />}
            >
                    Save
            </Button>
          </form>
        </div>
      )
    }
}

export default OpportunityNewForm
