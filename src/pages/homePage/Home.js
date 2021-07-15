import React from "react";
import "../homePage/Home.scss";
import CallToAction from "../../components/CallToAction";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import ProjectCard from "../../components/ProjectCard";

const Home = () => {
  return (
    <div className="cta-wrapper">
      <aside className="cta cta--donate">
        <CallToAction
          icon={
            <FaHandHoldingHeart style={{ color: "#730ec3", fontSize: "5em" }} />
          }
          background="white"
          title="Donate to work you support"
          description="Make your checkbook follow your heart"
          button="purple"
          btnText="Discover Projects"
        />
      </aside>
      <aside className="cta cta--project">
        <CallToAction
          background="purple"
          icon={<GiBiceps style={{ color: "white", fontSize: "5em" }} />}
          title="Change is in your hands"
          description="Start a project that changes the world"
          button="white"
          btnText="Start a project"
        />
      </aside>
      <div>
        <ProjectCard
          titleHeader="Cool animation project"
          by="by: Arty McArtis"
        />
      </div>
    </div>
  );
};

export default Home;
