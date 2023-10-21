import React from "react";
import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import linkedinIcon from "../../assets/icons/linkidin.svg";

import {
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
} from "./styles";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <FooterContainer>
          <FooterItem>
            <Title>Location</Title>
            <Subtitle>3481 Melrose Place Beverly Hills, CA 90210</Subtitle>
          </FooterItem>
          <FooterItem>
            <Title>Share with Love</Title>
            <LinksBlock>
              <Item>
                <Link
                  href="https://www.facebook.com/adyenko/"
                  bgImage={facebookIcon}
                />
              </Item>
              <Item>
                <Link href="https://twitter.com" bgImage={twitterIcon} />
              </Item>
              <Item>
                <Link
                  href="https://www.linkedin.com/in/vaduenko/"
                  bgImage={linkedinIcon}
                />
              </Item>
            </LinksBlock>
          </FooterItem>
          <FooterItem>
            <Title>About ActiveBox</Title>
            <Subtitle>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
              ullamcorper nulla non metus auctor fringilla.
            </Subtitle>
          </FooterItem>
        </FooterContainer>
      </StyledFooter>
      <CopyrightBlock>
        <CopyrightContainer>
          <Text>
            Copyright © 2023 ActiveBox. All Rights Reserved Made by&nbsp;
            <CopyrightLink href="https://www.linkedin.com/in/vaduenko">
              Vladislav Aduenko
            </CopyrightLink>
          </Text>
        </CopyrightContainer>
      </CopyrightBlock>
    </>
  );
};
export default Footer;
