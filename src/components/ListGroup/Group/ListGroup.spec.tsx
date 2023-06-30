import "@testing-library/jest-dom";

import React from "react";
import { render, screen, queryByAttribute } from "@testing-library/react";
import { ListGroup } from "./ListGroup";
import { ListGroupItem } from "../Item/ListGroupItem";
import { Button } from "../../Button";

describe("ListGroup", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should have the list-group class", () => {
    const dom = render(<ListGroup id="test-id" />);
    expect(getById(dom.container, "test-id")).toHaveClass("list-group");
  });

  it("should be able to render child nodes", () => {
    const dom = render(
      <ListGroup>
        <ListGroupItem id="item">Test</ListGroupItem>
      </ListGroup>
    );

    expect(getById(dom.container, "item")).toHaveTextContent("Test");
  });

  it("is able to render multiple child nodes", () => {
    const dom = render(
      <ListGroup>
        <ListGroupItem id="item1">Test</ListGroupItem>
        <ListGroupItem id="item2">
          <a id="link">testing</a>
          <em>!</em>
        </ListGroupItem>
        <ListGroupItem id="item3">
          <Button text="Click Me" />
        </ListGroupItem>
      </ListGroup>
    );

    expect(getById(dom.container, "item1")).toHaveTextContent("Test");
    expect(getById(dom.container, "link")).toHaveTextContent("testing");
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");
  });
});
