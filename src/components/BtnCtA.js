import React from "react";
import "./BtnCta.scss";

const Button = ({ variant, text, size, type="button" }) => {
  return (
    <button className={`btn btn--${variant} btn--${size}`} type={type}>
      {text}
    </button>
  );
};

export default Button;
