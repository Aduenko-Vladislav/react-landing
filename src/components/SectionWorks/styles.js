import styled from "styled-components";
import Colors from "../../ui/colors";
import { media } from "../../ui/media";

const StyledWorks = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  max-width: 1510px;
  margin: 0 auto;
  margin-bottom: 109px;
  ${media.tablet} {
    max-width: 1024px;
    margin-bottom: 78px;
  }

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 35px;
  }
`;

const WorkItem = styled.div`
  border: 2px solid ${Colors.swiperColor};
  position: relative;
`;

const BackBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  opacity: 0;
  &:hover {
    opacity: 1;
    background: ${Colors.picHover};
  }
  &:active {
    background: ${Colors.picActive};
  }
`;

const Title = styled.h3`
  margin-bottom: 21px;

  color: ${Colors.textColorProject};
  text-align: center;

  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  ${media.tablet} {
    margin-bottom: 15px;

    font-size: 18px;
  }
  ${media.mobile} {
    margin-bottom: 5px;
  }
`;

const Subtitle = styled.p`
  color: ${Colors.textColorProject};

  text-align: center;
  font-size: 18px;
  font-weight: 400;
  ${media.tablet} {
    font-size: 14px;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export { StyledWorks, WorkItem, BackBlock, Title, Subtitle, Img };
