import "@testing-library/jest-dom";

import React from "react";
import { render, screen, queryByAttribute } from "@testing-library/react";
import { InputGroup } from "./InputGroup";
import { Input } from "../Input";
import { Button } from "../Button";

describe("InputGroup", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should have the input-group class", () => {
    const dom = render(<InputGroup id="test-id" />);
    expect(getById(dom.container, "test-id")).toHaveClass("input-group");
  });

  it("should be able to render child nodes", () => {
    render(
      <InputGroup>
        <Input />
        <Button text="Search" />
      </InputGroup>
    );

    expect(screen.getByRole("button")).toHaveTextContent("Search");
  });
});
