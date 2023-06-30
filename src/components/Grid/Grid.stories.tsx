import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Grid, GridRow, GridColumn } from ".";

type Story = StoryObj<typeof Grid>;

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "Layout/Grid",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default: Story = (args) => (
  <Grid {...args}>
    <GridRow>
      <GridColumn colWidth="6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </GridColumn>
      <GridColumn colWidth="6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </GridColumn>
    </GridRow>
  </Grid>
);

Default.args = {
  fluid: false,
};

export const Fluid: Story = (args) => (
  <Grid fluid>
    <GridRow className="mb-6">
      <GridColumn colWidth="6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </GridColumn>
      <GridColumn colWidth="6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn colWidth="3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </GridColumn>
      <GridColumn colWidth="3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </GridColumn>
      <GridColumn colWidth="3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </GridColumn>
      <GridColumn colWidth="3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </GridColumn>
    </GridRow>
  </Grid>
);

Fluid.args = {};

export default meta;
