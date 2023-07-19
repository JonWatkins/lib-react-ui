import "@testing-library/jest-dom";

import React from "react";
import {
  render,
  screen,
  queryByAttribute,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Carousel, CarouselItem } from "./Carousel";

describe("Carousel", () => {
  const getById = queryByAttribute.bind(null, "id");

  it("Should be able to render an carousel item", () => {
    const dom = render(<CarouselItem id="test-carousel" />);
    const carousel = getById(dom.container, "test-carousel");
    expect(carousel).toHaveAttribute("style", "width: 100%;");
    expect(carousel).toHaveClass("carousel-item");
  });

  it("Should be able to render an carousel", () => {
    const dom = render(<Carousel id="test-carousel" />);
    const carousel = getById(dom.container, "test-carousel");
    expect(carousel).toHaveClass("carousel");
  });

  it("should render carousel items", async () => {
    render(
      <Carousel id="test-carousel">
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    );

    await waitFor(() => screen.getByText("Item 3"));
    const badge1 = screen.getByText("1");
    expect(badge1).toHaveClass("badge", "badge-primary");

    const next = screen.getByText("Next");
    await userEvent.click(next);

    const badge2 = screen.getByText("2");
    expect(badge1).toHaveClass("badge", "badge-light");
    expect(badge2).toHaveClass("badge", "badge-primary");

    const badge3 = screen.getByText("3");
    await userEvent.click(badge3);
    expect(badge2).toHaveClass("badge", "badge-light");
    expect(badge3).toHaveClass("badge", "badge-primary");

    const prev = screen.getByText("Prev");
    await userEvent.click(prev);
    expect(badge3).toHaveClass("badge", "badge-light");
    expect(badge2).toHaveClass("badge", "badge-primary");
  });

  it("should wrap around", async () => {
    render(
      <Carousel id="test-carousel">
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    );
    const badge3 = screen.getByText("3");
    await userEvent.click(badge3);
    expect(badge3).toHaveClass("badge", "badge-primary");

    const next = screen.getByText("Next");
    await userEvent.click(next);

    const badge1 = screen.getByText("1");
    expect(badge1).toHaveClass("badge", "badge-primary");

    const prev = screen.getByText("Prev");
    await userEvent.click(prev);
    expect(badge3).toHaveClass("badge", "badge-primary");
  });

  it("should pause/unpase on hover", async () => {
    const dom = render(
      <Carousel id="test-carousel">
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    );

    const carousel = getById(dom.container, "test-carousel");
    const next = screen.getByText("Next");

    expect(carousel).not.toHaveClass("is-paused");
    await userEvent.hover(next);
    expect(carousel).toHaveClass("is-paused");
    await userEvent.unhover(next);
    expect(carousel).not.toHaveClass("is-paused");
  });

  it("it should be able to use swipe for mobile", () => {
    render(
      <Carousel id="test-carousel">
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    );

    const first = screen.getByText("Item 1");

    fireEvent.touchMove(first, {
      touches: [{ clientX: -100, clientY: 0 }],
    });

    fireEvent.touchEnd(first);

    fireEvent.touchMove(first, {
      touches: [{ clientX: 100, clientY: 0 }],
    });

    fireEvent.touchEnd(first);
  });

  it("should loop with setInterval", async () => {
    jest.useFakeTimers();

    render(
      <Carousel id="test-carousel" timeout={500}>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    );

    act(() => jest.advanceTimersByTime(1000));

    jest.useRealTimers();
  });
});
