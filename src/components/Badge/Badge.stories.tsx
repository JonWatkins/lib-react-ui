import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import type { ThemeColors, ThemeSizes } from "../../globals";

type Story = StoryObj<typeof Badge>;

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Badge",
  argTypes: {},
};

export const Primary: Story = (args) => (
  <Badge id="test-Badge" {...args}>
    0
  </Badge>
);

Primary.args = {
  color: "primary",
};

export const AvailableSizes: Story = () => {
  const sizes: ThemeSizes[] = ["small", "medium", "large"];

  return (
    <>
      {sizes.map((size, index) => (
        <Badge key={index} size={size} color="primary" className="mr-1 mb-1">
          0
        </Badge>
      ))}
    </>
  );
};

AvailableSizes.args = {};

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
        <Badge id="test-Badge" className="mr-1 mb-1" color={color} key={index}>
          0
        </Badge>
      ))}
    </>
  );
};

AvailableColors.args = {};

export default meta;
