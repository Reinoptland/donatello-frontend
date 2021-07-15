import React, { useEffect, useState } from "react";
import "../homePage/Home.scss";
import CallToAction from "../../components/CallToAction";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import ProjectCard from "../../components/ProjectCard";
import axios from "axios";

const Home = () => {
  const [project, setProject] = useState({});
  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await axios.get(
          `https://donatello-development.herokuapp.com/projects?sortBy=totalDonationAmount&limit=3`
        );
        setProject(response.data.sortedProjects);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProject();
  }, []);
  console.log("Project", project);
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
        <div>
          <ProjectCard
            titleHeader={project[0]?.projectName}
            by={`by: ${project[0]?.user?.firstName} ${project[0]?.user?.lastName}`}
            description={project[0]?.projectDescription}
            amount={project[0]?.totalDonationAmount}
            count={project[0]?.totalDonationCount}
          />
        </div>
        <div>
          <ProjectCard
            titleHeader={project[1]?.projectName}
            by={`by: ${project[1]?.user?.firstName} ${project[1]?.user?.lastName}`}
            // tags={
            //   project[0].tags?.name &&
            //   project[0].tags?.name.map((tag) => {
            //     console.log("tags", tag);
            //     return <p key={tag.tag.name}>{tag.tag.name}</p>;
            //   })
            // }
            description={project[1]?.projectDescription}
            amount={project[1]?.totalDonationAmount}
            count={project[1]?.totalDonationCount}
          />
        </div>
        <div>
          <ProjectCard
            titleHeader={project[2]?.projectName}
            by={`by: ${project[2]?.user?.firstName} ${project[2]?.user?.lastName}`}
            description={project[2]?.projectDescription}
            amount={project[2]?.totalDonationAmount}
            count={project[2]?.totalDonationCount}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
