import React from "react";
import HeaderBody from "../HeaderBody/HeaderBody";

import {
  StyledHeader,
  Nav,
  Link,
  Logo,
  NavList,
  NavItem,
  NavLink,
} from "./styles";

const HeaderNav = () => {
  return (
    <StyledHeader>
      <Nav>
        <Link src>
          <Logo />
        </Link>
        <NavList>
          <NavItem>
            <NavLink href="#features">features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#works">works</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#our team">our team</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#testimonials">testimonials</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#download">download</NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <HeaderBody />
    </StyledHeader>
  );
};

export default HeaderNav;