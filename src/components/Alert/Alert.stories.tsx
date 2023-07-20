import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import type { ThemeColors } from "../../globals";

type Story = StoryObj<typeof Alert>;

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "Alert",
  argTypes: {},
};

export const Primary: Story = (args) => (
  <Alert id="test-alert" {...args}>
    Lorem ipsum dolor!
  </Alert>
);

Primary.args = {
  type: "primary",
};

export const AvailableColors: Story = () => {
  const colors: ThemeColors[] = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "lightest",
    "light",
    "dark",
    "muted",
    "white",
  ];

  return (
    <>
      {colors.map((color, index) => (
        <Alert id="test-alert" type={color} key={index} className="mb-3">
          Lorem ipsum dolor!
        </Alert>
      ))}
    </>
  );
};

AvailableColors.args = {};

export default meta;
