import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { Badge } from "./Badge";
import type { ThemeColors } from "../../globals";

describe("Badge", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("Should be able to render an Badge", () => {
    const dom = render(<Badge id="test-badge" />);
    const badge = getById(dom.container, "test-badge");
    expect(badge).toHaveClass("badge");
    expect(badge).toHaveClass("badge-info");
    expect(badge).toHaveClass("badge-medium");
  });

  it("should be able to render content", () => {
    const dom = render(<Badge id="test-badge">0</Badge>);
    const badge = getById(dom.container, "test-badge");
    expect(badge).toHaveTextContent("0");
  });

  global.colors.forEach((color) => {
    it(`should be able to set the type of the Badge to ${color}`, () => {
      const dom = render(
        <Badge id="test-badge" color={color as ThemeColors} />
      );
      const badge = getById(dom.container, "test-badge");
      expect(badge).toHaveClass(`badge-${color}`);
    });
  });

  global.sizes.forEach((size) => {
    it(`should be able to set the size of the Badge to ${size}`, () => {
      const dom = render(<Badge id="test-badge" color={size} />);
      const badge = getById(dom.container, "test-badge");
      expect(badge).toHaveClass(`badge-${size}`);
    });
  });
});
