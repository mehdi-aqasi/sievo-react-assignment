import React, { ChangeEvent, HtmlHTMLAttributes } from "react";
import { render, fireEvent, screen, getByTestId } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import TestRenderer from "react-test-renderer";

import SearchProject from "./SearchProject";
import { isElement } from "react-dom/test-utils";

// check snapshot
it("render correctly the component", () => {
  const Component = TestRenderer.create(<SearchProject />).toJSON();
  expect(Component).toMatchSnapshot();
});

// check props
it("render correctly the props", () => {
  const testRenderer = TestRenderer.create(
    <SearchProject description="bar" />
  );
  const testInstance = testRenderer.root;
  expect(testInstance.findByType(SearchProject).props.description).toBe("bar");
  // expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);
});

it("Test capture changes on search description", (done) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    expect(event.target.value).toEqual("milk");
    done();
  }
  const { getByPlaceholderText } = render(
    <SearchProject onChangeDescriptionValue={handleChange} description="" />
  );
  const node = getByPlaceholderText("Search description ...");
  fireEvent.change(node, { target: { value: "milk" } });
});
