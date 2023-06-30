import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ThemeColors } from "../../globals";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  argTypes: {},
};

export const Primary: Story = (args) => <Button id="test-button" {...args} />;

Primary.args = {
  disabled: false,
  text: "Hello World",
  color: "primary",
};

export const Secondary: Story = (args) => <Button id="test-button" {...args} />;

Secondary.args = {
  disabled: false,
  text: "Hello World",
  color: "secondary",
};

export const Small: Story = (args) => <Button id="test-button" {...args} />;

Small.args = {
  disabled: false,
  text: "Hello World",
  size: "sm",
};

export const Medium: Story = (args) => <Button id="test-button" {...args} />;

Medium.args = {
  disabled: false,
  text: "Hello World",
  size: "md",
};

export const Large: Story = (args) => <Button id="test-button" {...args} />;

Large.args = {
  disabled: false,
  text: "Hello World",
  size: "lg",
};

export const ButtonWithHooks: Story = () => {
  const [value, setValue] = useState("secondary");
  const [isPrimary, setIsPrimary] = useState(false);

  const onClickHandler = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue("primary");
    } else {
      setIsPrimary(false);
      setValue("secondary");
    }
  };

  return (
    <Button
      color={value as ThemeColors}
      onClick={onClickHandler}
      text="Click Me"
    />
  );
};

ButtonWithHooks.args = {};

export const AvailableColors: Story = () => {
  const colors: ThemeColors[] = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "lightest",
    "light",
    "dark",
    "muted",
    "white",
  ];

  return (
    <>
      {colors.map((color, index) => (
        <Button key={index} color={color} text={color} className="mr-4 mb-4" />
      ))}
    </>
  );
};

AvailableColors.args = {};

export default meta;
