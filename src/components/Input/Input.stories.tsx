import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Input",
  tags: ["autodocs"],
  argTypes: {},
};

export const Text: Story = (args) => <Input id="test-input" {...args} />;

Text.args = {
  type: "text",
};

export const Email: Story = (args) => <Input id="test-input" {...args} />;

Email.args = {
  type: "email",
};

export const Date: Story = (args) => <Input id="test-input" {...args} />;

Date.args = {
  type: "date",
};

export const Number: Story = (args) => <Input id="test-input" {...args} />;

Number.args = {
  type: "number",
};

export const Checkbox: Story = (args) => <Input id="test-input" {...args} />;

Checkbox.args = {
  type: "checkbox",
  label: "Some checkbox"
};

export const Label: Story = (args) => <Input id="test-input" {...args} />;

Label.args = {
  label: "Enter your name",
};

export const Placeholder: Story = (args) => <Input id="test-input" {...args} />;

Placeholder.args = {
  placeholder: "Enter your name",
};

export const Disabled: Story = (args) => <Input id="test-input" {...args} />;

Disabled.args = {
  disabled: true,
};

export default meta;
