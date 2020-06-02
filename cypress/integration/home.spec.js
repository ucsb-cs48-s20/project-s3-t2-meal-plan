describe("Home Page", () => {
  beforeEach(() => {
    // runs before each test in the block
    cy.visit("http://localhost:3000");
  });

  it("has an links in nav bar says Meal Planner", () => {
    cy.get("h1").should("have.text", "Meal Planner");
  });

  it("has links in nav bar says Search for recipes", () => {
    cy.get("a").its(0).should("have.text", "Search for Recipes");
  });

  it("has links in nav bar says shoppinglist ", () => {
    cy.get("a").its(1).should("have.text", "Shopping List");
  });

  it("on homepage there is title said Weekly Meal Planner ", () => {
    cy.get("h1").should("have.text", "Weekly Meal Planner");
  });
});
