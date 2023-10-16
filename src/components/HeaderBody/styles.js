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

  ${media.tablet} {
    padding: 0 20px;
  }

  ${media.mobile} {
    padding: 0 20px;
  }
`;

const Title = styled.h1`
  margin-bottom: 31.43px;

  text-align: center;
  font-weight: 900;
  font-size: 64px;
  line-height: 75px;
  text-transform: uppercase;

  color: ${Colors.textColorheader};

  ${media.tablet} {
    font-size: 48px;
    margin-bottom: 61.86px;
    line-height: normal;
  }

  ${media.mobile} {
    font-size: 36px;
    margin-bottom: 32.71px;
    line-height: normal;
  }
`;

const Subtitle = styled.p`
  margin-bottom: 79.57px;

  font-size: 24px;
  font-weight: 400;
  text-align: center;

  color: ${Colors.textColorheader};

  ${media.tablet} {
    font-size: 18px;
    margin-bottom: 89.14px;
  }

  ${media.mobile} {
    font-size: 14px;
    margin-bottom: 42.29px;
  }
`;


export { StyledBody, Title, Subtitle };
