import React from "react";
import "./ProjectCard.scss";
import Button from "./BtnCtA";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <h4>{props.titleHeader}</h4>
        <p className="project-card__text project-card__text--white">
          {props.by}
        </p>
      </div>
      <div className="project-card__main">
        <div className="project-card__tags">
          <div className="project-card__tags project-card__tags--css">
            box 1
          </div>
          <div className="project-card__tags project-card__tags--css">
            box 2
          </div>
          <div className="project-card__tags project-card__tags--css">
            box 3
          </div>
        </div>
        <p className="project-card__text project-card__text--black">
          description project blablblalalalalalalalala blalalaa blalala blalala
          blalalablalaalblal
        </p>
        <div className="project-card__btn">
          <Button
            type="submit"
            icon={
              <FaHandHoldingHeart
                style={{ color: "white", fontSize: "0,5em" }}
              />
            }
            text="make a donation"
            size="btnDonation"
            variant="purple"
          />
          <Button
            type="submit"
            icon={<FaRegEye style={{ color: "white", fontSize: "0,5em" }} />}
            text="view"
            size="btnView"
            variant="purple"
          />
        </div>
      </div>
      <div className="project-card__footer">footer</div>
    </div>
  );
};

export default ProjectCard;
