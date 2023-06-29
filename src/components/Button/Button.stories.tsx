import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {},
};

export const Primary: Story = (args) => <Button id="test-button" {...args} />;

Primary.args = {
  disabled: false,
  text: "Hello World",
  color: "dark",
};

export default meta;
