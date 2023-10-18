import React from "react";
import WorkOne from "../../assets/img/work_1.jpg";
import WorkTwo from "../../assets/img/work_2.jpg";
import WorkTree from "../../assets/img/work_3.jpg";
import WorkFour from "../../assets/img/work_4.jpg";
import WorkFive from "../../assets/img/work_5.jpg";
import WorkSix from "../../assets/img/work_6.jpg";
import WorkSeven from "../../assets/img/work_7.jpg";
import WorkEight from "../../assets/img/work_8.jpg";
import {
  StyledWorks,
  WorkItem,
  BackBlock,
  Title,
  Subtitle,
  Img,
} from "./styles";
const SectionWorks = () => {
  const itemsData = [
    {
      id: 1,
      imageURL: WorkOne,
      title: "Minimalism",
      description: " Space and Clarity",
    },
    {
      id: 2,
      imageURL: WorkTwo,
      title: "Futurism",
      description: "Technology and Sleekness",
    },
    {
      id: 3,
      imageURL: WorkTree,
      title: "Boho Chic",
      description: "Eclecticism and Comfort",
    },
    {
      id: 4,
      imageURL: WorkFour,
      title: "Scandinavian",
      description: "Light and Simplicity",
    },
    {
      id: 5,
      imageURL: WorkFive,
      title: "Ethnic",
      description: "Culture in Colors",
    },
    {
      id: 6,
      imageURL: WorkSix,
      title: "Grunge",
      description: "Rigor and Boldness.",
    },
    {
      id: 7,
      imageURL: WorkSeven,
      title: "Loft",
      description: "Rawness and Space.",
    },
    {
      id: 8,
      imageURL: WorkEight,
      title: "Industrial",
      description: " Urban and Raw",
    },
  ];

  return (
    <StyledWorks id="works">
      {itemsData.map((el) => (
        <WorkItem key={el.id}>
          <Img src={el.imageURL} />
          <BackBlock>
            <Title>{el.title}</Title>
            <Subtitle>{el.description}</Subtitle>
          </BackBlock>
        </WorkItem>
      ))}
    </StyledWorks>
  );
};
export default SectionWorks;
