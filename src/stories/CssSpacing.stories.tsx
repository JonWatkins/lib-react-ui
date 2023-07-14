import React from "react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj;

const meta: Meta<Story> = {
  title: "CSS Spacing",
  argTypes: {},
};

export const Primary: Story = (args) => <div></div>;

Primary.args = {};

export default meta;
