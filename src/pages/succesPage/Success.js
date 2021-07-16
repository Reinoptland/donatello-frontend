import React, { useEffect, useState } from "react";
import "../succesPage/Success.scss";
import CallToAction from "../../components/CallToAction";
import { FaHandsHelping } from "react-icons/fa";
import axios from "axios";

const SuccessPage = () => {
  const [payment, setPayment] = useState({});

  useEffect(() => {
    async function fetchPayment() {
      try {
        const response = await axios.get(
          `https://donatello-development.herokuapp.com/projects/bf35aad5-1736-4934-b018-5d2bd0c88c63/donations/14212a4f-ccce-45e6-8bbd-6bc220bece69`
        );
        setPayment(response.data.donation);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPayment();
  }, []);
  return (
    <aside className="cta cta--project">
      <CallToAction
        background="purple"
        icon={<FaHandsHelping style={{ color: "white", fontSize: "5em" }} />}
        title={`Thank you for supporting ${payment.project?.user?.firstName}'s project:`}
        description={payment.project?.projectName}
        button="white"
        btnText="View other projects"
      />
    </aside>
  );
};

export default SuccessPage;
