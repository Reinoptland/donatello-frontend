import React from "react";
import "./CallToAction.css";
import { FaHandHoldingHeart } from "react-icons/fa";
import Button from "./BtnCtA";

const CallToAction = () => {
  const iconStyle = { color: "#730ec3", fontSize: "5em" };
  return (
    <div className="main-cta-wrapper">
      <span classname="icon icon--donate">
        <FaHandHoldingHeart style={iconStyle} />
      </span>
      <section className="text text--big">
        <h1>Donate to work you support</h1>
      </section>
      <section className="text text--small">
        <h4>Make your checkbook follow your heart</h4>
      </section>
      <span className="button">
        <Button />
      </span>
    </div>
  );
};

export default CallToAction;
