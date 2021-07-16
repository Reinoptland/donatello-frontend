import React from "react";
import "./BtnCta.scss";

const Button = ({ onClick, variant, text, icon, size, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn--${variant} btn--${size}`}
      type={type}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
