import React from 'react'

class OpportunityNewForm extends React.Component {

    state = {
        account_id: null,
        name: '',
        open_date: '',
        close_date: '',
        stage: '',
        value: '',
        priority: '',
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
        
        fetch('http://localhost:3001/api/v1/opportunities', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({account_id: this.state.account_id, name: this.state.name, open_date: this.state.open_date, close_date: this.state.close_date, stage: this.state.stage, value: this.state.value, priority: this.state.priority, notes: this.state.notes})
        })
        .then(res => res.json())
        .then(data => this.nextPath(`/opportunities/${data.id}`))
    }

    render() {
        return (
            <div>
            <h2>New Opportunity Form</h2>
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>
                    Account ID:
                    <input onChange={e => this.handleChange(e)} type="text" name="account_id" value={this.state.account_id} />
                </label>
                <br></br>
                <label>
                    Opportunity Name:
                    <input onChange={e => this.handleChange(e)} type="text" name="name" value={this.state.name} />
                </label>
                <br></br>
                <label>
                    Open Date (YYYY-MM-DD):
                    <input onChange={e => this.handleChange(e)} type="text" name="open_date" value={this.state.open_date} />
                </label>
                <br></br>
                <label>
                    Close Date (YYYY-MM-DD):
                    <input onChange={e => this.handleChange(e)} type="text" name="close_date" value={this.state.close_date} />
                </label>
                <br></br>
                <label>
                    Stage (New/Follow-Up/Negotiations/Won):
                    <input onChange={e => this.handleChange(e)} type="text" name="stage" value={this.state.stage} />
                </label>
                <br></br>
                <label>
                    Value ($):
                    <input onChange={e => this.handleChange(e)} type="text" name="value" value={this.state.value} />
                </label>
                <br></br>
                <label>
                    Priority (High/Medium/Low):
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

export default OpportunityNewForm
