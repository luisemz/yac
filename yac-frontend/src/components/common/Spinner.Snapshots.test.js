import React from "react";
import renderer from "react-test-renderer";
import Spinner from "./Spinner";

it("Renders Snipper component", () => {
  const tree = renderer.create(<Spinner></Spinner>).toJSON();
  expect(tree).toMatchSnapshot();
});
