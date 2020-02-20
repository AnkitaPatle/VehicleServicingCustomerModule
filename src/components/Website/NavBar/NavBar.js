import React, { Component } from 'react';
import logo from '../../../assets/images/logo.svg';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, 
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
class NavBar extends Component {

    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                     <NavItem style={{ marginLeft: "0.5%" }}>
                         <img src={logo} alt="logo" height="60" width="40"></img>
                     </NavItem>  
                     <Link to="/" className="name"><h5>VEHICLE SERVICING</h5></Link>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/"><NavLink>HOME<label className="nav_Seprator">|</label></NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/aboutUs"><NavLink>ABOUT US<label className="nav_Seprator">|</label></NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/pricing"><NavLink>PRICING<label className="nav_Seprator">|</label></NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/ourOffers"><NavLink>OUR OFFERS<label className="nav_Seprator">|</label></NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contactUs"><NavLink>CONTACT US<label className="nav_Seprator">|</label></NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/"><NavLink>BOOK NOW</NavLink></Link>
                            </NavItem>
                            <Link to="/loginIn"><Button outline color="warning">LOGIN</Button></Link>&nbsp;
                            <Link to="/register"><Button outline color="warning">SIGN UP</Button></Link>
                        </Nav>
                    </Collapse>
                </Navbar>
                
            </div>

            // <div className="navBar">
            //     <Nav>
            //         <NavItem style={{ marginLeft: "0.5%" }}>
            //             <img src={logo} alt="logo" height="90" width="70"></img>
            //         </NavItem>
            //         <NavItem className="name">
            //             <h2>VEHICLE SERVICING</h2>
            //         </NavItem>
            //         <NavItem className="navItem_home  ml-auto">
            //             <NavLink exact to="/" activeClassName="Admin__Link__Active">HOME</NavLink><label className="nav_Seprator">|</label>
            //         </NavItem>
            //         <NavItem className="navItem">
            //             <NavLink exact to="/aboutUs" activeClassName="Admin__Link__Active">ABOUT US</NavLink><label className="nav_Seprator">|</label>
            //         </NavItem>
            //         <NavItem className="navItem">
            //             <NavLink to="/pricing" activeClassName="Admin__Link__Active">PRICING</NavLink><label className="nav_Seprator">|</label>
            //         </NavItem>
            //         <NavItem className="navItem">
            //             <NavLink to="/ourOffers" activeClassName="Admin__Link__Active">OUR OFFERS</NavLink><label className="nav_Seprator">|</label>
            //         </NavItem>
            //         <NavItem className="navItem">
            //             <NavLink exact to="/contactUs" activeClassName="Admin__Link__Active">CONTACT US</NavLink><label className="nav_Seprator">|</label>
            //         </NavItem>
            //         {/* <NavItem className="navItem">
            //       <NavLink exact to="/" activeClassName="Admin__Link__Active" className="Admin__Link">BOOK NOW</NavLink><label className="nav_Seprator">|</label>
            //    </NavItem> */}
            //         <NavItem className="navItem">
            //             <NavLink to="/loginIn" activeClassName="Admin__Link__Active" >LOG IN</NavLink><label className="nav_Seprator">|</label>
            //         </NavItem>
            //         <NavItem className="navItem_signUp">
            //             <NavLink to="/register" activeClassName="Admin__Link__Active">SIGN UP</NavLink>
            //         </NavItem>
            //     </Nav>
            // </div>
        );
    }
}

export default NavBar;