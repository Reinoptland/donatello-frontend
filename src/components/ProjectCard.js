import React, { useState } from "react";
import "./ProjectCard.scss";
import Button from "./BtnCtA";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { GiPiggyBank } from "react-icons/gi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { formatDistance } from "date-fns";
import DonationCard from "./donationCard/DonationCard";

const ProjectCard = (props) => {
  const createdAt = new Date(props.createdAt);
  const today = new Date();

  const [popup, setPopup] = useState(false);

  console.log("CARD", props);

  return (
    <div className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{props.titleHeader}</h3>
        <p className="project-card__text project-card__text--white">
          {props.by}
        </p>
      </div>
      <div className="project-card__main">
        <div className="project-card__tags">
          {props.tags &&
            props.tags.map((tag) => {
              return (
                <p
                  key={tag.name}
                  className="project-card__tags project-card__tags--css"
                >
                  {tag.name}
                </p>
              );
            })}
        </div>
        <p className="project-card__text project-card__text--black">
          {props.description}
        </p>
        <div className="project-card__btn">
          <Button
            type="button"
            onClick={() => setPopup(true)}
            icon={
              <FaHandHoldingHeart
                style={{
                  color: "white",
                  fontSize: "0,5em",
                  marginRight: "0.5rem",
                }}
              />
            }
            text={
              props.count > 0 ? "Make a donation" : "Be the first to donate"
            }
            size="icon"
            variant="purple"
          />
          <Button
            type="button"
            icon={
              <FaRegEye
                style={{
                  color: "white",
                  fontSize: "0,5em",
                  marginRight: "0.5rem",
                }}
              />
            }
            text="view"
            size="icon"
            variant="purple"
          />
        </div>
      </div>
      <div className="project-card__footer">
        <div>
          <GiPiggyBank
            style={{
              color: "#751cc1",
              fontSize: "2em",
              marginBottom: "0.5rem",
            }}
          />
          <p>€ {props.amount}</p>
        </div>
        <div>
          <FaRegCalendarCheck
            style={{
              color: "#751cc1",
              fontSize: "2em",
              marginBottom: "0.5rem",
            }}
          />
          <p>{formatDistance(createdAt, today)} ago</p>
        </div>
        <div>
          <FaHandHoldingHeart
            style={{
              color: "#751cc1",
              fontSize: "2em",
              marginBottom: "0.5rem",
            }}
          />
          <p>{props.count}</p>
        </div>
      </div>
      {popup && (
        <DonationCard
          id={props.id}
          titleHeader={props.titleHeader}
          by={props.by}
          tags={props.tags}
          description={props.description}
        />
      )}
    </div>
  );
};

export default ProjectCard;
