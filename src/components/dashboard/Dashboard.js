import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutSuperuser } from '../../actions/authActions'
import Home from '../Home'

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault()
    this.props.logoutSuperuser()
  }

  render() {
    return (
      <div>
        <Home />
        <button
          style={{
            width: '150px',
            borderRadius: '3px',
            letterSpacing: '1.5px',
            marginTop: '1rem'
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button>
      </div>
    )
  }
}

Dashboard.propTypes = {
  logoutSuperuser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logoutSuperuser }
)(Dashboard)
