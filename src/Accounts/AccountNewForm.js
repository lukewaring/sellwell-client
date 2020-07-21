import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

class AccountNewForm extends React.Component {
    state = {
      user_id: 2,
      name: '',
      industry: '',
      website: '',
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

      fetch('http://localhost:3001/api/v1/accounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ user_id: this.state.user_id, name: this.state.name, industry: this.state.industry, website: this.state.website, notes: this.state.notes })
      })
        .then(res => res.json())
        .then(data => this.nextPath(`/accounts/${data.id}`))
    }

    render () {
      console.log(this.state)
      return (
        <div style={{ textAlign: 'center' }}>
          <h2>New Account</h2>

          <form onSubmit={e => this.handleSubmit(e)} noValidate autoComplete='off'>
            <TextField onChange={e => this.handleChange(e)} label='Account Name' name='name' value={this.state.name} required />
            <br />
            <br />
            <TextField onChange={e => this.handleChange(e)} label='Industry' name='industry' value={this.state.industry} />
            <br />
            <br />
            <TextField onChange={e => this.handleChange(e)} label='Website' name='website' value={this.state.website} />
            <br />
            <br />
            <TextField onChange={e => this.handleChange(e)} label='Notes' name='notes' value={this.state.notes} />
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

export default AccountNewForm
