import React from "react";
import { Input } from "./Input";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components/Input",
  argTypes: {},
};

export const Text: Story = (args) => <Input id="test-input" {...args} />;

Text.args = {
  type: "text",
  label: "Some Text Input",
};

export const Email: Story = (args) => <Input id="test-input" {...args} />;

Email.args = {
  type: "email",
  label: "Some Email Input",
};

export const Date: Story = (args) => <Input id="test-input" {...args} />;

Date.args = {
  type: "date",
  label: "Some Date Input",
};

export const Number: Story = (args) => <Input id="test-input" {...args} />;

Number.args = {
  type: "number",
  label: "Some Number Input",
};

export const Checkbox: Story = (args) => <Input id="test-input" {...args} />;

Checkbox.args = {
  type: "checkbox",
  label: "Some checkbox",
};

export const Placeholder: Story = (args) => <Input id="test-input" {...args} />;

Placeholder.args = {
  placeholder: "Enter your name",
  label: "Name",
};

export const Disabled: Story = (args) => <Input id="test-input" {...args} />;

Disabled.args = {
  label: "Disabled Input",
  disabled: true,
};

export default meta;
