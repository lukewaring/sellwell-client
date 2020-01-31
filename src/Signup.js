import React from 'react'

class Signup extends React.Component{
    
    state = {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.password === this.state.passwordConfirmation) {
            // Account creation code
        } else {
            alert('Password and confirmation fields do not match. Try again.')
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                    <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                    <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password"/>
                    <input name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder="Password Confirmation" type="password"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default Signup
