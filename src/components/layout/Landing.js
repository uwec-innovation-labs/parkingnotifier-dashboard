import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import logo from '../../media/clearwater_logo.png'

class Landing extends Component {
  componentDidMount() {
    // If logged in and superuser navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  render() {
    return (
      <div className="landing-wrapper">
        <div>
          <img id="logo" alt="Clearwater Labs" src={logo} />
          <hr />
          <h1>What is Parking Notifier Dashboard?</h1>
          <h3>
            Parking Notifier Dashboard is an extension of the Parking Notifier
            messaging service created by Clearwater Labs. The dashboard adds
            super-user functionality to an already powerful messaging service.
          </h3>
          <br />
          <h1>Interested in Parking Notifier Dashboard?</h1>
          <Button
            className="button"
            color="primary"
            href="mailto:LARSONGJ6857@uwec.edu"
          >
            Contact Us
          </Button>
        </div>
      </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(mapStateToProps)(Landing)
