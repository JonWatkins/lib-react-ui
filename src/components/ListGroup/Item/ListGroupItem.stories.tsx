import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ListGroupItem } from "./ListGroupItem";
import { Input } from "../../Input";

type Story = StoryObj<typeof ListGroupItem>;

const meta: Meta<typeof ListGroupItem> = {
  component: ListGroupItem,
  title: "Components/ListGroup/ListGroupItem",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default: Story = (args) => (
  <ListGroupItem>Lorem ipsum</ListGroupItem>
);

Default.args = {};

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
