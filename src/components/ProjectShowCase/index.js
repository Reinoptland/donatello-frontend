import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import axios from "axios";

export default function ProjectShowCase(props) {
  const [project, setProject] = useState([]);
  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await axios.get(props.url);
        setProject(response.data.sortedProjects);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProject();
  }, [props.url]);
  return (
    <>
      {project &&
        project.map((project) => {
          return (
            <div key={project.id}>
              <ProjectCard
                titleHeader={project.projectName}
                by={`by: ${project.user.firstName} ${project.user.lastName}`}
                tags={project.tags}
                description={project.projectDescription}
                amount={project.totalDonationAmount}
                createdAt={project.createdAt}
                count={project.totalDonationCount}
              />
            </div>
          );
        })}
    </>
  );
}
