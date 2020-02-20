import React, { useState } from 'react'
import { NavItem, NavLink, Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu ,  Collapse, Button, CardBody, Card} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../customer-navigation/customer.css';

const CustomerSidebarComponent = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className="styledsidenav">
      <div className="sidebar-navigation">
        <div className="side-menu">          
          <Nav vertical className="list-unstyled pb-3">
            <NavItem>
              <Link to="/customer" className="linkfontcolorwhite"><NavLink><i className="fa fa-dashboard" aria-hidden="true"></i> DASHBOARD</NavLink></Link>
            </NavItem>
           <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle nav caret className="linkfontcolorwhite">
               <i className="fa fa-server" aria-hidden="true"></i> SERVICE
            </DropdownToggle>
              <DropdownMenu className="dropdown-menu-side">
               <Link to="/vehicleBookingrequest"><DropdownItem>SERVICE REQUEST</DropdownItem></Link>
                <DropdownItem divider />
                <Link to="/vehicleHistory"><DropdownItem>SERVICE HISTORY</DropdownItem></Link>
              </DropdownMenu>
            </Dropdown> 
          </Nav>

        </div>
      </div>
    </div>
  )
}


export default CustomerSidebarComponent;
