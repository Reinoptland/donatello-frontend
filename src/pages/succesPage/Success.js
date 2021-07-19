import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../succesPage/Success.scss";
import CallToAction from "../../components/CallToAction";
import { FaHandsHelping } from "react-icons/fa";
import axios from "axios";

const SuccessPage = () => {
  const [payment, setPayment] = useState({});

  const params = useParams();
  console.log("Params", params.donationId, params.projectId);

  useEffect(() => {
    async function fetchPayment() {
      try {
        const response = await axios.get(
          `https://donatello-development.herokuapp.com/projects/${params.projectId}/donations/${params.donationId}`
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
      <Link to="/">
        <CallToAction
          background="purple"
          icon={<FaHandsHelping style={{ color: "white", fontSize: "5em" }} />}
          title={`Thank you for supporting ${payment.project?.user?.firstName}'s project:`}
          description={payment.project?.projectName}
          button="white"
          btnText="View other projects"
        />
      </Link>
    </aside>
  );
};

export default SuccessPage;
