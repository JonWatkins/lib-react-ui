class TouchEvent extends Event {
  constructor(type, options) {
    super(type);
    this.changedTouches = options.changedTouches;
  }

  preventDefault() {
    return false;
  }
}

class Touch {
  constructor(pageX) {
    this.pageX = pageX;
  }
}

global.touchEventFactory = (type, direction, distance) => {
  const options = {};
  const touches = [];
  let touch = null;

  if (type === "touchstart" || type === "touchmove") {
    touch = new Touch(300);
  } else if (type === "touchend") {
    if (direction === "right") {
      touch = new Touch(300 - distance);
    } else {
      touch = new Touch(300 + distance);
    }
  }

  touches.push(touch);
  options.changedTouches = touches;
  return new TouchEvent(type, options);
};

global.sizes = ["sm", "md", "lg"];

global.colors = [
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

global.icons = [
  "copy",
  "registered",
  "tm",
  "counter-clockwise",
  "clockwise",
  "left-arrow",
  "down-arrow",
  "up-arrow",
  "right-arrow",
  "close",
];

global.breakPoints = ["sm", "md", "lg", "xl"];

global.columnWidths = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];
