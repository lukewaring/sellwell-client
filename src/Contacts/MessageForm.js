import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CancelIcon from '@material-ui/icons/Cancel'
import SendIcon from '@material-ui/icons/Send'

const style = {
  background: 'linear-gradient(30deg, #FF4F5A 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'black',
  height: 40,
  width: 110,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
}

class MessageForm extends React.Component {
  state = {
    message: ''
  }

  sender = 'lwaring89@yahoo.com'
  template = 'template_6NGdf66m_standard'

  handleCancel = () => {
    this.setState({
      message: ''
    })
    this.props.toggleEmailFormOpen()
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

    this.props.toggleEmailFormOpen()
  }

  sendMessage (templateId, senderEmail, receiverEmail, message) {
    window.emailjs
      .send('default_service', templateId, {
        from_email: senderEmail,
        to_email: receiverEmail,
        message_html: message
      })
  }

  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>New Email</h2>
        <p><strong>To:  {this.props.contact.name} ({this.props.contact.email})</strong></p>

        <form onSubmit={this.handleSubmit}>
          <TextField
            onChange={this.handleChange}
            value={this.state.message}
            label='Message'
            multiline
            required
            rows='4'
            variant='outlined'
          />
          <br />
          <br />
          <Button
            type='submit'
            variant='contained'
            color='secondary'
            size='large'
            startIcon={<SendIcon />}
          >
            Send
          </Button>
          <br />
          <br />
          <Button
            onClick={this.handleCancel}
            style={style}
            startIcon={<CancelIcon />}
          >
            Cancel
          </Button>
        </form>
      </div>
    )
  }
}

export default MessageForm
