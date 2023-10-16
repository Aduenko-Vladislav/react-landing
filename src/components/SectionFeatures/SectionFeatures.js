import React from "react";
import IconEasily from "../../assets/icons/icon_1.svg";
import IconResponsive from "../../assets/icons/icon_2.svg";
import IconModern from "../../assets/icons/icon_3.svg";
import IconCode from "../../assets/icons/icon_4.svg";
import IconShip from "../../assets/icons/icon_5.svg";
import IconDownload from "../../assets/icons/icon_6.svg";

import { StyledFeature, ItemFeature, Title, Subtitle, Img } from "./styles";

const SectionFeatures = () => {
  const itemsData = [
    {
      id: 1,
      imageURL: IconEasily,
      title: "Easily Customised",
      description:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.",
    },
    {
      id: 2,
      imageURL: IconResponsive,
      title: "Responsive REady",
      description:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.",
    },
    {
      id: 3,
      imageURL: IconModern,
      title: "Modern Design",
      description:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.",
    },
    {
      id: 4,
      imageURL: IconCode,
      title: "Clean Code",
      description:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.",
    },
    {
      id: 5,
      imageURL: IconShip,
      title: "Ready to Ship",
      description:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.",
    },
    {
      id: 6,
      imageURL: IconDownload,
      title: "Download for Free",
      description:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.",
    },
  ];

  return (
    <StyledFeature id="features">
      {itemsData.map((el) => (
        <ItemFeature key={el.id}>
          <Img src={el.imageURL} />
          <Title>{el.title}</Title>
          <Subtitle>{el.description}</Subtitle>
        </ItemFeature>
      ))}
    </StyledFeature>
  );
};

export default SectionFeatures;
