// import React, { Component } from 'react'
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     Nav,
//     NavItem,
//     NavLink,  
//     span  
// } from 'reactstrap';
// import img from '../../assets/images/servicing.png'
// import '../customer/customer.css';


// class CustomerNavbarComponent extends Component {
//     getFirstLatter(name) {
//     return name.charAt(0).toUpperCase();
//   }
//     render() {
//         return (
//             <div>
//                 <Navbar color="dark" dark expand="md">
//                     <NavbarBrand href="/customernavbar">VEHICLE SERVICING</NavbarBrand>
//                     <NavbarToggler />
//                     <Collapse navbar>
//                         <Nav className="ml-auto" navbar>                           
//                             <UncontrolledDropdown nav inNavbar>
//                                 <DropdownToggle nav caret>                                        
//                                     Hello {` ` + localStorage.getItem("name")}
//                             </DropdownToggle>
//                                 <DropdownMenu right>
//                                     <DropdownItem>                                                          
//                                         My Profile
//                             </DropdownItem>
//                             <DropdownItem divider />
//                                     <DropdownItem>
//                                         Change Password
//                             </DropdownItem>
//                                     <DropdownItem divider />
//                                     <DropdownItem>
//                                         Logout
//                             </DropdownItem>
//                                 </DropdownMenu>
//                             </UncontrolledDropdown>                           
//                         </Nav>
//                     </Collapse>
//                 </Navbar>
//             </div>
//         )
//     }
// }

// export default CustomerNavbarComponent;
