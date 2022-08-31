describe("Grid 50x50", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Hello 50x50");
  });
});
