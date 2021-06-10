import React from "react";
import dateFormat from "dateformat";

import "./Project.css";
import { IProject } from "../Logic/IProject";

class Project extends React.Component<{ project: IProject }, {}> {
  render() {
    const project = this.props.project;
    return (
      <div className="project-row">
        <div className="project-cell">
          <span className="project-label">#</span>
          <span className="project-cell-content"> {project.project}</span>
        </div>
        <div className="project-cell">
          <span className="project-label">Description</span>
          <span className="project-cell-content">{project.description}</span>
        </div>
        <div className="project-cell">
          <span className="project-label">Start date</span>
          <span className="project-cell-content">
            {dateFormat(project["start date"], "dd/mm/yyyy")}
          </span>
        </div>
        <div className="project-cell">
          <span className="project-label">Category</span>
          <span className="project-cell-content">{project.category}</span>
        </div>
        <div className="project-cell">
          <span className="project-label">Responsible</span>
          <span className="project-cell-content">{project.responsible}</span>
        </div>
        <div className="project-cell">
          <span className="project-label">Savings amount</span>
          <span className="project-cell-content" data-testid="savings-amount">
            {project["savings amount"].toFixed(2)}
          </span>
        </div>
        <div className="project-cell">
          <span className="project-label">Currency</span>
          <span className="project-cell-content" data-testid="currency">
            {project.currency !== "NULL" ? project.currency : ""}
          </span>
        </div>
        <div className="project-cell">
          <span className="project-label">Complexity</span>
          <span className="project-cell-content">
            <div
              className="complexity-bar"
              title={project.complexity.toString()}
            >
              <div
                data-testid="complexity"
                className={`complexity ${project.complexity
                  .toString()
                  .toLowerCase()}`}
              ></div>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default Project;
