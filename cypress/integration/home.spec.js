/*describe("Home Page", () => {
  context("when I am login as user", () => {
    beforeEach(() => {
      // runs before each test in the block
      cy.loginAsUser();
      cy.visit("http://localhost:3000");
    });

    it("shows user navbar and it's options", () => {
      cy.get("nav.navbar").should("exist");
      cy.get("nav.navbar").contains("Search for Recipes");
      cy.get("nav.navbar").contains("Shopping List");
    });

    it("check table exists", () => {
      cy.get('table[id="mealMatrix"]');
    });
  });

  context("when I am not login as user", () => {
    it("has login button on navbar", () => {
      cy.visit("http://localhost:3000");
      cy.get("a").its(1).should("have.text", "Login");
    });
  });
});*/
