import GridCells from "../../../src/views/GridCells.vue";

describe("<GridCells />", () => {
  it("renders", () => {
    cy.mount(GridCells);
    cy.contains("h1", "Hello 50x50");
  });
});
