import React, { useState } from "react";
import { Select } from "./Select";
import { Grid, GridRow, GridColumn } from "../Grid";
import type { Meta, StoryObj } from "@storybook/react";
import type { SelectOption } from "./Select.types";

type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Select",
  argTypes: {},
};

const options: SelectOption[] = [
  { label: "Eat", value: "eat" },
  { label: "Sleep", value: "sleep" },
  { label: "Code", value: "code" },
  { label: "Walk", value: "walk" },
  { label: "Game", value: "Game" },
];

export const Primary: Story = (args) => {
  return (
    <div className="pb-20">
      <Select className="mb-20" {...args} />;
    </div>
  );
};

Primary.args = {
  placeholder: "Select an option",
  options: options,
};

export const MultipleSelectBoxes: Story = (args) => {
  return (
    <Grid className="mb-20 pb-20" fluid>
      <GridRow>
        <GridColumn colWidth="6">
          <Select {...args} />;
        </GridColumn>
        <GridColumn colWidth="6">
          <Select {...args} />;
        </GridColumn>
      </GridRow>
    </Grid>
  );
};

MultipleSelectBoxes.args = {
  placeholder: "Select an option",
  options: options,
};

export const SearchableSelect: Story = (args) => {
  return (
    <div className="pb-20">
      <Select className="mb-20" {...args} />;
    </div>
  );
};

SearchableSelect.args = {
  placeholder: "Select an option",
  options: options,
  isSearchable: true,
};

export const MultipleSelect: Story = (args) => {
  return (
    <div className="pb-20">
      <Select className="mb-20" {...args} />;
    </div>
  );
};

MultipleSelect.args = {
  placeholder: "Select an option",
  options: options,
  isMulti: true,
};

export const SearchableMultipleSelect: Story = (args) => {
  return (
    <div className="pb-20">
      <Select className="mb-20" {...args} />;
    </div>
  );
};

SearchableMultipleSelect.args = {
  placeholder: "Select an option",
  options: options,
  isSearchable: true,
  isMulti: true,
};

export const SelectWithHooks: Story = (args) => {
  const [selectValue, setSelectValue] = useState(null);

  const onChangeHandler = (newValue) => {
    setSelectValue(newValue);
  };

  return (
    <div className="pb-20">
      <Select {...args} onChange={onChangeHandler} />
      <code>
        Selected Value: {selectValue && (selectValue as SelectOption).value}
      </code>
    </div>
  );
};

SelectWithHooks.args = {
  className: "mb-20",
  placeholder: "Select an option",
  options: options,
  isSearchable: true,
};

export const MultipleSelectWithHooks: Story = (args) => {
  const [selectValue, setSelectValue] = useState([]);

  const onChangeHandler = (newValue) => {
    setSelectValue(newValue);
  };

  return (
    <div className="pb-20">
      <Select {...args} onChange={onChangeHandler} />
      <code>
        Selected Value: {selectValue.map(({ value }) => value).join(",")}
      </code>
    </div>
  );
};

MultipleSelectWithHooks.args = {
  className: "mb-20",
  placeholder: "Select an option",
  options: options,
  isSearchable: true,
  isMulti: true,
};

export default meta;
