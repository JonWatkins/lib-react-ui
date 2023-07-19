import "@testing-library/jest-dom";

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import type { ThemeColors } from "../../globals";

describe("Button", () => {
  it("should have default classes", () => {
    render(<Button text="Hello World" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("text-small");
    expect(button).toHaveClass("bg-primary");
    expect(button).toHaveAttribute("type", "button");
  });

  it("Should be able to render with text", () => {
    render(<Button text="Hello World" />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Hello World");
  });

  it("should be able to bind onClick handler", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("should accept extra classes", () => {
    render(<Button className="pt-5" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("pt-5");
  });

  global.colors.forEach((color) => {
    it(`should be able to set the type of the button to ${color}`, () => {
      render(<Button color={color as ThemeColors} />);
      const button = screen.getByRole("button");
      expect(button).toHaveClass(`bg-${color}`);
    });
  });

  global.sizes.forEach((size) => {
    it(`should be able to set the size of the button to ${size}`, () => {
      render(<Button size={size} />);
      const button = screen.getByRole("button");
      expect(button).toHaveClass(`text-${size}`);
    });
  });
});
