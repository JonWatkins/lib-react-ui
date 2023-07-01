import React, { Fragment } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { IconTypes } from "./Icon.types";
import type { ThemeColors, ThemeSizes } from "../../globals";

type Story = StoryObj<typeof Icon>;

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Icon",
  argTypes: {},
};

export const Primary: Story = (args) => <Icon {...args} />;

Primary.args = {
  type: "copy",
  size: "lg",
  color: "dark",
};

export const AvailableSizes: Story = () => {
  const sizes: ThemeSizes[] = ["sm", "md", "lg"];
  return (
    <>
      {sizes.map((size, index) => (
        <Icon key={index} size={size} type="copy" className="mr-4 mb-4" />
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
        <Icon key={index} color={color} type="copy" className="mr-4 mb-4" />
      ))}
    </>
  );
};

AvailableColors.args = {};

export const AvailableIcons: Story = () => {
  const types: IconTypes[] = [
    "copy",
    "registered",
    "tm",
    "counter-clockwise",
    "clockwise",
    "left-arrow",
    "down-arrow",
    "up-arrow",
    "right-arrow",
    "close",
  ];

  return (
    <>
      {types.map((type, index) => (
        <Icon key={index} type={type} className="mr-4 mb-4" />
      ))}
    </>
  );
};

AvailableIcons.args = {};

export default meta;
