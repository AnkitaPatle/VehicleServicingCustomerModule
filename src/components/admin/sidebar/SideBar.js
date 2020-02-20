import React from 'react';
import { NavItem, NavLink, Nav, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

import { Link } from 'react-router-dom';

const SideBar = props => (
  <div className='sidebar is-open'>

    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3 ul-style">
        <NavItem className="navStyle">

          <NavLink className="admin-navlink" style={{
            color: "white"
          }} tag={Link} to={'/manager'}>

            <i className="fa fa-dashboard" ></i>   Dashboard
            </NavLink>
        </NavItem>
        <NavItem className="navStyle" >

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav className="navStyle"  style={{
              color: "white"
            }}>
              <i class="fa fa-user-plus"></i> Register User <i class="fa fa-caret-down" aria-hidden="true"></i>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem className="navStyle"  tag={Link} to={'/adduser'}>
                Add User
                    </DropdownItem>


              <DropdownItem className="navStyle"  tag={Link} to={'/manageruser'}>Manage User  </DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>

        </NavItem>
          <NavItem>
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav className="navStyle" style={{
                      color: "white"
                  }}>
                      <i class="fa fa-newspaper"></i> Service <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </DropdownToggle>
                  <DropdownMenu >
                      <DropdownItem className="navStyle"  tag={Link} to={'/servicerequest'}>
                          SERVICE REQUEST
                      </DropdownItem>
                      <DropdownItem  className="navStyle"  tag={Link} to={'/newService'}>
                          NEW SERVICE
                      </DropdownItem>
                      <DropdownItem className="navStyle"  tag={Link} to={'/pendingService'}>
                          PENDING SERVICE
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
          </NavItem>
          <NavItem>
              <NavLink className="navStyle" style={{
                  color: "white"
              }} tag={Link} to={'/vehicleCategory'}>
                  <i class="fa fa-car"></i> Vehicle  Category
              </NavLink>
          </NavItem>
        <NavItem>
          <NavLink className="navStyle"  style={{
            color: "white"
          }} tag={Link} to={'/reports'}>
            <i class=" fa fa-area-chart"></i>  Reports
            </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navStyle"  style={{
            color: "white"
          }} tag={Link} to={'/customerEnquery'}>
            <i class=" fa fa-envelope-open-o "></i> Customer Enquiry
            </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);


export default SideBar;
