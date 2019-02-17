import React from "react";
import { mount } from "enzyme";

import { MemoryRouter } from "react-router-dom";
import App from "App";
import { Home } from "pages";

describe("App", () => {
  it("renders without crashing", () => {
    // When
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // Then
    expect(wrapper.find(Home)).toExist();
  });
});
