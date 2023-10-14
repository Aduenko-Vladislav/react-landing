import styled from "styled-components";
import Colors from "../../ui/colors";
import { media } from "../../ui/media";

const StyledBody = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

const Title = styled.h1`
  margin-bottom: 31.43px;

  text-align: center;
  font-weight: 900;
  font-size: 64px;
  line-height: 75px;
  text-transform: uppercase;

  color: ${Colors.textColorheader};
`;

const Subtitle = styled.p`
  margin-bottom: 79.57px;

  font-size: 24px;
  font-weight: 400;
  text-align: center;

  color: ${Colors.textColorheader};
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;

  max-width: 369px;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 26px 70px;
  width: 100%;

  color: ${Colors.textColorheader};
  background-color: ${Colors.bgbutton};

  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  transition: 0.3s linear;
  ${media.tablet} {
    padding: 26px 63px;
  }
  ${media.mobile} {
    padding: 26px 46px;
  }
  &:hover {
    background-color: ${Colors.buttonHover};
  }
  &:active {
    background-color: ${Colors.buttonActive};
    box-shadow: 4px 4px 30px #ff4343;
  }
`;

export { StyledBody, Title, Subtitle, Button, Link };
