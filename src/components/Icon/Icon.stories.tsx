import React, { Fragment } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

type Story = StoryObj<typeof Icon>;

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Icon",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default: Story = (args) => <Icon {...args} />;

Default.args = {
  type: "copy",
  size: "lg",
  color: "dark",
};

export default meta;
