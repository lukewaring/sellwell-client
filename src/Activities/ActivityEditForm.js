import React from 'react'

class ActivityEditForm extends React.Component {

    state = {
        name: '',
        date: '',
        notes: ''
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/v1/activities/${this.props.routerProps.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({
            name: data.name,
            date: data.date,
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
        
        fetch(`http://localhost:3001/api/v1/activities/${this.props.routerProps.match.params.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({name: this.state.name, date: this.state.date, notes: this.state.notes})    
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                name: data.name,
                date: data.date,
                notes: data.notes
            })
        })
        
        this.nextPath(`/activities/${this.props.routerProps.match.params.id}`)
    }

    nextPath = (path) => {
        this.props.routerProps.history.push(path);
    }

    render() {
        return (
            <div>
            <h2>Edit Activity Form</h2>
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>
                    Activity Name:
                    <input onChange={e => this.handleChange(e)} type="text" name="name" value={this.state.name} />
                </label>
                <br></br>
                <label>
                    Date:
                    <input onChange={e => this.handleChange(e)} type="text" name="date" value={this.state.date} />
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

export default ActivityEditForm
