import React from "react";
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from "reactstrap";
import Wrapper from "./Wrapper";

const NavBar = () => {
  const navItems = [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "Datasets",
      url: "/search"
    },
    {
      title: "Groups",
      url: "/groups"
    },
    {
      title: "About",
      url: "/about"
    },
  ]


  return(
    <Wrapper className="main-navigation">
      <Navbar expand="md navbar-dark">
        <NavbarToggler onClick={() => console.log('toggle')} />
        <Collapse isOpen={true} navbar>
          <Nav className="mr-auto">
            {navItems.map((item, index) => (
              <NavItem key={index}>
                <Link
                  to={item.url}
                  activeClassName="active"
                >
                  {item.title}
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </Wrapper>
  );
}

export default NavBar;
