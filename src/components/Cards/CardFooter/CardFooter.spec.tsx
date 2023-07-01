import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { CardFooter } from "./CardFooter";

describe("CardFooter", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to render a card footer", () => {
    const dom = render(<CardFooter id="test-card" />);
    expect(getById(dom.container, "test-card")).toHaveClass("card-footer");
  });
});
