import React from "react";
import "../homePage/Home.scss";
import CallToAction from "../../components/CallToAction";
import { FaHandHoldingHeart, FaStar } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { MdFiberNew } from "react-icons/md";
import ProjectShowCase from "../../components/ProjectShowCase";
import DonationCard from "../../components/donationCard/DonationCard";

const Home = () => {
  return (
    <>
      <header className="home__header">
        <div className="cta-wrapper">
          <aside className="cta cta--donate">
            <CallToAction
              icon={
                <FaHandHoldingHeart
                  style={{ color: "#730ec3", fontSize: "5em" }}
                />
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
        </div>
      </header>
      <main className="home__main">
        <h2 className="home__showcase-title">
          <FaStar
            style={{ color: "#751cc1", fontSize: "2em", marginRight: "0.5rem" }}
          />
          Featured
        </h2>
        <ProjectShowCase url="https://donatello-development.herokuapp.com/projects?sortBy=totalDonationAmount&limit=3" />
        <h2 className="home__showcase-title">
          <MdFiberNew
            style={{ color: "#751cc1", fontSize: "2em", marginRight: "0.5rem" }}
          />
          Most recent
        </h2>
        <ProjectShowCase url="https://donatello-development.herokuapp.com/projects?sortBy=recent&limit=3" />
      </main>
    </>
  );
};

export default Home;
