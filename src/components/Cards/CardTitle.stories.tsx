import React from "react";
import { CardTitle } from ".";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof CardTitle>;

const meta: Meta<typeof CardTitle> = {
  component: CardTitle,
  title: "Components/CardTitle",
  argTypes: {},
};

export const Primary: Story = () => <CardTitle>Lorem Ipsum</CardTitle>;

Primary.args = {};

export default meta;
