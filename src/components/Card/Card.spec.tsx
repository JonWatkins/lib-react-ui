import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";

import { Card, CardHeader, CardTitle, CardBody, CardFooter } from "./Card";

describe("Card", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to render a card", () => {
    const dom = render(<Card id="test-card" />);
    expect(getById(dom.container, "test-card")).toHaveClass("card");
  });

  it("should be able to render a card header", () => {
    const dom = render(<CardHeader id="test-card" />);
    expect(getById(dom.container, "test-card")).toHaveClass("card-header");
  });

  it("should be able to render a card title", () => {
    const dom = render(<CardTitle id="test-card" />);
    expect(getById(dom.container, "test-card")).toHaveClass("card-title");
  });

  it("should be able to render a card body", () => {
    const dom = render(<CardBody id="test-card" />);
    expect(getById(dom.container, "test-card")).toHaveClass("card-body");
  });

  it("should be able to render a card footer", () => {
    const dom = render(<CardFooter id="test-card" />);
    expect(getById(dom.container, "test-card")).toHaveClass("card-footer");
  });
});
