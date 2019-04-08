import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutSuperuser } from '../../actions/authActions'
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onLogoutClick = e => {
    e.preventDefault()
    this.props.logoutSuperuser()
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <Navbar color="light" expand="md">
          <NavbarBrand href="/" className="brand">
            Parking Notifier Dashboard
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            {this.props.auth.isAuthenticated ? (
              <Button color="primary" onClick={this.onLogoutClick}>
                Log Out
              </Button>
            ) : (
              <Button color="primary" href="/login">
                Log In
              </Button>
            )}
          </Nav>
          {/* <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse> */}
        </Navbar>
      </div>
    )
  }
}

NavBar.propTypes = {
  logoutSuperuser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logoutSuperuser }
)(NavBar)
