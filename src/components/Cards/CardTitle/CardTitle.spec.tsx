import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { CardTitle } from "./CardTitle";

describe("CardTitle", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to render a card title", () => {
    const dom = render(<CardTitle id="test-card" />);
    expect(getById(dom.container, "test-card")).toHaveClass("card-title");
  });
});
