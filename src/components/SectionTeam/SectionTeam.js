import React from "react";
import mateOne from "../../assets/img/Ruth.jpg";
import mateTwo from "../../assets/img/Timothy.jpg";
import mateTree from "../../assets/img/Victoria.jpg";
import mateFour from "../../assets/img/Beverly.jpg";
import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import linkedinIcon from "../../assets/icons/linkidin.svg";

import {
  StyledTeam,
  TeamItem,
  Name,
  Description,
  Img,
  Position,
  LinksBlock,
  Item,
  Link,
} from "./styles";
const SectionTeam = () => {
  const itemsData = [
    {
      id: 1,
      imageURL: mateOne,
      name: "Ruth woods",
      position: "founder, ceo",
      description:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.",
      facebook: "https://www.facebook.com/ruth.woods.39904",
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/ruth-woods-883a82109/",
    },
    {
      id: 2,
      imageURL: mateTwo,
      name: "Timothy Reed",
      position: "co-founder, developer",
      description:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.",
      facebook: "https://www.facebook.com/profile.php?id=100088178259727",
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/timothylreed/",
    },
    {
      id: 3,
      imageURL: mateTree,
      name: "Victoria Vladez",
      position: "ui designer",
      description:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.",
      facebook: "https://www.facebook.com/profile.php?id=100093289403427",
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/victorialeighvaladez/",
    },
    {
      id: 4,
      imageURL: mateFour,
      name: "Beverly Little",
      position: "data scientist",
      description:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.",
      facebook: "https://www.facebook.com/beverly.little.739",
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/beverly-little-03aa74230/",
    },
  ];

  return (
    <StyledTeam id="our_team">
      {itemsData.map((el) => (
        <TeamItem key={el.id}>
          <Img src={el.imageURL} />
          <Name>{el.name}</Name>
          <Position>{el.position}</Position>
          <Description>{el.description}</Description>
          <LinksBlock>
            <Item>
              <Link href={el.facebook} bgImage={facebookIcon} target="blank" />
            </Item>
            <Item>
              <Link href={el.twitter} bgImage={twitterIcon} target="blank" />
            </Item>
            <Item>
              <Link href={el.linkedin} bgImage={linkedinIcon} target="blank" />
            </Item>
          </LinksBlock>
        </TeamItem>
      ))}
    </StyledTeam>
  );
};
export default SectionTeam;
