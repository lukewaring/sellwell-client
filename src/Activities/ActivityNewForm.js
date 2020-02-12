import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import MenuItem from '@material-ui/core/MenuItem'

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
            <div style={{ textAlign: 'center' }}>
                <h2>New Activity</h2>
                
                <form onSubmit={e => this.handleSubmit(e)} noValidate autoComplete="off">
                    <TextField onChange={e => this.handleChange(e)} label="Activity Name" name="name" value={this.state.name} required />
                    <br></br>
                    <br></br>
                    <TextField onChange={e => this.handleChange(e)} label="Date" name="date" value={this.state.date} required type="date" InputLabelProps={{shrink: true}} />
                    <br></br>
                    <TextField onChange={e => this.handleChange(e)} label="Notes" name="notes" value={this.state.notes} />
                    <br></br>
                    <TextField
                        select
                        onChange={e => this.handleChange(e)}
                        label="Opportunity"
                        name="opportunity_id"
                        value={this.state.opportunity_id}
                        helperText="Please select the related opportunity"
                        required
                    >
                        {this.props.opportunities.map(opp => (
                            <MenuItem key={opp.id} value={opp.id}>
                                {opp.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        size="large"
                        startIcon={<SaveIcon />}
                    >
                    Save
                    </Button>
                </form>
            </div>
        )
    }
}

export default ActivityNewForm
