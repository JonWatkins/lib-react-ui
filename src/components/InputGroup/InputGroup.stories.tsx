import React from "react";
import { InputGroup } from "./InputGroup";
import { Input } from "../Input";
import { Button } from "../Button";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof InputGroup>;

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
  title: "InputGroup",
  argTypes: {},
};

export const Primary: Story = (args) => (
  <InputGroup>
    <Input />
    <Button text="Search" />
  </InputGroup>
);

Primary.args = {};

export default meta;
