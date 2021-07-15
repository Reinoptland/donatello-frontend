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
        <p>{props.by}</p>
      </div>
      <div className="project-card__main">
        <div>tag boxes</div>
        <p>
          description project blablblalalalalalalalala blalalaa blalala blalala
          blalalablalaalblal
        </p>
        <div>
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
