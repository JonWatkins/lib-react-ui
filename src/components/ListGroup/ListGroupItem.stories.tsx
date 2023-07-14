import React from "react";
import { ListGroupItem } from "./ListGroup";
import { Input } from "../Input";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ListGroupItem>;

const meta: Meta<typeof ListGroupItem> = {
  component: ListGroupItem,
  title: "ListGroupItem",
  argTypes: {},
};

export const Primary: Story = (args) => (
  <ListGroupItem>Lorem ipsum</ListGroupItem>
);

Primary.args = {};

export const UsingHTMLElements: Story = (args) => (
  <ListGroupItem>
    <a href="">Lorem ipsum</a>
  </ListGroupItem>
);

UsingHTMLElements.args = {};

export const UsingReactElements: Story = (args) => (
  <ListGroupItem>
    <Input label="Enter Your Name" />
  </ListGroupItem>
);

UsingReactElements.args = {};

export default meta;
