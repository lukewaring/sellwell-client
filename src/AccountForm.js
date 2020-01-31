import React from 'react'

class AccountForm extends React.Component {

    state = {
        name: '',
        industry: '',
        website: '',
        notes: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit clicked')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Account Name:
                    <input type="text" name="name" value={this.state.name} />
                </label>
                <br></br>
                <label>
                    Industry:
                    <input type="text" name="industry" value={this.state.industry} />
                </label>
                <br></br>
                <label>
                    Website:
                    <input type="text" name="website" value={this.state.website} />
                </label>
                <br></br>
                <label>
                    Notes:
                    <input type="text" name="notes" value={this.state.notes} />
                </label>
                <br></br>
                    <input type="submit" value="Submit" />
            </form>
        )
    }

}

export default AccountForm
