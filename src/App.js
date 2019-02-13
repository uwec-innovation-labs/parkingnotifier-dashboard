import React, { Component } from 'react'
import Table from './components/Table'
import Stats from './components/Stats'

class App extends Component {
  render() {
    return (
      <div>
        <Stats />
        <Table />
      </div>
    )
  }
}

export default App
