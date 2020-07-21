import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

class ContactEditForm extends React.Component {
    state = {
      name: '',
      title: '',
      phone: '',
      email: '',
      notes: ''
    }

    componentDidMount () {
      fetch(`http://localhost:3001/api/v1/contacts/${this.props.routerProps.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({
          name: data.name,
          title: data.title,
          phone: data.phone,
          email: data.email,
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

      fetch(`http://localhost:3001/api/v1/contacts/${this.props.routerProps.match.params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: this.state.name, title: this.state.title, phone: this.state.phone, email: this.state.email, notes: this.state.notes })
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            name: data.name,
            title: data.title,
            phone: data.phone,
            email: data.email,
            notes: data.notes
          })
        })

      this.nextPath(`/contacts/${this.props.routerProps.match.params.id}`)
    }

    nextPath = (path) => {
      this.props.routerProps.history.push(path)
    }

    render () {
      return (
        <div style={{ textAlign: 'center' }}>
          <h2>Edit Contact</h2>

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

export default ContactEditForm
