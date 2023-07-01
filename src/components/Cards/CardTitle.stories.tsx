import React from "react";
import { CardTitle } from ".";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof CardTitle>;

const meta: Meta<typeof CardTitle> = {
  component: CardTitle,
  title: "Components/Cards/CardTitle",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default: Story = (args) => <CardTitle>Lorem Ipsum</CardTitle>;

Default.args = {};

export default meta;
