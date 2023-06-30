import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";
import { Input } from "../Input";
import { Button } from "../Button";

type Story = StoryObj<typeof Form>;

const meta: Meta<typeof Form> = {
  component: Form,
  title: "Form/Form",
  tags: ["autodocs"],
  argTypes: {},
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
};

export const Default: Story = (args) => {
  return (
    <Form {...args}>
      <Input className="mb-4" label="Name" required />
      <Input className="mb-4" label="Email" type="email" required />
      <Button text="submit" type="submit" />
    </Form>
  );
};

Default.args = {
  className: "mt-5",
  onSubmit: handleSubmit,
};

export default meta;
