import styled from "styled-components";
import Colors from "../../ui/colors";
import { media } from "../../ui/media";

const StyledDownload = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 114px;

  ${media.tablet} {
    margin-bottom: 78px;
  }

  ${media.mobile} {
    padding: 0 16px;
  }
`;

const Title = styled.h3`
  margin-bottom: 32px;
  text-align: center;

  color: ${Colors.titleColor};
  font-size: 30px;
  font-weight: 500;
`;

const Subtitle = styled.p`
  margin-bottom: 47.71px;

  color: ${Colors.downloadColor};
  text-align: center;

  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;

  ${media.tablet} {
    margin-bottom: 43.29px;
  }

  ${media.mobile} {
    margin-bottom: 11px;
  }
`;

export { StyledDownload, Title, Subtitle };
