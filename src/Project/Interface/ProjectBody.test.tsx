import TestRenderer, { ReactTestInstance } from "react-test-renderer";
import { IProject } from "../Logic/IProject";

import ProjectBody from "./ProjectBody";
import Loading from "./Loading";
import Projects from "./Projects";

let project_data: Array<IProject> = [
  {
    project: 2,
    description:
      "Substitute Crème fraîche with evaporated milk in ice-cream products",
    "start date": "2013-12-28T00:00:00+00:00",
    category: "Office supplies",
    responsible: "Clark Kent",
    "savings amount": 3722.41684,
    currency: "NULL",
    complexity: "Moderate",
  },
  {
    project: 1,
    description: "Decrease production related non-categorized side costs",
    "start date": "2013-06-14T00:00:00+00:00",
    category: "Dairy",
    responsible: "Daisy Milks",
    "savings amount": 5583.62526,
    currency: "USD",
    complexity: "Hazardous",
  },
];

// check snapshot
// it("render correctly the component", () => {
//   const Component = TestRenderer.create(
//     <ProjectBody projects={project_data} />
//   ).toJSON();
//   expect(Component).toMatchSnapshot();
// });

// check props
it("render correctly the child", () => {
  const testRenderer = TestRenderer.create(
    <ProjectBody projects={project_data} />
  );
  const testInstance = testRenderer.root;
  const projectBody = testInstance.findByProps({
    "data-testid": "project-body",
  });

  if (project_data.length > 0) {
    expect(projectBody.findByType(Projects)).toBeTruthy();
  } else {
    expect(projectBody.findByType(Loading)).toBeTruthy();
  }

});
