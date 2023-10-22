import styled from "styled-components";
import Colors from "../../ui/colors";
import { media } from "../../ui/media";

const StyledSlider = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1510px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 31px;

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const CarouselImg = styled.div`
  max-height: 500px;
  width: 100%;
  ${media.tablet} {
    min-height: 332px;
  }
  ${media.mobile} {
    min-height: 250px;
  }
`;

const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const CarouselInfo = styled.div`
  max-width: 770px;
  width: 100%;
  background-color: ${Colors.swiperbgColor};
`;

const InfoContainer = styled.div`
  max-width: 470px;
  width: 100%;
  margin: 0 auto;
  padding: 116px 0;

  text-align: center;
  ${media.tablet} {
    padding: 55px 0;
  }
  ${media.mobile} {
  }
`;

const Text = styled.h5`
  @import url("https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap");
  margin-bottom: 10px;
  color: ${Colors.swiperColor};

  font-family: "Cardo", serif;
  font-size: 36px;
  font-style: italic;
  font-weight: 400;
  text-transform: capitalize;
  ${media.tablet} {
    font-size: 24px;
  }
`;

const Name = styled.p`
  color: ${Colors.swiperColor};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  ${media.tablet} {
    font-size: 12px;
  }
`;

const Swipper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 114px;

  ${media.mobile} {
    margin-bottom: 23px;
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 15px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid ${Colors.dotborderColor};
  background-color: ${(props) =>
    props.active === "true" ? Colors.activeDotColor : Colors.inactiveDotColor};
`;

export {
  StyledSlider,
  CarouselImg,
  SliderImg,
  CarouselInfo,
  InfoContainer,
  Text,
  Name,
  Swipper,
  Dot,
};
