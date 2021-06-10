import TestRenderer from "react-test-renderer";

import Project from "./Project";

const project_data = {
  project: 2,
  description:
    "Substitute Crème fraîche with evaporated milk in ice-cream products",
  "start date": "2013-12-28T00:00:00+00:00",
  category: "Office supplies",
  responsible: "Clark Kent",
  "savings amount": 3722.41684,
  currency: "NULL",
  complexity: "Moderate",
};

// check snapshot
it("render correctly the component", () => {
  const Component = TestRenderer.create(
    <Project project={project_data} />
  ).toJSON();
  expect(Component).toMatchSnapshot();
});

// check props
it("render correctly the props", () => {
  const testRenderer = TestRenderer.create(<Project project={project_data} />);
  const testInstance = testRenderer.root;
  expect(testInstance.findByType(Project).props.project["project"]).toEqual(2);
  expect(testInstance.findByType(Project).props.project["description"]).toBe(
    "Substitute Crème fraîche with evaporated milk in ice-cream products"
  );
  expect(testInstance.findByType(Project).props.project["start date"]).toBe(
    "2013-12-28T00:00:00+00:00"
  );
  expect(testInstance.findByType(Project).props.project["category"]).toBe(
    "Office supplies"
  );
  expect(testInstance.findByType(Project).props.project["responsible"]).toBe(
    "Clark Kent"
  );
  expect(testInstance.findByType(Project).props.project["savings amount"]).toBe(
    3722.41684
  );
  expect(testInstance.findByType(Project).props.project["currency"]).toBe(
    "NULL"
  );
  expect(testInstance.findByType(Project).props.project["complexity"]).toBe(
    "Moderate"
  );
});

it("Test correctly on DOM element", () => {
  const testRenderer = TestRenderer.create(<Project project={project_data} />);
  const testInstance = testRenderer.root;
  const className = testInstance.findByProps({ "data-testid": "complexity" })
    .props.className;

  expect(className).toEqual("complexity moderate");
});

it("Test correctly on DOM element", () => {
  const testRenderer = TestRenderer.create(<Project project={project_data} />);
  const testInstance = testRenderer.root;
  const fieldValue = testInstance.findByProps({
    "data-testid": "currency",
  }).children;

  if (project_data.currency === "NULL"){
    expect(fieldValue).toEqual(['']);
  }
  else{
    expect(fieldValue).toEqual([project_data.currency]);
  }
});

it("Test correctly on DOM element", () => {
  const testRenderer = TestRenderer.create(<Project project={project_data} />);
  const testInstance = testRenderer.root;
  const fieldValue = testInstance.findByProps({
    "data-testid": "savings-amount",
  }).children;

  const decimalValue = fieldValue.toString().split(".")[1]
  
  expect(decimalValue.length).toBeLessThanOrEqual(2);
});
