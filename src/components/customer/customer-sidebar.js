// import React, { useState } from 'react'
// import { NavItem, NavLink, Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import './customer.css';

// const CustomerSidebarComponent = (props) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen(!dropdownOpen);
//   return (
//     <div className="styledsidenav">
//       <div className="">
//         <div className="side-menu">
//           <Nav vertical className="list-unstyled pb-3">
//             <NavItem>
//               <Link to="/"><NavLink>DASHBOARD</NavLink></Link>
//             </NavItem>

//             <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
//               <DropdownToggle nav caret>
//                 SERVICE
//             </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem>SERVICE REQUEST</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>SERVICE HISTORY</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </Nav>

//         </div>
//       </div>
//     </div>
//   )
// }


// export default CustomerSidebarComponent;
