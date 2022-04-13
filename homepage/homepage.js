Given("User visit the url", () => {
  cy.visit("http://qalab.pl.tivixlabs.com/");
});

When("User select country", () => {
  cy.get("#country").should("be.visible").select('France');
});

And("User select city", () => {
  cy.get("#city").select('Berlin');
});

And("User select model", () => {
  cy.get("#model").should("be.visible").type('toyato');
});
And("User select pick-up date", () => {
  cy.get("#pickup").should("be.visible").type("2022-04-15");
});
And("User select drop-off date", () => {
  cy.get("#dropoff").should("be.visible").type("2022-04-17");
});

And("User click on submit button", () => {
  cy.get('button[type="submit"]').should("be.visible").click();
});

Then("User navigate to car rental page", () => {
  cy.url().should("have.include", "qalab");
  // cy.get(".btn-primary").should("be.visible").click()
});
