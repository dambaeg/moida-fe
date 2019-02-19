import React from "react";
import { mount } from "enzyme";

import Home from "./Home";

describe("Home", () => {
  it("renders without crash", () => {
    // When
    const wrapper = mount(<Home />);

    // Then
    expect(wrapper.find("div")).toExist();
  });
});
