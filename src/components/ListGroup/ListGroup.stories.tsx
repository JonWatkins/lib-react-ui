import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ListGroup, ListGroupItem } from "./ListGroup";
import { Input } from "../Input";
import { Button } from "../Button";

type Story = StoryObj<typeof ListGroup>;

const meta: Meta<typeof ListGroup> = {
  component: ListGroup,
  title: "ListGroup",
  argTypes: {},
};

export const Default: Story = (args) => (
  <ListGroup>
    <ListGroupItem>Lorem ipsum</ListGroupItem>
    <ListGroupItem>Lorem ipsum</ListGroupItem>
  </ListGroup>
);

Default.args = {};

export const HTMLElements: Story = (args) => (
  <ListGroup>
    <ListGroupItem>
      <a href="">Lorem ipsum</a>
      <em>*</em>
    </ListGroupItem>
    <ListGroupItem>
      <a href="">Lorem ipsum</a>
    </ListGroupItem>
  </ListGroup>
);

HTMLElements.args = {};

export const ReactElements: Story = (args) => (
  <ListGroup>
    <ListGroupItem>
      <Input label="Enter Your Name" />
    </ListGroupItem>
    <ListGroupItem>
      <Button text="Submit" />
    </ListGroupItem>
  </ListGroup>
);

ReactElements.args = {};

export default meta;
