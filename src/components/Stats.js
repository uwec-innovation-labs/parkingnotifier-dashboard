import React, { Component } from 'react'

class Stats extends Component {
  render() {
    return (
      <div className="stats">
        <div className="statCard">
          <h3>Total</h3>
          <p>{this.props.data.count}</p>
        </div>
        <div className="statCard">
          <h3>Confirmed</h3>
          <p>{this.props.data.confirmed}</p>
        </div>
        <div className="statCard">
          <h3>Unconfirmed</h3>
          <p>{this.props.data.unconfirmed}</p>
        </div>
      </div>
    )
  }
}

export default Stats
