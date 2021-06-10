import React from "react";
import { nanoid } from "nanoid";

import "./Projects.css";

import { IProjects } from "../Logic/IProject";
import Project from "./Project";
import ProjectHeaderTemplate from "./ProjectHeaderTemplate";

class Projects extends React.Component<IProjects, {}> {
  render() {
    return (
      <>
        <ProjectHeaderTemplate />
        {this.props.projects.map((project) => {
          let id = nanoid();

          return (
            <div className="project" key={id} id={id}>
              <Project project={project}></Project>
            </div>
          );
        })}
      </>
    );
  }
}

export default Projects;
