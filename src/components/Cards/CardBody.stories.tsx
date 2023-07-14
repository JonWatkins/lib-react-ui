import React from "react";
import { CardBody } from ".";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof CardBody>;

const meta: Meta<typeof CardBody> = {
  component: CardBody,
  title: "CardBody",
  argTypes: {},
};

export const Primary: Story = (args) => <CardBody>Lorem Ipsum</CardBody>;

Primary.args = {};

export default meta;
