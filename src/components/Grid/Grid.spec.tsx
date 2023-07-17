import "@testing-library/jest-dom";

import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { Grid, GridRow, GridColumn } from "./Grid";

describe("Grid", () => {
  const getById = queryByAttribute.bind(null, "id");

  describe("GridColumn", () => {
    it("should be able to render a GridColumn", () => {
      const dom = render(<GridColumn id="test-grid" />);
      const grid = getById(dom.container, "test-grid")
      expect(grid).toHaveClass("grid-col-lg-12");
    });

    global.breakPoints.forEach((breakPoint) => {
      it(`should be able to render a different break pionts: ${breakPoint}`, () => {
        const dom = render(
          <GridColumn id="test-grid" breakPoint={breakPoint} />
        );
        const grid = getById(dom.container, "test-grid")
        expect(grid).toHaveClass(
          `grid-col-${breakPoint}-12`
        );
      });
    });

    global.columnWidths.forEach((columnWidth) => {
      it(`should be able to render a different columnWidths: ${columnWidth}`, () => {
        const dom = render(
          <GridColumn id="test-grid" colWidth={columnWidth} />
        );
        const grid = getById(dom.container, "test-grid")
        expect(grid).toHaveClass(
          `grid-col-lg-${columnWidth}`
        );
      });
    });
  });

  describe("GridRow", () => {
    it("should be able to render a GridRow", () => {
      const dom = render(<GridRow id="test-grid" />);
      const grid = getById(dom.container, "test-grid")
      expect(grid).toHaveClass("grid-row");
    });
  });

  it("should be able to render a Grid", () => {
    const dom = render(<Grid id="test-grid" />);
    const grid = getById(dom.container, "test-grid")
    expect(grid).toHaveClass("grid");
    expect(grid).not.toHaveClass("grid-fluid");
  });

  it("should be able to render a fluid Grid", () => {
    const dom = render(<Grid id="test-grid" fluid />);
    const grid = getById(dom.container, "test-grid")
    expect(grid).toHaveClass("grid");
    expect(grid).toHaveClass("grid-fluid");
  });
});
