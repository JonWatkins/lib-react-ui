import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";

import { GridRow } from "./GridRow";

describe("GridRow", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to render a GridRow", () => {
    const dom = render(<GridRow id="test-grid" />);
    expect(getById(dom.container, "test-grid")).toHaveClass("grid-row");
  });
});
