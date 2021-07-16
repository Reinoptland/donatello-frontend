import React from "react";
import { useForm } from "react-hook-form";
import ReactDom from "react-dom";
import "../donationCard/DonationCard.scss";
import {
  FaHandHoldingHeart,
  FaIdeal,
  FaRegCalendarCheck,
} from "react-icons/fa";
import { GiPiggyBank } from "react-icons/gi";
import Button from "../BtnCtA";
import axios from "axios";
//import { formatDistance } from "date-fns";

const DonationCard = (props) => {
  //   const createdAt = new Date(props.createdAt);
  //   const today = new Date();

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://donatello-development.herokuapp.com/projects/a596d932-c9c9-4276-9c44-7d3bda879cf2/donations",
        { donationAmount: data.amount, comment: data.comment }
      );
      window.location.assign(response.data.payment._links.checkout.href);
    } catch (error) {
      console.error(error);
    }
  };

  return ReactDom.createPortal(
    <div className="popup">
      <div className="donation-card">
        <div className="donation-card__header">
          <h3 className="donation-card__title">{props.titleHeader}</h3>
          <p className="donation-card__text donation-card__text--white">
            {props.by}
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="donation-card__main">
          <div className="donation-card__tags">
            {props.tags.map((tag) => {
              return (
                <p
                  key={tag.name}
                  className="donation-card__tags donation-card__tags--css"
                >
                  {tag.name}
                </p>
              );
            })}
          </div>
          <p className="donation-card__text donation-card__text--black">
            {props.description}
          </p>
          <h4>How much do you want to donate?</h4>
          <div className="donation-card__amount">
            <aside className="donation-card__amount-display">€ 25</aside>
            <aside className="donation-card__amount-inputs">
              {/* {[1, 5, 10, 25, 50, 100, 250].map((amount) => {
              return (
                <button key={amount} className="donation-card__amount-btn">
                  € {amount}
                </button>
              );
            })} */}
              <label className="form__label" htmlFor="amount">
                <input
                  className="form__input"
                  type="number"
                  placeholder="Enter an amount"
                  {...register("amount", { required: true })}
                />
              </label>
            </aside>
          </div>
          <h5>Leave a comment with your donation (optional)</h5>
          <div className="donation-card__comment">
            <label className="form__label" htmlFor="comment">
              <textarea
                className="form__input"
                placeholder="Leave your comment here"
                {...register("comment", { maxLength: 255 })}
              />
            </label>
            {/* <p>0/255 characters</p> */}
          </div>
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
        </form>
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
    </div>,
    document.getElementById("popup")
  );
};

export default DonationCard;
