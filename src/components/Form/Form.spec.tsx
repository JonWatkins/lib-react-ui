import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { Form } from "./Form";

describe("Form", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to render a form", () => {
    const dom = render(<Form id="test-form" />);
    const form = getById(dom.container, "test-form");
    expect(form).toHaveClass("form");
  });
});
