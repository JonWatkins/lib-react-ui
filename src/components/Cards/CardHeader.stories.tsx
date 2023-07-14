import React from "react";
import { CardHeader, CardTitle } from ".";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof CardHeader>;

const meta: Meta<typeof CardHeader> = {
  component: CardHeader,
  title: "Card Header",
  argTypes: {},
};

export const Primary: Story = (args) => (
  <CardHeader>
    <CardTitle>Lorem Ipsum</CardTitle>
  </CardHeader>
);

Primary.args = {};

export default meta;
