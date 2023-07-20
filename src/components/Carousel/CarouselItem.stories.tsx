import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CarouselItem } from "./Carousel";

type Story = StoryObj<typeof CarouselItem>;

const meta: Meta<typeof CarouselItem> = {
  component: CarouselItem,
  title: "Components/CarouselItem",
  argTypes: {},
};

export const Primary: Story = () => <CarouselItem>Item 3</CarouselItem>;

Primary.args = {};

export default meta;
