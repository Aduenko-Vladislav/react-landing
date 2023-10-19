import styled from "styled-components";
import Colors from "../../ui/colors";
import { media } from "../../ui/media";

const StyledFeature = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 31px;

  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 100px;
  padding: 0 20px;
  ${media.tablet} {
    gap: 20px;
    margin-bottom: 80px;
  }

  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FeatureItem = styled.div`
  padding: 10px;
`;

const Img = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 30px;
  ${media.tablet} {
    width: 85px;
    height: 85px;
    margin-bottom: 24px;
  }

  ${media.mobile} {
    margin-bottom: 21px;
  }
`;

const Title = styled.h2`
  width: 100%;

  margin-bottom: 20.43px;

  text-align: center;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  color: ${Colors.titleColor};
  ${media.tablet} {
    min-height: 36px;
    font-size: 18px;
  }
`;

const Subtitle = styled.p`
  margin-bottom: 25px;

  color: ${Colors.subtitleColor};
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  ${media.tablet} {
    font-size: 14px;
  }
`;

export { Title, Subtitle, Img, FeatureItem, StyledFeature };
