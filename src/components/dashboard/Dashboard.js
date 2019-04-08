import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Sidebar from '../layout/Sidebar'
import Content from '../layout/Content'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="dashboard-wrapper">
        <Sidebar />
        <Content />
      </div>
    )
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Dashboard)
