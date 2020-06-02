describe("Home Page", () => {
  context("When User logged in", () => {
    beforeEach(() => {
      cy.loginAsUser();
      cy.visit("http://localhost:3000");
    });

    it("has a nav bar", () => {
      // a nav element with class navbar
      cy.get("nav.navbar").should("exist");
    });

    it("has an links in nav bar says Meal Planner", () => {
      cy.get("a").its(0).should("have.text", "Meal Planner");
    });

    it("has links in nav bar says Search for recipes", () => {
      cy.get("a").its(1).should("have.text", "Search for Recipes");
    });

    it("has links in nav bar says Shopping lists", () => {
      cy.get("a").its(2).should("have.text", "Shopping List");
    });
  });

  context("When User did not logged in", () => {
    it("has a login button", () => {
      cy.visit("http://localhost:3000");

      cy.get("[data-cy=login]").should("exist");
    });
  });
});
