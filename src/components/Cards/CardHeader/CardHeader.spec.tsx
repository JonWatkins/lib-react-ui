import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { CardHeader } from "./CardHeader";

describe("CardHeader", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to render a card header", () => {
    const dom = render(<CardHeader id="test-card" />);
    expect(getById(dom.container, "test-card")).toHaveClass("card-header");
  });
});
