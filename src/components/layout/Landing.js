import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import logo from '../../media/clearwater_logo.png'

class Landing extends Component {
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
          <Button className="button" color="primary" href="/">
            Contact Us
          </Button>
        </div>
      </div>
    )
  }
}

export default Landing
