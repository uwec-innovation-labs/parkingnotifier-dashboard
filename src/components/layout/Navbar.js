import React, { Component } from 'react'
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
      isOpen: false,
      onLanding: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  componentWillMount() {
    if (true) {
      this.setState({ onLanding: true })
    }
  }

  render() {
    // return (
    // <div className="navbar-fixed">
    //   <nav className="z-depth-0">
    //     <div className="nav-wrapper white">
    //       <Link
    //         to="/"
    //         style={{
    //           fontFamily: 'roboto'
    //         }}
    //         className="col s5 brand-logo center black-text"
    //       >
    //         Parking Notifier - Dashboard
    //       </Link>
    //     </div>
    //   </nav>
    // </div>
    // )
    return (
      <div>
        <Navbar color="light" expand="md">
          <NavbarBrand href="/" className="brand">
            Parking Notifier Dashboard
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            {this.state.onLanding ? (
              <Button color="primary" href="/login">
                Log In
              </Button>
            ) : (
              // get better functionality on this
              <Button color="primary" href="/">
                Log Out
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

export default NavBar
