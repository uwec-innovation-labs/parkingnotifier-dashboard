import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
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
      },
      users: [],
      loading: true
    }
  }
  componentDidMount = () => {
    axios.get('http://localhost:9000/stats').then(res => {
      this.setState({ data: res.data })
    })
    axios
      .get('http://localhost:9000/users', {
        headers: {
          token: 'test'
        }
      })
      .then(res => {
        this.setState({ users: res.data, loading: false })
      })
  }

  render() {
    return (
      <div>
        <Stats data={this.state.data} />
        <ProgressBar data={this.state.data} />
        <Table data={this.state.users} loading={this.state.loading} />
      </div>
    )
  }
}

export default Home
