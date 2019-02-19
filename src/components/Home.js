import React, { Component } from 'react'
import axios from 'axios'
import Table from './Table'
import Stats from './Stats'
import ProgressBar from './ProgressBar'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        count: 0,
        confirmed: 0,
        unconfirmed: 0
      }
    }
  }
  componentDidMount = () => {
    axios.get('http://localhost:9000/stats').then(res => {
      this.setState({ data: res.data })
    })
  }

  render() {
    return (
      <div>
        <Stats data={this.state.data} />
        <ProgressBar data={this.state.data} />
        <Table />
      </div>
    )
  }
}

export default Home
