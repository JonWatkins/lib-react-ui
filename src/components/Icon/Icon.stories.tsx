import React, { Fragment } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

type Story = StoryObj<typeof Icon>;

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Icon",
  argTypes: {},
};

export const Default: Story = (args) => <Icon {...args} />;

Default.args = {
  type: "copy",
  size: "lg",
};

export const Size: Story = (args) => (
  <Fragment>
    <Icon size="sm" type="copy" />
    <Icon size="md" type="copy" />
    <Icon size="lg" type="copy" />
  </Fragment>
);

Size.args = {};

export default meta;
