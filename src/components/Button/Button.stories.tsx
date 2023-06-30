import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  argTypes: {},
};

export const Primary: Story = (args) => <Button id="test-button" {...args} />;

Primary.args = {
  disabled: false,
  text: "Hello World",
  color: "primary",
};

export const Secondary: Story = (args) => <Button id="test-button" {...args} />;

Secondary.args = {
  disabled: false,
  text: "Hello World",
  color: "secondary",
};

export const Small: Story = (args) => <Button id="test-button" {...args} />;

Small.args = {
  disabled: false,
  text: "Hello World",
  size: "sm",
};

export const Medium: Story = (args) => <Button id="test-button" {...args} />;

Medium.args = {
  disabled: false,
  text: "Hello World",
  size: "md",
};

export const Large: Story = (args) => <Button id="test-button" {...args} />;

Large.args = {
  disabled: false,
  text: "Hello World",
  size: "lg",
};

export default meta;
