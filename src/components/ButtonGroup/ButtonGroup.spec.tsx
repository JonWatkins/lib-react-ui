import "@testing-library/jest-dom";

import React from "react";
import { render, screen, queryByAttribute } from "@testing-library/react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button";

describe("ButtonGroup", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should have the btn-group class", () => {
    const dom = render(<ButtonGroup id="test-id" />);
    const group = getById(dom.container, "test-id");
    expect(group).toHaveClass("btn-group");
  });

  it("should be able to render child nodes", () => {
    render(
      <ButtonGroup>
        <Button text="Cancel" />
        <Button text="Submit" />
      </ButtonGroup>
    );
    const [button] = screen.getAllByRole("button");
    expect(button).toHaveTextContent("Cancel");
  });
});
