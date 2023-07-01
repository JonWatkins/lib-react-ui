import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { Icon } from "./Icon";
import { iconList } from "./IconList";

describe("Icon", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to render an icon", () => {
    const dom = render(<Icon id="test-icon" />);
    expect(getById(dom.container, "test-icon")).toHaveClass("icon");
  });

  global.colors.forEach((color) => {
    it(`should be able to set the type of the button to ${color}`, () => {
      const dom = render(<Icon id="test-icon" type="archive" color={color} />);
      expect(getById(dom.container, "test-icon")).toHaveClass(`text-${color}`);
    });
  });

  global.sizes.forEach((size) => {
    it(`should be able to set the size of the button to ${size}`, () => {
      const dom = render(<Icon id="test-icon" type="archive" size={size} />);
      expect(getById(dom.container, "test-icon")).toHaveClass(`icon-${size}`);
    });
  });

  iconList.forEach((icon) => {
    it(`should be able to render a ${icon} icon`, () => {
      const dom = render(<Icon id="test-icon" type={icon} />);
      expect(getById(dom.container, "test-icon")).toHaveClass(`icon-${icon}`);
    });
  });
});
