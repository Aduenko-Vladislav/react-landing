import React from "react";
import Button from "../Button/Button";

import { StyledDownload, Title, Subtitle } from "./styles";

const SectionDownload = () => {
  return (
    <StyledDownload id="download">
      <Title>Are You Ready to Start? Download Now For Free!</Title>
      <Subtitle>Fusce dapibus, tellus ac cursus commodo</Subtitle>
      <Button href="#" buttonText="download here"></Button>
    </StyledDownload>
  );
};

export default SectionDownload;
