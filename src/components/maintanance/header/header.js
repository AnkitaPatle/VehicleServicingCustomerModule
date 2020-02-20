import React, { Component } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import Logo from "../../../assets/images/logonew.jpg";
import "./Styled.css";
class Header extends Component {
    state = {};
    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <Dropdown>
                        {/* <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu> */}
                    </Dropdown>
                </header>
            </div>
        );
    }
}

export default Header;