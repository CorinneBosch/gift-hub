describe("paymentButton", () => {
  it("display the payment button on each profile page and can be clicked", () => {
    cy.visit("http://localhost:3000/profile/:userId");
    cy.contains("Buy me beer").click();
  });
});
