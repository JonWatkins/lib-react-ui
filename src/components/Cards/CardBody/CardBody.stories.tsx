import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CardBody } from "..";

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
