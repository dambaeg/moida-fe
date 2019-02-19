import React from "react";
import { mount } from "enzyme";

import { Header } from "organisms";
import { HoverLinkButton } from "atoms";

describe("Header", () => {
  it("renders without crash", () => {
    // When
    const wrapper = mount(<Header />);

    // Then
    expect(wrapper.find(HoverLinkButton).length).toBe(2);
  });
});
