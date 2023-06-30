import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { Icon } from "./Icon";

describe("Icon", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to render an icon", () => {
    const dom = render(<Icon id="test-icon" />);
    expect(getById(dom.container, "test-icon")).toHaveClass("icon");
  });

  global.icons.forEach((icon) => {
    it(`should be able to render a ${icon} icon`, () => {
      const dom = render(<Icon id="test-icon" type={icon} />);
      expect(getById(dom.container, "test-icon")).toHaveClass(`icon-${icon}`);
    });
  });
});
