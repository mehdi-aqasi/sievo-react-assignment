import { IProject } from "../Logic/IProject";
import TestRenderer from "react-test-renderer";
import SortProjects from "./SortProjects";

// check snapshot
it("render correctly the component", () => {
  const Component = TestRenderer.create(
    <SortProjects onSortAscChange={() => {}} onSortDescChange={() => {}} />
  ).toJSON();
  expect(Component).toMatchSnapshot();
});

it("Test existance of container correctly", () => {
  const testRenderer = TestRenderer.create(<SortProjects onSortAscChange={() => {}} onSortDescChange={() => {}} />);
  const testInstance = testRenderer.root;
  const componentContainer = testInstance.findByProps({
    className: "sort-body",
  });

  expect(componentContainer).toBeTruthy();
  expect(componentContainer.children.length).toBe(2);
});

it("Test existance of up button correctly", () => {
  const testRenderer = TestRenderer.create(<SortProjects onSortAscChange={() => {}} onSortDescChange={() => {}} />);
  const testInstance = testRenderer.root;
  const buttonCollection = testInstance.findAllByType("button");

  expect(buttonCollection.length).toBe(2);
  expect(buttonCollection[0].props.className).toBe("button-sort sort-up")
  expect(buttonCollection[1].props.className).toBe("button-sort sort-down")
});
