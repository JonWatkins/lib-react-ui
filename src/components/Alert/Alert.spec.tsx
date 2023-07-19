import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { Alert } from "./Alert";
import type { ThemeColors } from "../../globals";

describe("Alert", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("Should be able to render an alert", () => {
    const dom = render(<Alert id="test-alert" />);
    const alert = getById(dom.container, "test-alert");
    expect(alert).toHaveClass("alert");
    expect(alert).toHaveClass("alert-info");
  });

  it("should be able to render content", () => {
    const dom = render(<Alert id="test-alert">Hello World</Alert>);
    const alert = getById(dom.container, "test-alert");
    expect(alert).toHaveTextContent("Hello World");
  });

  global.colors.forEach((color) => {
    it(`should be able to set the type of the alert to ${color}`, () => {
      const dom = render(<Alert id="test-alert" type={color as ThemeColors} />);
      const alert = getById(dom.container, "test-alert");
      expect(alert).toHaveClass(`alert-${color}`);
    });
  });
});
