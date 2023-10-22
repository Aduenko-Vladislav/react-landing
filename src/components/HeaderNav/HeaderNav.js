import React, { useState } from "react";
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
  BurgerButton,
  Span,
} from "./styles";

const HeaderNav = () => {
  const [isBurgerActive, setBurgerActive] = useState(false);

  const handleBurgerClick = () => {
    setBurgerActive(!isBurgerActive);
  };

  const handleNavLinkClick = () => {
    setBurgerActive(false);
  };

  return (
    <StyledHeader className={isBurgerActive ? "active" : ""}>
      <Nav>
        <Link className={isBurgerActive ? "active" : ""}>
          <Logo src={LogoIcon} alt="logo" />
        </Link>
        <NavList className={isBurgerActive ? "active" : ""}>
          <NavItem>
            <NavLink onClick={handleNavLinkClick} href="#features">
              features
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={handleNavLinkClick} href="#works">
              works
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={handleNavLinkClick} href="#our_team">
              our team
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={handleNavLinkClick} href="#testimonials">
              testimonials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={handleNavLinkClick} href="#download">
              download
            </NavLink>
          </NavItem>
        </NavList>
        <BurgerButton
          onClick={handleBurgerClick}
          className={isBurgerActive ? "active" : ""}
        >
          <Span className={isBurgerActive ? "active" : ""} />
        </BurgerButton>
      </Nav>
      <HeaderBody isBurgerActive={isBurgerActive} />
    </StyledHeader>
  );
};

export default HeaderNav;
