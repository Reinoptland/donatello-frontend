import React from "react";
import "./BtnCta.scss";

const Button = ({ variant, text, icon, size, type = "button" }) => {
  return (
    <button className={`btn btn--${variant} btn--${size}`} type={type}>
      {icon} {text}
    </button>
  );
};

export default Button;
