import React from "react";

import { IProjects } from "../Logic/IProject";
import Projects from "./Projects";
import Loading from "./Loading";

export interface IProjectBodyProps extends IProjects {}

class ProjectBody extends React.Component<IProjectBodyProps, {}> {
  render() {
    return (
      <div data-testid="project-body">
        {this.props.projects.length ? (
          <Projects {...this.props}/>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default ProjectBody;
