import React, { Component } from "react";
// import {
//     Dropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem
// } from "reactstrap";
import { NavItem, NavLink, Nav, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from 'react-router-dom';

import Logo from "../../../assets/images/logo.svg";
import "./Styled.css";
class Header extends Component {
    state = {};
    render() {
        return (
            <div className="side-bar">
                <Nav vertical className="list-unstyled pb-3">
                    <NavItem>
                        <NavLink tag={Link} to={'/maintanance'}>

                            <i className="fa fa-dashboard" ></i> Dashboard
                        </NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={'/maintananceService'}>
                            <i className="fa fa-dashboard" ></i> Service
                        </NavLink>
                    </NavItem>
                </Nav>
                {/* <nav className="side-bar-nav">
                    <ul>
                        <li>
                            <a href="/maintanance">DASHBOARD</a>
                        </li>
                        <li>
                            <a href="/maintananceService">SERVICE</a>
                        </li>
                    </ul>
                </nav> */}
            </div>
        );
    }
}

export default Header;