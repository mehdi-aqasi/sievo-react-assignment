import React, { ChangeEvent } from "react";

import ProjectHeader, { IProjectHeaderProps } from "./ProjectHeader";
import ProjectBody, { IProjectBodyProps } from "./ProjectBody";
import { ProjectLogic } from "../Logic/LProject";
import { ESortType } from "../Logic/IProject";

interface IProjectContainerState
  extends IProjectHeaderProps,
    IProjectBodyProps {}

class ProjectContainer extends React.Component<{}, IProjectContainerState> {
  constructor(props: {}) {
    super(props);
    this.state = { ...this.state, projects: [] };
    this.onSortAscChange = this.onSortAscChange.bind(this);
    this.onSortDescChange = this.onSortDescChange.bind(this);
    this.onChangeDescriptionValue = this.onChangeDescriptionValue.bind(this);
  }

  async componentDidMount() {
    let projects = await ProjectLogic().getAllProject();

    if (projects) {
      this.setState({ ...this.state, projects });
    }
  }

  private async onChangeDescriptionValue(event: ChangeEvent<HTMLInputElement>) {
    this.setState({...this.state,description: event.target.value});
    let _filteredProjects = await ProjectLogic().getProjectSearch(
      event.target.value
    );
    this.setState({
      ...this.state,
      projects: _filteredProjects,
    });
  }

  private async onSortAscChange() {
    let _projects = [...this.state.projects];

    if (_projects) {
      let _sortedProjects = await ProjectLogic().sortProject(
        _projects,
        ESortType.newestToOldest
      );
      this.setState({ ...this.state, projects: _sortedProjects });
    }
  }

  private async onSortDescChange() {
    let _projects = [...this.state.projects];
    if (_projects) {
      let _sortedProjects = await ProjectLogic().sortProject(
        _projects,
        ESortType.oldestToNewest
      );
      this.setState({ ...this.state, projects: _sortedProjects });
    }
  }

  render() {
    return (
      <>
        <ProjectHeader
          onChangeDescriptionValue={(event) =>
            this.onChangeDescriptionValue(event)
          }
          onSortAscChange={this.onSortAscChange}
          onSortDescChange={this.onSortDescChange}
          description={this.state.description}
        />
        <ProjectBody projects={this.state.projects} />
      </>
    );
  }
}

export default ProjectContainer;
