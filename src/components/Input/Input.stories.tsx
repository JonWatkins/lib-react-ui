import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Input",
  argTypes: {},
};

export const Default: Story = (args) => <Input id="test-input" {...args} />;

Default.args = {};

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
