import React from "react";
import "./ProjectHeader.css"
import SearchProject, { ISearchProjectProps } from "./SearchProject";
import SortProject, { ISortProjectsProps } from "./SortProjects";

export interface IProjectHeaderProps extends ISearchProjectProps, ISortProjectsProps {}

class ProjectHeader extends React.Component<IProjectHeaderProps, {}> {
  render() {
    return (
      <div className="header">
        <SearchProject
          onChangeDescriptionValue={this.props.onChangeDescriptionValue}
          description={this.props.description}
        />
        <SortProject
          onSortAscChange={this.props.onSortAscChange}
          onSortDescChange={this.props.onSortDescChange}
        />
      </div>
    );
  }
}

export default ProjectHeader;
