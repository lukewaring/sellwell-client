import React from 'react'

class ActivityNewForm extends React.Component {

    state = {
        opportunity_id: null,
        name: '',
        date: '',
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
        
        fetch('http://localhost:3001/api/v1/activities', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({opportunity_id: this.state.opportunity_id, name: this.state.name, date: this.state.date, notes: this.state.notes})
        })
        .then(res => res.json())
        .then(data => this.nextPath(`/activities/${data.id}`))
    }

    render() {
        return (
            <div>
            <h2>New Activity Form</h2>
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>
                    Opportunity ID:
                    <input onChange={e => this.handleChange(e)} type="text" name="opportunity_id" value={this.state.opportunity_id} />
                </label>
                <br></br>
                <label>
                    Activity Name:
                    <input onChange={e => this.handleChange(e)} type="text" name="name" value={this.state.name} />
                </label>
                <br></br>
                <label>
                    Date (YYYY-MM-DD):
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

export default ActivityNewForm
