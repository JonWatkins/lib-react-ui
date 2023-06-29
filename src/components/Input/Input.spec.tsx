import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  it("should be able to use a placeholder", () => {
    render(<Input placeholder="Enter your name" />);
    expect(screen.getByPlaceholderText("Enter your name")).toHaveAttribute(
      "placeholder",
      "Enter your name"
    );
  });

  it("renders the input component", async () => {
    render(<Input placeholder="Hello World" />);
    const input = screen.getByPlaceholderText(
      "Hello World"
    ) as HTMLInputElement;
    userEvent.type(input, "Hello World!");
    await waitFor(() => expect(input.value).toBe("Hello World!"));
  });
});
