import React from "react";
import "./SortProjects.css"

export interface ISortProjectsProps {
  onSortAscChange: () => void;
  onSortDescChange: () => void;
}

class SortProjects extends React.Component<ISortProjectsProps, {}> {
  render() {
    return (
      <>
        <span className="sort-body">
          <button onClick={this.props.onSortAscChange} className="button-sort sort-up"></button>
          <button onClick={this.props.onSortDescChange} className="button-sort sort-down"></button>
        </span>
      </>
    );
  }
}

export default SortProjects;
