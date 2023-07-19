import "@testing-library/jest-dom";

import React from "react";
import { render, screen, queryByAttribute } from "@testing-library/react";
import { ListGroup, ListGroupItem } from "./ListGroup";
import { Button } from "../Button";

describe("ListGroup", () => {
  const getById = queryByAttribute.bind(null, "id");

  describe("ListGroup", () => {
    it("should have the list-group-item class", () => {
      const dom = render(<ListGroupItem id="item">Test</ListGroupItem>);
      const item = getById(dom.container, "item");
      expect(item).toHaveClass("list-group-item");
    });
  });

  it("should have the list-group class", () => {
    const dom = render(<ListGroup id="test-id" />);
    const group = getById(dom.container, "test-id");
    expect(group).toHaveClass("list-group");
  });

  it("should be able to render child nodes", () => {
    const dom = render(
      <ListGroup>
        <ListGroupItem id="item">Test</ListGroupItem>
      </ListGroup>
    );
    const item = getById(dom.container, "item");
    expect(item).toHaveTextContent("Test");
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

    const item = getById(dom.container, "item1");
    const link = getById(dom.container, "link");
    const button = screen.getByRole("button");

    expect(item).toHaveTextContent("Test");
    expect(link).toHaveTextContent("testing");
    expect(button).toHaveTextContent("Click Me");
  });
});
