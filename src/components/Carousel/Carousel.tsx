import React, { FC, Children, cloneElement, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Badge } from "../Badge";
import classNames from "classnames";
import type { CarouselProps, CarouselItemProps } from "./Carousel.types";

export const CarouselItem: FC<CarouselItemProps> = ({
  id,
  children,
  className,
  width,
  ...props
}) => {
  const classes = ["carousel-item", className];
  return (
    <div id={id} className={classNames(classes)} style={{ width }} {...props}>
      {children}
    </div>
  );
};

export const Carousel: FC<CarouselProps> = ({
  id,
  children,
  className,
  timeout = 5000,
  ...props
}) => {
  const classes = ["carousel", className];
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      /* istanbul ignore else */
      // TODO: fix this - unit test fails when hovering element
      // and advancing timers
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, timeout);

    return () => {
      /* istanbul ignore else */
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = Children.count(children) - 1;
    } else if (newIndex >= Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div
      id={id}
      className={classNames(classes)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      {...handlers}
      {...props}
    >
      <div
        className="carousel-inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {Children.map(children, (child, index) =>
          cloneElement(child as JSX.Element, { width: "100%", key: index })
        )}
      </div>
      <div className="carousel-indicators mt-2">
        <a className="pointer" onClick={() => updateIndex(activeIndex - 1)}>
          Prev
        </a>
        {Children.map(children, (child, index) => (
          <Badge
            className={classNames("mr-1", "ml-1", "pointer")}
            color={activeIndex === index ? "primary" : "light"}
            onClick={() => updateIndex(index)}
            size="sm"
          >
            {index + 1}
          </Badge>
        ))}
        <a className="pointer" onClick={() => updateIndex(activeIndex + 1)}>
          Next
        </a>
      </div>
    </div>
  );
};
