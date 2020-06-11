/*describe("Search Page", () => {
  context("When I am login as user", () => {
    beforeEach(() => {
      cy.loginAsUser();
      cy.visit("http://localhost:3000/search");
    });

    it("has title search for recipes", () => {
      cy.get("title").contains("Search for Recipes");
    });

    it("has title recipe list", () => {
      cy.get("h3").contains("Recipe List");
    });
    
    it("has search bar and able to search it", () => {
      cy.get("input[type='text']").type("mango");
      cy.get("button[type='submit']").click();
      cy.contains('Mango Lassi');
    })
  });
});*/
