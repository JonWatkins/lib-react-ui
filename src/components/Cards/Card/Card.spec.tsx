import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";

import { Card } from "./Card";

describe("Card", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to render a card", () => {
    const dom = render(<Card id="test-card" />);
    expect(getById(dom.container, "test-card")).toHaveClass("card");
  });
});
