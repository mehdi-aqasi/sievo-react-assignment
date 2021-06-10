import { IProject } from "../Logic/IProject";
import TestRenderer from "react-test-renderer";
import ProjectHeaderTemplate from "./ProjectHeaderTemplate";

// // check snapshot
// it("render correctly the component", () => {
//   const Component = TestRenderer.create(<ProjectHeaderTemplate />).toJSON();
//   expect(Component).toMatchSnapshot();
// });

it("Test existance of project header correctly", () => {
  const testRenderer = TestRenderer.create(<ProjectHeaderTemplate />);
  const testInstance = testRenderer.root;
  const _projectHeader = testInstance.findByProps({"className":"project-header"});

  expect(_projectHeader).toBeTruthy();
  expect(_projectHeader.children.length).toBe(8);
});

it("Test existance of project cell collection correctly", () => {
  const testRenderer = TestRenderer.create(<ProjectHeaderTemplate />);
  const testInstance = testRenderer.root;
  const _projectCellCollection = testInstance.findAllByProps({"className":"project-cell"});

  expect(_projectCellCollection[0].children.toString()).toBe("#")
  expect(_projectCellCollection[1].children.toString()).toBe("Description")
  expect(_projectCellCollection[2].children.toString()).toBe("Start date")
  expect(_projectCellCollection[3].children.toString()).toBe("Category")
  expect(_projectCellCollection[4].children.toString()).toBe("Responsible")
  expect(_projectCellCollection[5].children.toString()).toBe("Savings amount")
  expect(_projectCellCollection[6].children.toString()).toBe("Currency")
  expect(_projectCellCollection[7].children.toString()).toBe("Complexity")
});
