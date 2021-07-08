import React from "react";
import "./CallToAction.css";
import Button from "./BtnCtA";

const CallToAction = (props) => {
  return (
    <div className={`main-cta-wrapper main-cta-wrapper--${props.background}`}>
      <span classname="icon icon--donate">{props.icon}</span>
      <section className="text text--big">
        <h1>{props.title}</h1>
      </section>
      <section className="text text--small">
        <h4>{props.description}</h4>
      </section>
      <span className="button">
        <Button variant={props.button} text={props.btnText} />
      </span>
    </div>
  );
};

export default CallToAction;
