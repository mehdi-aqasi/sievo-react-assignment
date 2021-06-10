import React from "react";
import "./ProjectHeaderTemplate.css";

class ProjectHeaderTemplate extends React.PureComponent<{}, {}> {
    render() {
      return (
        <div className="project-header">
          <div className="project-cell">#</div>
          <div className="project-cell">Description</div>
          <div className="project-cell">Start date</div>
          <div className="project-cell">Category</div>
          <div className="project-cell">Responsible</div>
          <div className="project-cell">Savings amount</div>
          <div className="project-cell">Currency</div>
          <div className="project-cell">Complexity</div>
        </div>
          
      );
    }
  } 
  export default ProjectHeaderTemplate;