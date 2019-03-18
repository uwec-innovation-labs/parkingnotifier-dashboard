import React, { Component } from 'react'
import ReactDOM from 'react-dom'

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
    this.state = { isValid: true }

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
  render() {
    return ReactDOM.createPortal(this._renderModal(), this.element)
  }

  _renderModal() {
    return (
      <div style={styles.background} onClick={this.clickedBackground}>
        <div style={styles.container} onClick={e => e.stopPropagation()}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default NotifyModal
