import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { Icon } from "./Icon";
import { iconList } from "./IconList";

describe("Icon", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to render an icon", () => {
    const dom = render(<Icon id="test-icon" />);
    const icon = getById(dom.container, "test-icon");
    expect(icon).toHaveClass("icon");
    expect(icon).toHaveClass("icon-md");
    expect(icon).toHaveClass("text-dark");
  });

  global.colors.forEach((color) => {
    it(`should be able to set the type of the button to ${color}`, () => {
      const dom = render(<Icon id="test-icon" type="archive" color={color} />);
      const icon = getById(dom.container, "test-icon");
      expect(icon).toHaveClass(`text-${color}`);
    });
  });

  global.sizes.forEach((size) => {
    it(`should be able to set the size of the button to ${size}`, () => {
      const dom = render(<Icon id="test-icon" type="archive" size={size} />);
      const icon = getById(dom.container, "test-icon");
      expect(icon).toHaveClass(`icon-${size}`);
    });
  });

  iconList.forEach((type) => {
    it(`should be able to render a ${type} icon`, () => {
      const dom = render(<Icon id="test-icon" type={type} />);
      const icon = getById(dom.container, "test-icon");
      expect(icon).toHaveClass(`icon-${type}`);
    });
  });
});
