import React from "react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ButtonGroup>;

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: "Button Group",
  argTypes: {},
};

export const Primary: Story = (args) => (
  <ButtonGroup>
    <Button text="Click Me" color="primary" />
    <Button text="Click Me" color="warning" />
    <Button text="Click Me" color="danger" />
  </ButtonGroup>
);

Primary.args = {};

export default meta;
