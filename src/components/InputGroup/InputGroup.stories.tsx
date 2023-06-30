import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputGroup } from "./InputGroup";
import { Input } from "../Input";
import { Button } from "../Button";

type Story = StoryObj<typeof InputGroup>;

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
  title: "Form/InputGroup",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default: Story = (args) => (
  <InputGroup>
    <Input />
    <Button text="Search" />
  </InputGroup>
);

Default.args = {};

export default meta;
