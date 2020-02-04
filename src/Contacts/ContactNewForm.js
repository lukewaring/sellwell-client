import React from 'react'

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
        this.props.routerProps.history.push(path);
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
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({account_id: this.state.account_id, name: this.state.name, title: this.state.title, phone: this.state.phone, email: this.state.email, notes: this.state.notes})    
        })
        .then(res => res.json())
        .then(data => this.nextPath(`/contacts/${data.id}`))
    }

    render() {
        return (
            <div>
            <h2>New Contact Form</h2>
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>
                    Account ID:
                    <input onChange={e => this.handleChange(e)} type="text" name="account_id" value={this.state.account_id} />
                </label>
                <br></br>
                <label>
                    Contact Name:
                    <input onChange={e => this.handleChange(e)} type="text" name="name" value={this.state.name} />
                </label>
                <br></br>
                <label>
                    Title:
                    <input onChange={e => this.handleChange(e)} type="text" name="title" value={this.state.title} />
                </label>
                <br></br>
                <label>
                    Phone:
                    <input onChange={e => this.handleChange(e)} type="text" name="phone" value={this.state.phone} />
                </label>
                <br></br>
                <label>
                    Email:
                    <input onChange={e => this.handleChange(e)} type="text" name="email" value={this.state.email} />
                </label>
                <br></br>
                <label>
                    Notes:
                    <input onChange={e => this.handleChange(e)} type="text" name="notes" value={this.state.notes} />
                </label>
                <br></br>
                    <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }

}

export default ContactNewForm
