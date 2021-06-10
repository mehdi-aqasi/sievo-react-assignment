import { IProject } from "../Logic/IProject";
import React, { ChangeEvent } from "react";

import TestRenderer from "react-test-renderer";
import ProjectHeader from "./ProjectHeader";
import SearchProject from "./SearchProject";
import SortProjects from "./SortProjects";
// check snapshot

it("render correctly the component", () => {
  const Component = TestRenderer.create(
    <ProjectHeader
      onChangeDescriptionValue={(event) => {}}
      onSortAscChange={() => {}}
      onSortDescChange={() => {}}
      description=""
    />
  ).toJSON();

  expect(Component).toMatchSnapshot();
});

it("Test existance of project search component", () => {
  const testRenderer = TestRenderer.create(
    <ProjectHeader
      onChangeDescriptionValue={(event) => {}}
      onSortAscChange={() => {}}
      onSortDescChange={() => {}}
      description=""
    />
  );
  const testInstance = testRenderer.root;
  const _component = testInstance.findByType(SearchProject);

  expect(_component).toBeTruthy();
  expect(
    (_component.props as Object).hasOwnProperty("onChangeDescriptionValue")
  ).toBeTruthy;
  expect((_component.props as Object).hasOwnProperty("description")).toBeTruthy;
});

it("Test existance of project sort component", () => {
  const testRenderer = TestRenderer.create(
    <ProjectHeader
      onChangeDescriptionValue={(event) => {}}
      onSortAscChange={() => {}}
      onSortDescChange={() => {}}
      description=""
    />
  );
  const testInstance = testRenderer.root;
  const _component = testInstance.findByType(SortProjects);

  expect(_component).toBeTruthy();

  expect((_component.props as Object).hasOwnProperty("onSortAscChange"))
    .toBeTruthy;
  expect((_component.props as Object).hasOwnProperty("onSortDescChange"))
    .toBeTruthy;
});
