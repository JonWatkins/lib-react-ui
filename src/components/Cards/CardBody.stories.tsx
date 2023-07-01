import React from "react";
import { CardBody } from ".";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof CardBody>;

const meta: Meta<typeof CardBody> = {
  component: CardBody,
  title: "Components/Cards/CardBody",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default: Story = (args) => <CardBody>Lorem Ipsum</CardBody>;

Default.args = {};

export default meta;
