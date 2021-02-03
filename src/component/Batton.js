import PropTypes from "prop-types";
import React from "react";

const Button = ({ onClickButton }) => (
  <button type="button" className="Button" onClick={onClickButton}>
    Load more
  </button>
);

Button.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};

export default Button;
