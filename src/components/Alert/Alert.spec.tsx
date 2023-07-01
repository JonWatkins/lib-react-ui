import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { Alert } from "./Alert";
import type { ThemeColors } from "../../globals";

describe("Alert", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("Should be able to render an alert", () => {
    const dom = render(<Alert id="test-alert" />);
    expect(getById(dom.container, "test-alert")).toHaveClass("alert");
  });

  it("should be able to render content", () => {
    const dom = render(<Alert id="test-alert">Hello World</Alert>);
    expect(getById(dom.container, "test-alert")).toHaveTextContent(
      "Hello World"
    );
  });

  global.colors.forEach((color) => {
    it(`should be able to set the type of the alert to ${color}`, () => {
      const dom = render(<Alert id="test-alert" type={color as ThemeColors} />);
      expect(getById(dom.container, "test-alert")).toHaveClass(
        `alert-${color}`
      );
    });
  });
});
