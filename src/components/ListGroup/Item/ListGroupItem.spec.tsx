import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { ListGroupItem } from "./ListGroupItem";

describe("ListGroup", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should have the list-group-item class", () => {
    const dom = render(<ListGroupItem id="item">Test</ListGroupItem>);
    expect(getById(dom.container, "item")).toHaveClass("list-group-item");
  });
});
