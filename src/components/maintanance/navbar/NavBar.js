import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Nav, NavItem, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,

} from 'reactstrap';
import logo from '../../../assets/images/logo.svg';
import profile from '../../../assets/images/profile.png';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (


            <div className="upnavbar-navigation">
                <Navbar color="dark" dark expand="md">
                    <NavItem style={{ marginLeft: "0.5%" }}>
                        <img src={logo} alt="logo" height="60" width="40"></img>
                    </NavItem>
                    <Link to="/supervisor" className="name"><h5>VEHICLE SERVICING</h5></Link>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <a className="navbar-brand">
                                <img src={profile} alt="Admin Profile" width="35" height="35" />

                            </a>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Hello {` ` + localStorage.getItem("name")}
                                </DropdownToggle>
                                <DropdownMenu right className="dropdown-menu-up">
                                    <Link to="#" className="linkfontcolor"><i className="fa fa-user-circle" aria-hidden="true"></i> My Profile</Link>
                                    <DropdownItem divider />
                                    <Link to="#" className="linkfontcolor"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Change Password</Link>

                                    <DropdownItem divider />
                                    <Link to="/" className="linkfontcolor"><i className="fa fa-power-off"></i> Logout</Link>

                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

        );
    }
}

export default NavBar;