import React, { PropsWithChildren } from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";

import menuIcon from "assets/icons/menu.svg";

function Header(props: PropsWithChildren) {
  return (
    <Navbar {...props} className="app-header" expand fixed="top">
      <NavbarBrand href="/">SpaceX</NavbarBrand>
      <NavbarToggler />
      <Collapse isOpen={true} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Falcon 9</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              Falcon heavy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              Dragon
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              Starship
            </NavLink>
          </NavItem>
        </Nav>
        <Nav navbar className="app-header__right-nav">
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              shop
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              <img src={menuIcon} alt="menu icon" />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
