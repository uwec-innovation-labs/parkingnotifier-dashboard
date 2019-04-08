import React, { Component } from 'react'
import { Button } from 'reactstrap'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        {/* this will not work because of a z-index issue... will try to resolve in the future */}
        {this.state.isOpen ? (
          <div>
            <h2>Dashboard Sidebar</h2>
            <Button onClick={this.toggleNavbar}>&#9776;</Button>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        ) : (
          <div>
            <Button onClick={this.toggleNavbar}>&#9776;</Button>
          </div>
        )}
      </div>
    )
  }
}

export default Sidebar
