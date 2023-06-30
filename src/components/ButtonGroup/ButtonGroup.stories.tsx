import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button";

type Story = StoryObj<typeof ButtonGroup>;

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: "Buttons/ButtonGroup",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default: Story = (args) => (
  <ButtonGroup>
    <Button text="Click Me" color="primary" />
    <Button text="Click Me" color="warning" />
    <Button text="Click Me" color="danger" />
  </ButtonGroup>
);

Default.args = {};

export default meta;
