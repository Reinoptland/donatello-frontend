import React from "react";
import "./BtnCta.css";

const Button = (props) => {
  return (
    <button className={`btn btn--cta btn--${props.variant}`} type="button">
      {props.text}
    </button>
  );
};

export default Button;
