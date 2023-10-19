import React from "react";
import HeaderBody from "../HeaderBody/HeaderBody";
import LogoIcon from "../../assets/icons/logo.svg";

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
        <Link>
          <Logo src={LogoIcon} alt="logo"/>
        </Link>
        <NavList>
          <NavItem>
            <NavLink href="#features">features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#works">works</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#our_team">our team</NavLink>
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
