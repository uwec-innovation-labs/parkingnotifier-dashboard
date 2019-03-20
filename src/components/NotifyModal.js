import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Label, Form, FormGroup, Input, Button, Alert } from 'reactstrap'

const styles = {
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000088',
    zIndex: 999
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '0 0 10px #00000088',
    width: 650,
    height: 350,
    color: 'black',
    padding: 30
  },
  redLabel: {
    color: 'red'
  },
  spacing: {
    marginLeft: 10
  },
  textBody: {
    color: 'black'
  }
}

class NotifyModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      validText: false,
      textBody: '',
      characterCount: 0,
      fullCount: false,
      nextClicked: false,
      confirmationPhrase: '...',
      confirmationBody: '',
      validConfirmation: true
    }

    this.element = document.createElement('div')
    this.modalRoot = document.getElementById('modalRoot')
    this.modalRoot.appendChild(this.element)
  }

  componentDidMount() {
    document.addEventListener('keyup', this.keyup, false)
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyup, false)
    this.modalRoot.removeChild(this.element)
  }

  keyup = e => {
    if (e.key === 'Escape') {
      this.props.onClose()
    }
  }
  clickedBackground = () => {
    this.props.onClose()
  }

  clickedCancel = () => {
    this.props.onClose()
  }

  clickedNext = () => {
    if (this.state.validText) {
      this.setState({ nextClicked: true })
    }
  }

  clickedBack = () => {
    this.setState({ nextClicked: false })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.validConfirmation) {
      this.props.notifyUsers(this.state.textBody)
      this.props.sentMessage()
      this.props.onClose()
    }
  }

  handleInput = e => {
    const key = e.target.name
    const value = e.target.value
    if (value.length < 161) {
      this.setState({ [key]: value }, () => {
        this.validateField(key, value)
      })
    }
  }

  validateField = (FieldName, value) => {
    switch (FieldName) {
      case 'textBody':
        this.validateTextBody(value)
        this.setState({ characterCount: value.length })
        if (value.length === 160) {
          this.setState({ fullCount: true })
        } else {
          this.setState({ fullCount: false })
        }
        break
      case 'confirmationBody':
        this.validateConfirmationBody(value)
        break
      default:
        break
    }
  }

  validateTextBody = value => {
    if (value.length > 0 && value.length < 161) {
      this.setState({ validText: true })
    } else {
      this.setState({ validText: false })
    }
  }

  validateConfirmationBody = value => {
    if (this.state.confirmationBody === this.state.confirmationPhrase) {
      this.setState({ validConfirmation: true })
    } else {
      this.setState({ validConfirmation: false })
    }
  }

  render() {
    return ReactDOM.createPortal(this._renderModal(), this.element)
  }

  _renderModal() {
    return (
      <div style={styles.background} onClick={this.clickedBackground}>
        <div style={styles.container} onClick={e => e.stopPropagation()}>
          {this.state.nextClicked ? (
            <Form>
              <FormGroup>
                <Label for="textBody">Message:</Label>
                <br />
                <Label id="textBody" style={styles.textBody}>
                  {this.state.textBody}
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for="confirmationCheck">
                  Please type the following to confirm you wish to send:
                </Label>
                <br />
                <Label for="confirmationCheck" style={styles.textBody}>
                  {this.state.confirmationPhrase}
                </Label>
                <Input
                  type="text"
                  id="confirmationCheck"
                  name="confirmationBody"
                  onChange={event => this.handleInput(event)}
                  autoComplete="off"
                  value={this.state.confirmationBody}
                  invalid={!!!this.state.validConfirmation}
                />
                {this.state.validConfirmation ? (
                  ''
                ) : (
                  <Alert color="danger">The phrases do not match.</Alert>
                )}
              </FormGroup>
              <FormGroup>
                <Button onClick={this.clickedBack}>Back</Button>
                <Button style={styles.spacing} onClick={this.handleSubmit}>
                  Send Message
                </Button>
              </FormGroup>
            </Form>
          ) : (
            <Form>
              <FormGroup>
                <Label for="textBody">Text Message Body</Label>
                <Input
                  type="textarea"
                  id="notify-box"
                  name="textBody"
                  value={this.state.textBody}
                  onChange={event => this.handleInput(event)}
                />
                {this.state.fullCount ? (
                  <Label style={styles.redLabel}>
                    Character Count: {this.state.characterCount}
                  </Label>
                ) : (
                  <Label>Character Count: {this.state.characterCount}</Label>
                )}
              </FormGroup>
              <Button onClick={this.clickedCancel}>Cancel</Button>
              <Button style={styles.spacing} onClick={this.clickedNext}>
                Next
              </Button>
            </Form>
          )}
        </div>
      </div>
    )
  }
}

export default NotifyModal
