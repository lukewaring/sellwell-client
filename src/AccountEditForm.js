import React from 'react'

class AccountEditForm extends React.Component {

    state = {
        name: '',
        industry: '',
        website: '',
        notes: ''
    }

    componentDidMount() {
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
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({name: this.state.name, industry: this.state.industry, website: this.state.website, notes: this.state.notes})    
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
        // The following redirect is working, but when the show page loads, the edits are not reflected until the page is reloaded.
        this.nextPath(`/accounts/${this.props.routerProps.match.params.id}`)
    }

    nextPath = (path) => {
        this.props.routerProps.history.push(path);
    }

    render() {
        return (
            <div>
            <h2>Edit Account Form</h2>
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

export default AccountEditForm
