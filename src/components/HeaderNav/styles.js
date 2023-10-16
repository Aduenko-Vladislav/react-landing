import styled from "styled-components";
import Colors from "../../ui/colors";
import { media } from "../../ui/media";
import Background from "../../assets/img/bg.jpg";

const StyledHeader = styled.header`
  position: relative;

  margin-bottom: 116px;
  padding-bottom: 120px;

  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${Colors.bgpic};
    opacity: 0.8;
    z-index: 1;
  }

  ${media.tablet} {
    padding-bottom: 126px;
    margin-bottom: 87.41px;
  }

  ${media.mobile} {
    padding-bottom: 52px;
    margin-bottom: 58.38px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  max-width: 1170px;
  width: 100%;
  z-index: 1;
  margin: 0 auto;
  margin-bottom: 166px;
  padding: 0 16px;
  &::before {
    content: "";
    position: absolute;
    border-bottom: 1px solid ${Colors.borderLine};
    width: 100%;
    top: 100%;
    left: 0;
    ${media.mobile} {
      display: none;
    }
  }

  ${media.tablet} {
    max-width: 984px;
    margin-bottom: 157px;
  }

  ${media.mobile} {
    padding: 0 20px;
    margin-bottom: 49.75px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  ${media.mobile} {
    margin: 14.64px 0;
  }
`;

const Logo = styled.img`
  display: block;
  max-width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  ${media.mobile} {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.3s linear;
    overflow: auto;
    display: block;
    padding: 100px 0 0 20px;

    &::before {
      content: "";
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      height: 80px;
      z-index: 2;
    }
  }
`;

const NavItem = styled.li`
  min-width: 134px;
  width: 100%;
  transition: 0.5s linear;
  border-bottom: 4px solid transparent;
  position: relative;
  ${media.tablet} {
    min-width: 112px;
  }
  ${media.mobile} {
    display: flex;
  }
  &:hover {
    border-bottom: 4px solid ${Colors.borderLine};
    top: calc(100% + 28px);
    left: 0;
    &:active {
      border-bottom: 4px solid ${Colors.navActive};
    }
  }
`;

const NavLink = styled.a`
  display: block;
  padding: 36px 0;

  text-align: center;
  text-transform: uppercase;

  font-size: 13px;
  font-weight: 700;
  line-height: normal;

  color: ${Colors.textColorheader};
  ${media.tablet} {
    font-size: 12px;
    line-height: 14px;
  }
  &:active {
    color: ${Colors.navActive};
  }
`;

export { StyledHeader, Logo, Link, Nav, NavList, NavItem, NavLink };
