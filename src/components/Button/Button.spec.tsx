import "@testing-library/jest-dom";

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { ThemeColors } from "../../globals";

describe("Button", () => {
  it("Should be able to render with text", () => {
    render(<Button text="Hello World" />);
    expect(screen.getByRole("button")).toHaveTextContent("Hello World");
  });

  it("should be able to bind onClick handler", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });

  global.colors.forEach((color) => {
    it(`should be able to set the type of the button to ${color}`, () => {
      render(<Button color={color as ThemeColors} />);
      expect(screen.getByRole("button")).toHaveClass(`btn-${color}`);
    });
  });

  global.sizes.forEach((size) => {
    it(`should be able to set the size of the button to ${size}`, () => {
      render(<Button size={size} />);
      expect(screen.getByRole("button")).toHaveClass(`btn-${size}`);
    });
  });
});
