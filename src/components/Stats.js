import React, { Component } from 'react'
import axios from 'axios'

class Stats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      confirmed: 0,
      unconfirmed: 0
    }
  }
  componentDidMount = () => {
    axios.get('http://localhost:9000/stats').then(res => {
      this.setState({ ...res.data })
    })
  }

  render() {
    return (
      <div>
        <p>Total: {this.state.count}</p>
        <p>Confirmed: {this.state.confirmed}</p>
        <p>Unconfirmed: {this.state.unconfirmed}</p>
      </div>
    )
  }
}

export default Stats
