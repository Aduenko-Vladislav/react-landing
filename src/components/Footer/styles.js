import styled from "styled-components";
import Colors from "../../ui/colors";
import { media } from "../../ui/media";

const StyledFooter = styled.footer`
  padding: 0 16px;
  background-color: ${Colors.footerColor};
`;

const FooterContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 71px 0;
  ${media.tablet} {
    padding: 47px 0;
  }

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 43px 0 0;
  }
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 370px;
  width: 100%;
`;

const Title = styled.h5`
  margin-bottom: 29px;

  text-align: center;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;

  color: ${Colors.textColorFooter};
  ${media.tablet} {
    margin-bottom: 18px;
    font-size: 14px;
  }

  ${media.mobile} {
    margin-bottom: 35px;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  text-transform: capitalize;

  color: ${Colors.textColorFooter};
  ${media.tablet} {
    font-size: 14px;
  }

  ${media.mobile} {
    margin-bottom: 55px;
  }
`;

const LinksBlock = styled.ul`
  display: flex;
  column-gap: 26px;
  margin-top: 3px;
  ${media.mobile} {
    margin-bottom: 50px;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  display: block;
  width: 39px;
  height: 39px;

  border: 1px solid ${Colors.borderColor};
  background: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.5s linear;
  cursor: pointer;
  &:hover {
    filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg);
  }
  &:active {
    filter: invert(0.1) sepia(2) saturate(4) hue-rotate(175deg);
  }
`;

const CopyrightBlock = styled.div`
  padding: 24px 0;

  background-color: ${Colors.copyrightbgColor};
  ${media.tablet} {
    padding: 14px 0;
  }

  ${media.mobile} {
    padding: 29px 0;
  }
`;

const CopyrightContainer = styled.div`
  margin: 0 auto;
  max-width: 370px;
  width: 100%;
  ${media.mobile} {
    padding: 0 16px;
  }
`;

const Text = styled.p`
  color: ${Colors.copyrightTextColor};

  text-align: center;
  font-size: 18px;
  font-weight: 400;
  text-transform: capitalize;
  ${media.tablet} {
    font-size: 14px;
  }

  ${media.mobile} {
  }
`;

const CopyrightLink = styled.a`
  color: ${Colors.Maker};

  text-align: center;
  font-size: 18px;
  font-weight: 400;
  text-transform: capitalize;
  ${media.tablet} {
    font-size: 14px;
  }

  ${media.mobile} {
  }
`;

export {
  StyledFooter,
  FooterItem,
  Title,
  Subtitle,
  LinksBlock,
  Item,
  Link,
  CopyrightBlock,
  Text,
  FooterContainer,
  CopyrightContainer,
  CopyrightLink,
};
