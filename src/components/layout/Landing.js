import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class Landing extends Component {
  render() {
    //   return (
    //     <div style={{ height: '75vh' }} className="container">
    //       <div className="row">
    //         <div className="col s12 center-align">
    //           <h4>
    //             <b>Welcome to Parking Notifier Dashboard</b>
    //           </h4>
    //           <p className="flow-text grey-text text-darken-1">
    //             If you are an existing user please login! If not, talk to your
    //             administrator to get registered!
    //           </p>
    //           <br />
    //           {/* <div className="col s6">
    //             <Link
    //               to="/register"
    //               style={{
    //                 width: '140px',
    //                 borderRadius: '3px',
    //                 letterSpacing: '1.5px'
    //               }}
    //               className="btn btn-large waves-effect waves-light hoverable blue accent-3"
    //             >
    //               Register
    //             </Link>
    //           </div> */}
    //           <div className="col s12">
    //             <Link
    //               to="/login"
    //               style={{
    //                 width: '140px',
    //                 borderRadius: '3px',
    //                 letterSpacing: '1.5px'
    //               }}
    //               className="btn btn-large waves-effect waves-light hoverable blue accent-3"
    //             >
    //               Log In
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )

    return (
      <div className="landing-wrapper">
        <div className="left-pane">
          <h1>What is Parking Notifier Dashboard</h1>
          <p>
            Parking Notifier Dashboard is an extension on the Parking Notifier
            messaging service created by Clearwater Labs. The dashboard adds
            super-user functionality to an already powerful messaging service.
          </p>
          <br />
          <h1>Interested in Parking Notifier Dashboard</h1>
          <Button color="primary" href="/">
            Contact Us
          </Button>
        </div>
        <div className="right-pane">Hello</div>
      </div>
    )
  }
}

export default Landing
