import React from "react";

import { StyledBody, Title, Subtitle, Button, Link } from "./styles";

const HeaderBody = () => {
  return (
    <StyledBody>
      <Title>Your Favorite One Page Multi Purpose Template</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        commodo cursus magna vel scelerisque nisl consectetur et.
      </Subtitle>
      <Button>
        <Link href="#" target="blank">
          Find Out More
        </Link>
      </Button >
    </StyledBody>
  );
};

export default HeaderBody;
