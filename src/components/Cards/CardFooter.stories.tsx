import React from "react";
import { CardFooter } from ".";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof CardFooter>;

const meta: Meta<typeof CardFooter> = {
  component: CardFooter,
  title: "Components/CardFooter",
  argTypes: {},
};

export const Primary: Story = () => <CardFooter>Lorem Ipsum</CardFooter>;

Primary.args = {};

export default meta;
