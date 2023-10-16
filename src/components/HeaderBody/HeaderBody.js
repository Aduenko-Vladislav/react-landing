import React from "react";
import Button from "../Button/Button.js";

import { StyledBody, Title, Subtitle } from "./styles";

const HeaderBody = () => {
  return (
    <StyledBody>
      <Title>Your Favorite One Page Multi Purpose Template</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        commodo cursus magna vel scelerisque nisl consectetur et.
      </Subtitle>
      <Button href="#" buttonText="Find Out More"></Button>
    </StyledBody>
  );
};

export default HeaderBody;
