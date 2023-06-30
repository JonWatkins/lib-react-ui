import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";

import { Grid } from "./Grid";

describe("Grid", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to render a Grid", () => {
    const dom = render(<Grid id="test-grid" />);
    expect(getById(dom.container, "test-grid")).toHaveClass("grid");
  });
});
