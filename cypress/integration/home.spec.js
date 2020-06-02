describe("Home Page", () => {
  beforeEach(() => {
    // runs before each test in the block
    cy.loginAsUser();
    cy.visit("http://localhost:3000");
  });

  it("has a nav bar", () => {
    // a nav element with class navbar
    cy.get("nav.navbar").should("exist");
  });

  it("has an links in nav bar says Meal Planner", () => {
    cy.get("navh1").should("have.text", "Meal Planner");
  });

  it("has links in nav bar says Search for recipes", () => {
    cy.get("nav").its(0).should("have.text", "Search for Recipes");
  });

  it("has links in nav bar says shoppinglist ", () => {
    cy.get("nav").its(1).should("have.text", "Shopping List");
  });

  it("has links in nav bar says shoppinglist ", () => {
    cy.get("h1").should("have.text", "Weekly Meal Planner");
  });

  it("has a button to enter meal", () => {
    cy.get("button").should("have.text", "Enter Meal");
  });

  it("has a button to clear all meall", () => {
    cy.get("button").should("have.text", "Clear all");
  });
});
