import { IProject } from "../Logic/IProject";
import TestRenderer from "react-test-renderer";
import Loading from "./Loading";

// check snapshot
it("render correctly the component", () => {
  const Component = TestRenderer.create(<Loading />).toJSON();
  expect(Component).toMatchSnapshot();
});

it("Test existance of component and content", () => {
  const testRenderer = TestRenderer.create(<Loading />);
  const testInstance = testRenderer.root;
  expect(testInstance).toBeTruthy();
  expect(testInstance.findByType("div").children.toString()).toBe("Loading...")
});

