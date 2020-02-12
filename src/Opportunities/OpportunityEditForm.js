import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import MenuItem from '@material-ui/core/MenuItem'

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
            <div style={{ textAlign: 'center' }}>
                <h2>Edit Opportunity</h2>

                <form onSubmit={e => this.handleSubmit(e)} noValidate autoComplete="off">
                    <TextField onChange={e => this.handleChange(e)} label="Deal Name" name="name" value={this.state.name} required />
                    <br></br>
                    <br></br>
                    <TextField onChange={e => this.handleChange(e)} label="Open Date" name="open_date" value={this.state.open_date} required type="date" InputLabelProps={{shrink: true}} />
                    <br></br>
                    <br></br>
                    <TextField onChange={e => this.handleChange(e)} label="Close Date" name="close_date" value={this.state.close_date} type="date" InputLabelProps={{shrink: true}} />
                    <br></br>
                    <br></br>
                    <TextField onChange={e => this.handleChange(e)} label="Stage" name="stage" value={this.state.stage} helperText="Please select the deal value" select required >
                        <MenuItem value="New">New</MenuItem>
                        <MenuItem value="Follow-Up">Follow-Up</MenuItem>
                        <MenuItem value="Negotiations">Negotiations</MenuItem>
                        <MenuItem value="Won">Won</MenuItem>
                    </TextField>
                    <br></br>
                    <br></br>
                    <TextField onChange={e => this.handleChange(e)} label="Value ($)" name="value" value={this.state.value} type="number" />
                    <br></br>
                    <br></br>
                    <TextField onChange={e => this.handleChange(e)} label="Priority" name="priority" value={this.state.priority} helperText="Please select the deal priority" select >
                        <MenuItem value="High">High</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Low">Low</MenuItem>
                    </TextField>
                    <br></br>
                    <br></br>
                    <TextField onChange={e => this.handleChange(e)} label="Notes" name="notes" value={this.state.notes} />
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

export default OpportunityEditForm
