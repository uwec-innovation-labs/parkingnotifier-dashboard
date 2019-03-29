import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutSuperuser } from '../../actions/authActions'
import { notifyUsers } from '../../actions/notifyActions'
import { Alert } from 'reactstrap'

import Home from '../Home'
import NotifyModal from '../NotifyModal'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      messageSent: false
    }
  }

  onLogoutClick = e => {
    e.preventDefault()
    this.props.logoutSuperuser()
  }

  onNotifyClick = e => {
    e.preventDefault()
    this.setState({ showModal: true })
  }

  sendMessage = messageBody => {
    const newMessage = {
      message: messageBody
    }
    console.log(newMessage)
    this.props.notifyUsers(newMessage)
  }

  render() {
    return (
      <div>
        {/* logout button */}
        <div className="row">
          <button
            style={{
              width: '150px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
              margin: '1rem'
            }}
            onClick={this.onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3 "
          >
            Logout
          </button>

          {/* notify users button */}
          <button
            style={{
              width: '150px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
              margin: '1rem'
            }}
            onClick={() => this.setState({ showModal: true })}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3 "
          >
            Notify
          </button>
          {this.state.showModal && (
            <NotifyModal
              notifyUsers={this.sendMessage}
              onClose={() => this.setState({ showModal: false })}
              sentMessage={() => this.setState({ messageSent: true })}
            />
          )}
          {this.state.messageSent ? (
            <Alert color="success">Message Sent</Alert>
          ) : (
            ''
          )}
        </div>
        <Home />
      </div>
    )
  }
}

Dashboard.propTypes = {
  logoutSuperuser: PropTypes.func.isRequired,
  notifyUsers: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  notify: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  notify: state.notify
})

export default connect(
  mapStateToProps,
  { logoutSuperuser, notifyUsers }
)(Dashboard)
