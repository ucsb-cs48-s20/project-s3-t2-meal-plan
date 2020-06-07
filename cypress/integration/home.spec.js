// describe("Home Page", () => {
//   beforeEach(() => {
//     // runs before each test in the block
//     cy.visit("http://localhost:3000");
//   });

//   it("has a nav bar", () => {
//     // a nav element with class navbar
//     cy.get("nav.navbar").should("exist");
//   });

//   it("has an links in nav bar says Meal Planner", () => {
//     cy.get("a").its(0).should("have.text", "Meal Planner");
//   });

//   it("has links in nav bar says login", () => {
//     cy.get("a").its(1).should("have.text", "Login");
//   });
// });
