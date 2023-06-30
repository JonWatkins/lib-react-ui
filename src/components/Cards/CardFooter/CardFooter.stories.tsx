import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CardFooter } from "..";

type Story = StoryObj<typeof CardFooter>;

const meta: Meta<typeof CardFooter> = {
  component: CardFooter,
  title: "Components/Cards/CardFooter",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default: Story = (args) => <CardFooter>Lorem Ipsum</CardFooter>;

Default.args = {};

export default meta;
