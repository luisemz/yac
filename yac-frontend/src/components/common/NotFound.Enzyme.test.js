import React from "react";
import NotFound from "./NotFound";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

it("Renders NotFound component single", () => {
  const numLinks = shallow(<NotFound></NotFound>).find("Link").length;
  expect(numLinks).toBe(1);
});

it("Renders NotFound component with childs", () => {
  const numLinks = mount(
    <MemoryRouter>
      <NotFound></NotFound>
    </MemoryRouter>
  ).find("Link").length;
  expect(numLinks).toBe(1);
});
