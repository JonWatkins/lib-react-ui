import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Carousel, CarouselItem } from "./Carousel";

type Story = StoryObj<typeof Carousel>;

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: "Carousel",
  argTypes: {},
};

export const Primary: Story = (args) => (
  <Carousel id="test-carousel" {...args}>
    <CarouselItem>Item 1</CarouselItem>
    <CarouselItem>Item 2</CarouselItem>
    <CarouselItem>Item 3</CarouselItem>
  </Carousel>
);

Primary.args = {};

export default meta;
