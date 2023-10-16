import React from "react";
import { StyledButton, Link } from "./styles";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <StyledButton>
      <Link target="blank">{props.buttonText}</Link>
    </StyledButton>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default Button;
