import React from "react";
import "../donationCard/DonationCard.scss";
import {
  FaHandHoldingHeart,
  FaIdeal,
  FaRegCalendarCheck,
} from "react-icons/fa";
import { GiPiggyBank } from "react-icons/gi";
import Button from "../BtnCtA";
//import { formatDistance } from "date-fns";

const DonationCard = (props) => {
  //   const createdAt = new Date(props.createdAt);
  //   const today = new Date();

  return (
    <div className="donation-card">
      <div className="donation-card__header">
        <h3 className="donation-card__title">Sociaal Oosterhout platform</h3>
        <p className="donation-card__text donation-card__text--white">
          by: Arnoud Bouman
        </p>
      </div>
      <div className="donation-card__main">
        <div className="donation-card__tags">
          <p className="donation-card__tags donation-card__tags--css">
            Community
          </p>
        </div>
        <p className="donation-card__text donation-card__text--black">
          Description project donation
        </p>
        <h4>How much do you want to donate?</h4>
        <div className="donation-card__btn">
          <Button
            type="submit"
            icon={
              <FaHandHoldingHeart
                style={{
                  color: "white",
                  fontSize: "0,5em",
                  marginRight: "0.5rem",
                }}
              />
            }
            text="Support Arnoud with €€€€€"
            size="medium"
            variant="purple"
          />
        </div>
        <div className="donation-card__payment">
          <h4 className="donation-card__ideal">
            Payment methods:{" "}
            <FaIdeal style={{ fontSize: "2em", marginLeft: "0.5rem" }} />
          </h4>
        </div>
      </div>
      <div className="donation-card__footer">
        <div>
          <GiPiggyBank
            style={{
              color: "#751cc1",
              fontSize: "2em",
              marginBottom: "0.5rem",
            }}
          />
          <p>€ amount</p>
        </div>
        <div>
          <FaRegCalendarCheck
            style={{
              color: "#751cc1",
              fontSize: "2em",
              marginBottom: "0.5rem",
            }}
          />
          {/* <p>{formatDistance(createdAt, today)} ago</p> */}
          <p>days ago</p>
        </div>
        <div>
          <FaHandHoldingHeart
            style={{
              color: "#751cc1",
              fontSize: "2em",
              marginBottom: "0.5rem",
            }}
          />
          <p>count</p>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
