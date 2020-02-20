import React from 'react';
import { NavItem, NavLink, Nav, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const SideBar = props => (

  <div className='sidebar is-open'>

    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3 ul-style">

        <NavItem>

          <NavLink className="navStyle" style={{
            color: "white"
          }} tag={Link} to={'/maintanance'}>

            <i className="fa fa-dashboard" ></i>   Dashboard
           </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="navStyle" style={{
            color: "white"
          }} tag={Link} to={'/maintananceService'}>
            <i class=" fa fa-newspaper-o"></i> Service
           </NavLink>
        </NavItem>

      </Nav>
    </div>
  </div>
);
export default SideBar;
