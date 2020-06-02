describe("Home Page", () => {
  beforeEach(() => {
    // runs before each test in the block
    cy.visit("http://localhost:3000");
  });

  it("has a nav bar", () => {
    // a nav element with class navbar
    cy.get("nav.navbar").should("exist");
  });

  it("has an links in nav bar says Meal Planner", () => {
    cy.get("nav").its(0).should("have.text", "Meal Planner");
  });

  it("has links in nav bar says Search for recipes", () => {
    cy.get("nav").its(1).should("have.text", "Login");
  });

  it("has a message that user did not login", () => {
    cy.get("message").should(
      "have.text",
      "You're not logged in !Login to see your personal meal planner!"
    );
  });
});
