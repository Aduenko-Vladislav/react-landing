import styled from "styled-components";
import Colors from "../../ui/colors";
import { media } from "../../ui/media";

const StyledTeam = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 119px;
  ${media.tablet} {
    max-width: 1024px;
    gap: 25px;
    padding: 0 16px;
    margin-bottom: 78px;
  }

  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 50px;
  }
`;

const TeamItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${media.mobile} {
    margin: 0 16px 50px;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 30px;
`;

const Name = styled.h2`
  margin-bottom: 6px;

  font-size: 24px;
  font-weight: 700;
  text-transform: capitalize;

  color: ${Colors.titleColor};
`;

const Position = styled.p`
  margin-bottom: 18px;

  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;

  color: ${Colors.itemPost};

  ${media.mobile} {
    margin-bottom: 38.49px;
  }
`;

const Description = styled.p`
  margin-top: auto;
  margin-bottom: 37.86px;
  font-size: 18px;
  font-weight: 400;

  color: ${Colors.subtitleColor};
  ${media.mobile} {
    margin-bottom: 55px;
  }
`;

const LinksBlock = styled.ul`
  margin-top: auto;
  display: flex;
`;
const Item = styled.li`
  margin-right: 10px;
`;

const Link = styled.a`
  display: block;
  width: 39px;
  height: 39px;

  border: 1px solid ${Colors.borderColor};
  background-image: ${(props) => `url(${props.bgImage})`};
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

export {
  StyledTeam,
  TeamItem,
  Name,
  Description,
  Img,
  Position,
  LinksBlock,
  Item,
  Link,
};
