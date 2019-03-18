import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Label, Form, FormGroup, Input, Button } from 'reactstrap'

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
    padding: 50
  }
}

class NotifyModal extends Component {
  constructor(props) {
    super(props)
    this.state = { validText: false, textBody: '', characterCount: 0 }

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

  handleSubmit = event => {
    event.preventDefault()
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

  render() {
    return ReactDOM.createPortal(this._renderModal(), this.element)
  }

  _renderModal() {
    return (
      <div style={styles.background} onClick={this.clickedBackground}>
        <div style={styles.container} onClick={e => e.stopPropagation()}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup style={styles.form}>
              <Label for="textBody">Text Message Body</Label>
              <Input
                type="textarea"
                id="notify-box"
                name="textBody"
                value={this.state.textBody}
                onChange={event => this.handleInput(event)}
              />
              <Label>Character Count: {this.state.characterCount}</Label>
            </FormGroup>
            <Button type="submit">Next</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default NotifyModal
