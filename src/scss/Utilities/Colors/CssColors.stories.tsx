import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { inverseTextColor } from "../../../utils";
import type {
  ThemeColors,
  ThemeColorWeights,
  ThemeOpacities,
} from "../../../globals";

type Story = StoryObj;

const meta: Meta<Story> = {
  title: "CSS/Colors",
  argTypes: {},
};

const colors: ThemeColors[] = [
  "primary",
  "secondary",
  "white",
  "muted",
  "light",
  "lightest",
  "dark",
  "warning",
  "success",
  "info",
  "danger",
];

const weights: ThemeColorWeights[] = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

export const TextColor: Story = () => {
  return (
    <div className="f f-col">
      {colors.map((color, colorIndex) => (
        <span key={colorIndex} className={`text-${color} justify-center`}>
          .text-{color}
        </span>
      ))}
    </div>
  );
};

TextColor.args = {};

export const BorderColor: Story = () => {
  return (
    <div className="f f-col">
      {colors.map((color, colorIndex) => (
        <div
          key={colorIndex}
          className={`border-${color} border-1 border-solid p-1 mb-1 f justify-center`}
        >
          .border-{color}
        </div>
      ))}
    </div>
  );
};

BorderColor.args = {};

export const BackgroundColor: Story = () => {
  return (
    <div className="f f-col">
      {colors.map((color, colorIndex) => (
        <div key={colorIndex} className={`bg-${color} p-1 mb-1`}>
          <span className={`${inverseTextColor(color)} f justify-center`}>
            .bg-{color}
          </span>
        </div>
      ))}
    </div>
  );
};

BackgroundColor.args = {};

export const Opacity: Story = () => {
  const opacities: ThemeOpacities[] = ["100", "75", "50", "25"];

  return (
    <div className="f f-col">
      {opacities.map((opacity, opacityIndex) => (
        <div
          key={opacityIndex}
          className={`bg-dark/${opacity} p-1 mb-1 f justify-center`}
        >
          .bg-dark/{opacity}
        </div>
      ))}
    </div>
  );
};

Opacity.args = {};

export const ColorPalette: Story = () => {
  return (
    <table className="f">
      <tbody className="f f-col grow-1">
        <tr className="f f-row">
          <td className="f align-center" style={{ width: "200px" }}>
            .bg-white
          </td>
          <td className="f grow-1">
            <div
              className={`border-light border-1 border-solid bg-white grow-1 p-2`}
            />
          </td>
        </tr>
        {colors.map(
          (color) =>
            color !== "white" && (
              <>
                {weights.map((weight, weightIndex) => (
                  <tr key={weightIndex} className="f f-row">
                    <td className="f align-center" style={{ width: "200px" }}>
                      .bg-{color}-{weight}
                    </td>
                    <td className="f grow-1">
                      <div
                        key={weightIndex}
                        className={`border-light border-1 border-solid bg-${color}-${weight} grow-1 p-2`}
                      />
                    </td>
                  </tr>
                ))}
              </>
            )
        )}
      </tbody>
    </table>
  );
};

ColorPalette.args = {};

export default meta;
