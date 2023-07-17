import "@testing-library/jest-dom";

import React from "react";
import {
  render,
  screen,
  queryByAttribute,
  waitFor,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { Select } from "./Select";
import type { SelectOption } from "./Select.types";

describe("Select", () => {
  const getById = queryByAttribute.bind(null, "id");
  const getByClassName = queryByAttribute.bind(null, "class");

  const options: SelectOption[] = [
    { label: "Eat", value: "eat" },
    { label: "Sleep", value: "sleep" },
    { label: "Code", value: "code" },
  ];

  it("should be able to render a Select", () => {
    const dom = render(<Select id="test-select" />);
    const select = getById(dom.container, "test-select");
    expect(select).toHaveClass(
      "select-container"
    );
  });

  it("should be able to render a Select with options", () => {
    const dom = render(<Select id="test-select" options={options} />);
    const select = getById(dom.container, "test-select");
    expect(select).toHaveClass(
      "select-container"
    );
  });

  it("should be able to render a multi Select with options", () => {
    const dom = render(<Select id="test-select" isMulti options={options} />);
    const select = getById(dom.container, "test-select");
    expect(select).toHaveClass(
      "select-container"
    );
  });

  it("should be able to open and close the select", async () => {
    const dom = render(
      <Select id="test-select" options={options} placeholder="choose" />
    );
    const trigger = screen.getByText("choose");
    const select = getById(dom.container, 'test-select');
    await userEvent.click(trigger);
    expect(select).toHaveClass('is-open');
    await userEvent.click(dom.container);
    expect(select).not.toHaveClass('is-open');
  });

  it("should be able to  select an option", async () => {
    render(<Select id="test-select" options={options} placeholder="choose" />);
    const trigger = screen.getByText("choose");
    await userEvent.click(trigger);

    const option = screen.getByText("Sleep");
    await userEvent.click(option);
  });

  it("should be able to highlight a selected an option", async () => {
    render(<Select id="test-select" options={options} placeholder="choose" />);
    const trigger = screen.getByText("choose");
    await userEvent.click(trigger);

    const option = screen.getByText("Sleep");
    await userEvent.click(option);

    // should have highlighted option
    await userEvent.click(trigger);
  });

  it("should be able to  select an option with isMulti", async () => {
    render(
      <Select id="test-select" options={options} placeholder="choose" isMulti />
    );
    const trigger = screen.getByText("choose");
    await userEvent.click(trigger);

    const option = screen.getByText("Sleep");
    await userEvent.click(option);
  });

  it("should remove a selected option if cliked again when using isMulti", async () => {
    render(
      <Select id="test-select" options={options} placeholder="choose" isMulti />
    );
    const trigger = screen.getByText("choose");
    let option;

    await userEvent.click(trigger);

    option = screen.getByText("Sleep");
    await userEvent.click(option);

    option = screen.getAllByText("Sleep")[1];
    await userEvent.click(option);
  });

  it("should be able remove to a selected option when using isMulti", async () => {
    const dom = render(
      <Select id="test-select" options={options} placeholder="choose" isMulti />
    );
    const trigger = screen.getByText("choose");
    await userEvent.click(trigger);

    const option = screen.getByText("Sleep");
    await userEvent.click(option);

    const tag = getByClassName(dom.container, "select-tag-close");
    await userEvent.click(tag);
  });

  it("should be able to render a searchable Select with options", async () => {
    const dom = render(
      <Select
        id="test-select"
        isSearchable
        placeholder="choose"
        options={options}
      />
    );
    const trigger = screen.getByText("choose");
    const select = getById(dom.container, 'test-select');
    await userEvent.click(trigger);
    expect(select).toHaveClass('is-searchable')
    expect(select).toHaveClass('is-open');
  });

  it("should be able to filter options", async () => {
    render(
      <Select
        id="test-select"
        isSearchable
        placeholder="choose"
        options={options}
      />
    );
    const trigger = screen.getByText("choose");
    await userEvent.click(trigger);

    const search: HTMLInputElement = screen.getByPlaceholderText("Search");
    await userEvent.type(search, "sleep");
    await waitFor(() => expect(search.value).toBe("sleep"));
  });
});
