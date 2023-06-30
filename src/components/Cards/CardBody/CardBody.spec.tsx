import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";

import { CardBody } from "./CardBody";

describe("CardBody", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to render a card body", () => {
    const dom = render(<CardBody id="test-card" />);
    expect(getById(dom.container, "test-card")).toHaveClass("card-body");
  });
});
