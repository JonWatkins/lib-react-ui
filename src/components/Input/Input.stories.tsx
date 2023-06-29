import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Input",
  argTypes: {},
};

export const Primary: Story = (args) => <Input id="test-input" {...args} />;

Primary.args = {
  label: "Primary",
};

export default meta;
