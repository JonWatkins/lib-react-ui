import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "..";

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/Card",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default: Story = (args) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-primary">Hello World</CardTitle>
    </CardHeader>
    <CardBody>Lorem Ipsum</CardBody>
    <CardFooter>Lorem ipsum</CardFooter>
  </Card>
);

Default.args = {};

export default meta;