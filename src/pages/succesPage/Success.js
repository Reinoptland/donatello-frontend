import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../succesPage/Success.scss";
import CallToAction from "../../components/CallToAction";
import { FaHandsHelping } from "react-icons/fa";
import axios from "axios";
import GridLoader from "react-spinners/GridLoader";

const SuccessPage = () => {
  const [payment, setPayment] = useState({});
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#b78add");

  const params = useParams();
  console.log("Params", params.donationId, params.projectId);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

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
    <>
      <div className="wrapper-succespage">
        {loading === false ? (
          <aside className="cta cta--project">
            <Link to="/">
              <CallToAction
                background="purple"
                icon={
                  <FaHandsHelping style={{ color: "white", fontSize: "5em" }} />
                }
                title={`Thank you for supporting ${payment.project?.user?.firstName}'s project:`}
                description={payment.project?.projectName}
                button="white"
                btnText="View other projects"
              />
            </Link>
          </aside>
        ) : (
          <div className="loader">
            <h2>Your donation is being processed</h2>{" "}
            <GridLoader color={color} />{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default SuccessPage;
