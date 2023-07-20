export const padding = (size?: string): string => {
  switch (size) {
    case "xl":
    case "large":
      return "pxy-1.5";
    case "medium":
      return "pxy-1";
    default:
      return "pxy-0.5";
  }
};

export const inverseTextColor = (color?: string): string => {
  switch (color) {
    case "white":
    case "light":
    case "lightest":
    case "muted":
      return "text-dark";
    default:
      return "text-white";
  }
};
