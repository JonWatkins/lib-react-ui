import React, { useState } from "react";
import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import type { ThemeColors, ThemeSizes } from "../../globals";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {},
};

export const Primary: Story = (args) => <Button id="test-button" {...args} />;

Primary.args = {
  disabled: false,
  text: "Hello World",
  color: "primary",
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

export const AvailableSizes: Story = () => {
  const sizes: ThemeSizes[] = ["sm", "md", "lg"];

  return (
    <>
      {sizes.map((size, index) => (
        <Button key={index} size={size} text={size} className="mr-4 mb-4" />
      ))}
    </>
  );
};

AvailableSizes.args = {};

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
