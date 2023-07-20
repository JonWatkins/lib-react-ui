import React from "react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj;

const meta: Meta<Story> = {
  title: "CSS/Typeography",
  argTypes: {},
};

export const Primary: Story = () => <div></div>;

Primary.args = {};

export default meta;
