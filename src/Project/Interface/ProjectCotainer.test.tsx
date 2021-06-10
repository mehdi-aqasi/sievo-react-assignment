import { IProject } from "../Logic/IProject";
import TestRenderer from "react-test-renderer";
import ProjectContainer from "./ProjectCotainer";
import ProjectHeader from "./ProjectHeader";
import ProjectBody from "./ProjectBody";

// check snapshot
it("render correctly the component", () => {
  const Component = TestRenderer.create(<ProjectContainer />).toJSON();
  expect(Component).toMatchSnapshot();
});

it("Test existance of project header correctly", () => {
  const testRenderer = TestRenderer.create(<ProjectContainer />);
  const testInstance = testRenderer.root;
  const _projectHeader = testInstance.findByType(ProjectHeader);

  expect(_projectHeader).toBeTruthy();
  expect(
    (_projectHeader.props as Object).hasOwnProperty("onChangeDescriptionValue")
  ).toBeTruthy;
  expect((_projectHeader.props as Object).hasOwnProperty("onSortAscChange"))
    .toBeTruthy;
  expect((_projectHeader.props as Object).hasOwnProperty("onSortDescChange"))
    .toBeTruthy;
  expect((_projectHeader.props as Object).hasOwnProperty("description"))
    .toBeTruthy;
});

it("Test existance of project body correctly", () => {
  const testRenderer = TestRenderer.create(<ProjectContainer />);
  const testInstance = testRenderer.root;
  const _projectBody = testInstance.findByType(ProjectBody);

  expect(_projectBody).toBeTruthy();
  expect((_projectBody.props as Object).hasOwnProperty("projects")).toBeTruthy;
});
