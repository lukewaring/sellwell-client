import React from 'react'

class ContactEditForm extends React.Component {

    state = {
        name: '',
        title: '',
        phone: '',
        email: '',
        notes: ''
    }

    componentDidMount() {
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
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({name: this.state.name, title: this.state.title, phone: this.state.phone, email: this.state.email, notes: this.state.notes})    
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
        this.props.routerProps.history.push(path);
    }

    render() {
        return (
            <div>
            <h2>Edit Contact Form</h2>
            <form onSubmit={e => this.handleSubmit(e)}>
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

export default ContactEditForm
