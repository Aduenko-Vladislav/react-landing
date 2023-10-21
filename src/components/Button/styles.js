import styled from "styled-components";
import Colors from "../../ui/colors";
import { media } from "../../ui/media";

const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  max-width: 370px;
  cursor: pointer;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 26px 70px;
 
  max-width: 370px;
  width: 100%;

  color: ${Colors.textColorheader};
  background-color: ${Colors.bgbutton};

  font-weight: 900;
  font-size: 22px;
  line-height: 28px;
  text-transform: uppercase;
  transition: 0.3s linear;

  ${media.tablet} {
    padding: 28px 45px;

    line-height: normal;
  }
  
  ${media.mobile} {
    padding: 18px 30px;

    font-size: 21px;
  }
  
  &:hover {
    background-color: ${Colors.buttonHover};
  }
  &:active {
    background-color: ${Colors.buttonActive};
    box-shadow: 4px 4px 30px #ff4343;
  }
`;

export { StyledButton, Link };
