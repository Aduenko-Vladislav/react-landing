import React from "react";
import { StyledButton, Link } from "./styles";

const Button = (props) => {
  return (
    <StyledButton>
      <Link target="blank">{props.buttonText}</Link>
    </StyledButton>
  );
};

export default Button;
