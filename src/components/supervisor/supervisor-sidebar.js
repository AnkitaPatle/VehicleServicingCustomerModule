import React from 'react'
import { NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import './supervisor.css';

const SupervisorSidebarComponent = (props) => {
  return (
    <div className="styledsidenav">
      <div className="sidebar-navigation">
        <div className="side-menu">
          <Nav vertical className="list-unstyled pb-3">
            <NavItem>
              <Link to="/supervisor" className="linkfontcolorwhite"><NavLink><i className="fa fa-dashboard" aria-hidden="true"></i> DASHBOARD</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/service" className="linkfontcolorwhite"><NavLink><i className="fa fa-server" aria-hidden="true"></i> SERVICE</NavLink></Link>
            </NavItem>
          </Nav>
        </div>
      </div>
    </div>
  )
}


export default SupervisorSidebarComponent;
