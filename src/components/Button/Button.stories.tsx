import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {},
};

export const Default: Story = (args) => (
  <Button className="mt-5" id="test-button" {...args} />
);

Default.args = {
  disabled: false,
  text: "Hello World",
  color: "dark",
};

export default meta;
