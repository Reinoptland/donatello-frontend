import React from "react";
import "../succesPage/success.scss";
import CallToAction from "../../components/CallToAction";
import { GiShakingHands } from "react-icons/gi";

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
