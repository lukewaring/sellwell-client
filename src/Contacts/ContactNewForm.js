import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import MenuItem from '@material-ui/core/MenuItem'

class ContactNewForm extends React.Component {
    state = {
      account_id: null,
      name: '',
      title: '',
      phone: '',
      email: '',
      notes: ''
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

      fetch('http://localhost:3001/api/v1/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ account_id: this.state.account_id, name: this.state.name, title: this.state.title, phone: this.state.phone, email: this.state.email, notes: this.state.notes })
      })
        .then(res => res.json())
        .then(data => this.nextPath(`/contacts/${data.id}`))
    }

    render () {
      return (
        <div style={{ textAlign: 'center' }}>
          <h2>New Contact</h2>

          <form onSubmit={e => this.handleSubmit(e)} noValidate autoComplete='off'>
            <TextField onChange={e => this.handleChange(e)} label='Name' name='name' value={this.state.name} required />
            <br />
            <br />
            <TextField onChange={e => this.handleChange(e)} label='Title' name='title' value={this.state.title} />
            <br />
            <br />
            <TextField onChange={e => this.handleChange(e)} label='Phone' name='phone' value={this.state.phone} />
            <br />
            <br />
            <TextField onChange={e => this.handleChange(e)} label='Email' name='email' value={this.state.email} />
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
              helperText="Please select the contact's account"
              required
            >
              {this.props.accounts.map(acct => (
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

export default ContactNewForm
