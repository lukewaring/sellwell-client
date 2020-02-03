import React from 'react'

class AccountForm extends React.Component {

    state = {
        user_id: 2,
        name: '',
        industry: '',
        website: '',
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
        
        fetch('http://localhost:3001/api/v1/accounts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({user_id: this.state.user_id, name: this.state.name, industry: this.state.industry, website: this.state.website, notes: this.state.notes})    
        })
        .then(res => res.json())
        .then(data => this.nextPath(`/accounts/${data.id}`))
    }

    render() {
        return (
            <div>
            <h2>New Account Form</h2>
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>
                    Account Name:
                    <input onChange={e => this.handleChange(e)} type="text" name="name" value={this.state.name} />
                </label>
                <br></br>
                <label>
                    Industry:
                    <input onChange={e => this.handleChange(e)} type="text" name="industry" value={this.state.industry} />
                </label>
                <br></br>
                <label>
                    Website:
                    <input onChange={e => this.handleChange(e)} type="text" name="website" value={this.state.website} />
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

export default AccountForm
