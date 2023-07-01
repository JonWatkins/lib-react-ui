import React, { Fragment } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { IconTypes } from "./Icon.types";

type Story = StoryObj<typeof Icon>;

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Icons/Icon",
  tags: ["autodocs"],
  argTypes: {},
};

export const SimpleIcon: Story = (args) => <Icon {...args} />;

SimpleIcon.args = {
  type: "copy",
  size: "lg",
  color: "dark",
};

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
