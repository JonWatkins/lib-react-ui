import React, { Fragment } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { iconList } from "./IconList";
import type { ThemeColors, ThemeSizes } from "../../globals";

type Story = StoryObj<typeof Icon>;

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Icon",
  argTypes: {},
};

export const Primary: Story = (args) => <Icon {...args} />;

Primary.args = {
  type: "archive",
  size: "large",
  color: "dark",
};

export const AvailableSizes: Story = () => {
  const sizes: ThemeSizes[] = ["small", "medium", "large"];
  return (
    <>
      {sizes.map((size, index) => (
        <Icon key={index} size={size} type="archive" className="mr-4 mb-4" />
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
        <Icon key={index} color={color} type="archive" className="mr-4 mb-4" />
      ))}
    </>
  );
};

AvailableColors.args = {};

export const AvailableIcons: Story = () => {
  return (
    <>
      {iconList.map((type, index) => (
        <Icon key={index} type={type} className="mr-4 mb-4" />
      ))}
    </>
  );
};

AvailableIcons.args = {};

export default meta;
