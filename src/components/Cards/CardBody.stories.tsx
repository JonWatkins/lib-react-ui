import React from "react";
import { CardBody } from ".";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof CardBody>;

const meta: Meta<typeof CardBody> = {
  component: CardBody,
  title: "Components/CardBody",
  argTypes: {},
};

export const Primary: Story = () => <CardBody>Lorem Ipsum</CardBody>;

Primary.args = {};

export default meta;
