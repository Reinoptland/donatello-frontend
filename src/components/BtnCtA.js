import React from "react";
import "./BtnCta.css";

const Button = ({ variant, text }) => {
  return (
    <button className={`btn btn--cta btn--${variant}`} type="button">
      {text}
    </button>
  );
};

export default Button;
