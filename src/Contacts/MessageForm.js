import React from 'react'

class MessageForm extends React.Component {
  
  state = {
    message: '',
    formSubmitted: false
  }

  sender = 'lwaring89@yahoo.com'
  template = 'template_6NGdf66m_standard'

  handleCancel = () => {
    this.setState({
      message: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.sendMessage(
      this.template,
      this.sender,
      this.props.contact.email,
      this.state.message
    )

    this.setState({
      formSubmitted: true
    })
  }

  sendMessage(templateId, senderEmail, receiverEmail, message) {
    window.emailjs
      .send('default_service', templateId, {
        from_email: senderEmail,
        to_email: receiverEmail,
        message_html: message
      }
      )
      .then(res => {
        this.setState({
          formEmailSent: true
        })
      })
      .catch(err => console.error('Failed to send message. Error: ', err))
  }

  render() {
    console.log(this.state)
    console.log(this.props.contact.email)
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Send an email to:</h1>
        <h2>{this.props.contact.name}: {this.props.contact.email}</h2>
        <textarea
          onChange={this.handleChange}
          placeholder="Enter your message here"
          required
          value={this.state.message}
        />
        <div>
          <button onClick={this.handleCancel}>
            Cancel
          </button>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    )
  }
}

export default MessageForm
