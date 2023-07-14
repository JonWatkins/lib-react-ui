import React from "react";
import { Form } from "./Form";
import { Input } from "../Input";
import { Button } from "../Button";
import { Select } from "../Select";
import type { Meta, StoryObj } from "@storybook/react";
import type { SelectOption } from "../Select/Select.types";

type Story = StoryObj<typeof Form>;

const meta: Meta<typeof Form> = {
  component: Form,
  title: "Form",
  argTypes: {},
};

const options: SelectOption[] = [
  { label: "Eat", value: "eat" },
  { label: "Sleep", value: "sleep" },
  { label: "Code", value: "code" },
  { label: "Walk", value: "walk" },
  { label: "Game", value: "Game" },
];

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
};

export const Primary: Story = (args) => {
  return (
    <Form {...args}>
      <Input className="mb-4" label="Name" required />
      <Input className="mb-4" label="Email" type="email" required />
      <Select
        className="mb-4"
        options={options}
        placeholder="Choose an option"
        label="Choose hobbies"
        isMulti
        isSearchable
        required
      />
      <Button text="submit" type="submit" className="mb-20" />
    </Form>
  );
};

Primary.args = {
  className: "mt-5 mb-20",
  onSubmit: handleSubmit,
};

export default meta;
