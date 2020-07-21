import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

class AccountEditForm extends React.Component {
    state = {
      name: '',
      industry: '',
      website: '',
      notes: ''
    }

    componentDidMount () {
      fetch(`http://localhost:3001/api/v1/accounts/${this.props.routerProps.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({
          name: data.name,
          industry: data.industry,
          website: data.website,
          notes: data.notes
        }))
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()

      fetch(`http://localhost:3001/api/v1/accounts/${this.props.routerProps.match.params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: this.state.name, industry: this.state.industry, website: this.state.website, notes: this.state.notes })
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            name: data.name,
            industry: data.industry,
            website: data.website,
            notes: data.notes
          })
        })

      this.nextPath(`/accounts/${this.props.routerProps.match.params.id}`)
    }

    nextPath = (path) => {
      this.props.routerProps.history.push(path)
    }

    render () {
      return (
        <div style={{ textAlign: 'center' }}>
          <h2>Edit Account</h2>

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

export default AccountEditForm
