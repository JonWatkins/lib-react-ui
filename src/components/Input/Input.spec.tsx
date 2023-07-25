import "@testing-library/jest-dom";
import React from "react";
import { render, screen, queryByAttribute } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("should be able to use a placeholder", () => {
    render(<Input placeholder="Enter your name" />);
    const input = screen.getByPlaceholderText("Enter your name");
    expect(input).toHaveClass("form-control");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("placeholder", "Enter your name");
  });

  it("should accept additional classes", () => {
    render(<Input className="p-5" placeholder="Enter your name" />);
    const input = screen.getByPlaceholderText("Enter your name");
    expect(input).toHaveClass("p-5");
  });

  it("renders the input component", async () => {
    render(<Input placeholder="Hello World" />);

    const input = screen.getByPlaceholderText(
      "Hello World"
    ) as HTMLInputElement;

    await userEvent.type(input, "Hello World!");

    expect(input.value).toBe("Hello World!");
  });

  it("should be able to render a label", async () => {
    const dom = render(<Input id="test-input" label="Enter Your Email" />);
    const { nodeName, textContent } = dom.container.querySelector(
      "label"
    ) as HTMLElement;
    const field = dom.container.querySelector(".form-field") as HTMLElement;
    expect(nodeName).toBe("LABEL");
    expect(textContent).toBe("Enter Your Email");
    expect(field.nodeName).toBe("DIV");
  });

  it("should not render a label if not given", () => {
    const dom = render(<Input id="test-input" />);
    const label = dom.container.querySelector("label");
    expect(label).toEqual(null);
  });

  it("should not render a the field if label is not given", () => {
    const dom = render(<Input id="test-input" />);
    const label = dom.container.querySelector("label");
    const field = dom.container.querySelector(".form-field");
    expect(label).toEqual(null);
    expect(field).toEqual(null);
  });

  it("should not render a the field if label length is > than 0", () => {
    const dom = render(<Input id="test-input" label="" />);
    const label = dom.container.querySelector("label");
    const field = dom.container.querySelector(".form-field");
    expect(label).toEqual(null);
    expect(field).toEqual(null);
  });

  it("should be able to render a checkbox", () => {
    const dom = render(
      <Input id="test-input" label="i argree" type="checkbox" />
    );
    const input = getById(dom.container, "test-input");
    expect(input).toHaveAttribute("type", "checkbox");
    expect(input.parentNode).toHaveClass("checkbox-label");
  });

  it("should be able to render a checkbox", () => {
    const dom = render(<Input id="test-input" label="i agree" type="radio" />);
    const input = getById(dom.container, "test-input");
    expect(input).toHaveAttribute("type", "radio");
    expect(input.parentNode).toHaveClass("checkbox-label");
  });
});
