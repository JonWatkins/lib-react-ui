import "@testing-library/jest-dom";

import React from "react";
import { render, screen, queryByAttribute } from "@testing-library/react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button";

describe("ButtonGroup", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should have the btn-group class", () => {
    const dom = render(<ButtonGroup id="test-id" />);
    expect(getById(dom.container, "test-id")).toHaveClass("btn-group");
  });

  it("should be able to render child nodes", () => {
    render(
      <ButtonGroup>
        <Button text="Cancel" />
        <Button text="Submit" />
      </ButtonGroup>
    );

    expect(screen.getAllByRole("button")[0]).toHaveTextContent("Cancel");
  });
});
