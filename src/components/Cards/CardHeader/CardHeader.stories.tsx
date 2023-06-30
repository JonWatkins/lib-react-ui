import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CardHeader, CardTitle } from "..";

type Story = StoryObj<typeof CardHeader>;

const meta: Meta<typeof CardHeader> = {
  component: CardHeader,
  title: "Components/Cards/CardHeader",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default: Story = (args) => (
  <CardHeader>
    <CardTitle>Lorem Ipsum</CardTitle>
  </CardHeader>
);

Default.args = {};

export default meta;
