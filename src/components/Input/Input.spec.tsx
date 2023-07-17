import "@testing-library/jest-dom";
import React from "react";
import {
  render,
  screen,
  waitFor,
  queryByAttribute,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to use a placeholder", () => {
    render(<Input placeholder="Enter your name" />);
    const input = screen.getByPlaceholderText("Enter your name");
    expect(input).toHaveClass('form-control');
    expect(input).toHaveAttribute(
      "placeholder",
      "Enter your name"
    );
  });

  it('should accept additional classes', () => {
    render(<Input className="p-5" placeholder="Enter your name" />)
    const input = screen.getByPlaceholderText("Enter your name");
    expect(input).toHaveClass('p-5');
  })

  it("renders the input component", async () => {
    render(<Input placeholder="Hello World" />);
    const input = screen.getByPlaceholderText(
      "Hello World"
    ) as HTMLInputElement;

    userEvent.type(input, "Hello World!");
    await waitFor(() => expect(input.value).toBe("Hello World!"));
  });

  it("should be able to render a label", async () => {
    render(<Input label="Enter Your Email" />);
    const { nodeName } = screen.getByText("Enter Your Email")
    expect(nodeName).toBe("LABEL");
  });

  it("should be able to render a checkbox", () => {
    const dom = render(
      <Input id="test-input" label="i argree" type="checkbox" />
    );
    const input = getById(dom.container, "test-input");
    expect(input).toHaveAttribute(
      "type",
      "checkbox"
    );
  });

  it("should be able to render a checkbox", () => {
    const dom = render(<Input id="test-input" label="i agree" type="radio" />);
    const input = getById(dom.container, "test-input");
    expect(input).toHaveAttribute(
      "type",
      "radio"
    );
  });
});
