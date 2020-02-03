import React from 'react'

class OpportunityEditForm extends React.Component {

    state = {
        name: '',
        open_date: '',
        close_date: '',
        stage: '',
        value: '',
        priority: '',
        notes: ''
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/v1/opportunities/${this.props.routerProps.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({
            name: data.name,
            open_date: data.open_date,
            close_date: data.close_date,
            stage: data.stage,
            value: data.value,
            priority: data.priority,
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
        
        fetch(`http://localhost:3001/api/v1/opportunities/${this.props.routerProps.match.params.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({name: this.state.name, open_date: this.state.open_date, close_date: this.state.close_date, stage: this.state.stage, value: this.state.value, priority: this.state.priority, notes: this.state.notes})    
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                name: data.name,
                open_date: data.open_date,
                close_date: data.close_date,
                stage: data.stage,
                value: data.value,
                priority: data.priority,
                notes: data.notes
            })
        })
        
        this.nextPath(`/opportunities/${this.props.routerProps.match.params.id}`)
    }

    nextPath = (path) => {
        this.props.routerProps.history.push(path);
    }

    render() {
        return (
            <div>
            <h2>Edit Opportunity Form</h2>
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>
                    Opportunity Name:
                    <input onChange={e => this.handleChange(e)} type="text" name="name" value={this.state.name} />
                </label>
                <br></br>
                <label>
                    Open Date:
                    <input onChange={e => this.handleChange(e)} type="text" name="open_date" value={this.state.open_date} />
                </label>
                <br></br>
                <label>
                    Close Date:
                    <input onChange={e => this.handleChange(e)} type="text" name="close_date" value={this.state.close_date} />
                </label>
                <br></br>
                <label>
                    Stage:
                    <input onChange={e => this.handleChange(e)} type="text" name="stage" value={this.state.stage} />
                </label>
                <br></br>
                <label>
                    Value:
                    <input onChange={e => this.handleChange(e)} type="text" name="value" value={this.state.value} />
                </label>
                <br></br>
                <label>
                    Priority:
                    <input onChange={e => this.handleChange(e)} type="text" name="priority" value={this.state.priority} />
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

export default OpportunityEditForm
