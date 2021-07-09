import React from "react";
import "../succesPage/success.scss";
import CallToAction from "../../components/CallToAction";
import { GiShakingHands } from "react-icons/gi";
import axios from "axios";

const PaymentSucces = () => {
  async function fetchPayment() {
    try {
      const response = await axios.get(
        `https://donatello-development.herokuapp.com/projects/bf35aad5-1736-4934-b018-5d2bd0c88c63/donations/14212a4f-ccce-45e6-8bbd-6bc220bece69`
      );
      console.log("Response", response);
    } catch (error) {
      console.error(error);
    }
  }
  fetchPayment();
};

const SuccessPage = () => {
  return (
    <aside className="cta cta--project">
      <CallToAction
        background="lightPurple"
        icon={<GiShakingHands style={{ color: "white", fontSize: "5em" }} />}
        title="Thank you for supporting Arnoud's project:"
        description="Sociaal Oosterhout Platform"
        button="white"
        btnText="View other projects"
      />
    </aside>
  );
};

export default SuccessPage;
