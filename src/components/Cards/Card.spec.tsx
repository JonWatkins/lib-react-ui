import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from "./Card";

describe("Card", () => {
  const getById = queryByAttribute.bind(null, "id");

  describe("CardHeader", () => {
    it("should be able to render a card header", () => {
      const dom = render(<CardHeader id="test-card" />);
      const card = getById(dom.container, "test-card")
      expect(card).toHaveClass("card-header");
    });
  });

  describe("CardTitle", () => {
    it("should be able to render a card title", () => {
      const dom = render(<CardTitle id="test-card" />);
      const card = getById(dom.container, "test-card")
      expect(card).toHaveClass("card-title");
    });
  });

  describe("CardBody", () => {
    it("should be able to render a card body", () => {
      const dom = render(<CardBody id="test-card" />);
      const card = getById(dom.container, "test-card")
      expect(card).toHaveClass("card-body");
    });
  });

  describe("CardFooter", () => {
    it("should be able to render a card footer", () => {
      const dom = render(<CardFooter id="test-card" />);
      const card = getById(dom.container, "test-card")
      expect(card).toHaveClass("card-footer");
    });
  });

  it("should be able to render a card", () => {
    const dom = render(<Card id="test-card" />);
    const card = getById(dom.container, "test-card")
    expect(card).toHaveClass("card");
  });
});
