import React from "react";
import { ListGroup, ListGroupItem } from "..";
import { Input } from "../Input";
import { Button } from "../Button";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ListGroup>;

const meta: Meta<typeof ListGroup> = {
  component: ListGroup,
  title: "ListGroup",
  argTypes: {},
};

export const Primary: Story = (args) => (
  <ListGroup>
    <ListGroupItem>Lorem ipsum</ListGroupItem>
    <ListGroupItem>Lorem ipsum</ListGroupItem>
    <ListGroupItem>Lorem ipsum</ListGroupItem>
  </ListGroup>
);

Primary.args = {};

export const UsingHTMLElements: Story = (args) => (
  <ListGroup>
    <ListGroupItem>
      <a href="">Lorem ipsum</a>
      <em>*</em>
    </ListGroupItem>
    <ListGroupItem>
      <a href="">Lorem ipsum</a>
    </ListGroupItem>
    <ListGroupItem>
      <a href="">Lorem ipsum</a>
    </ListGroupItem>
  </ListGroup>
);

UsingHTMLElements.args = {};

export const UsingReactElements: Story = (args) => (
  <ListGroup>
    <ListGroupItem>
      <Input label="Enter Your Name" />
    </ListGroupItem>
    <ListGroupItem>
      <Button text="Cancel" color="danger" />
    </ListGroupItem>
    <ListGroupItem>
      <Button text="Submit" />
    </ListGroupItem>
  </ListGroup>
);

UsingReactElements.args = {};

export default meta;
