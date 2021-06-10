import React, { ChangeEvent } from "react";
import "./SearchProject.css";

export interface ISearchProjectProps {
  description?: string;
  onChangeDescriptionValue?: ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => void;
}

class SearchProject extends React.Component<ISearchProjectProps, {}> {
  render() {
    return (
      <>
        <span className="search-body">
          <input
            data-testid="search-bar"
            className="description-search"
            placeholder="Search description ..."
            value={this.props.description || ""}
            onChange={this.props.onChangeDescriptionValue}
          ></input>
        </span>
      </>
    );
  }
}

export default SearchProject;
