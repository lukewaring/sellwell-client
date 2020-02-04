import React from 'react'

class Login extends React.Component{
    
    state = {
        email: '',
        password_digest: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.password_digest === '123') {
            this.props.history.push('/accounts')
        } else {
            alert('Please enter the correct password.')
        }
    }

    render(){
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                <input name="password_digest" type="password" value={this.state.password_digest} onChange={this.handleChange} placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }

}

export default Login
