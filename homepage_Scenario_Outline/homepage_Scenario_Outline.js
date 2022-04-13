Given("User visit the url", () => {
  cy.visit("http://qalab.pl.tivixlabs.com/");
});
When("User select country as {string} and User select city as {string}", (country, city) => {
  cy.get("#country").should("be.visible").select(country);
  cy.get("#city").select(city);
});

And("User select model as {string}", (model) => {
  cy.get("#model").should("be.visible").type(model);
});
And("User select pick-up date", () => {
  cy.get("#pickup").should("be.visible").type("2022-04-15");
});
And("User select drop-of date", () => {
  cy.get("#dropoff").should("be.visible").type("2022-04-17");
});

And("User click on submit button", () => {
  cy.get('button[type="submit"]').should("be.visible").click();
});

Then("User navigate to car rental page", () => {
  cy.url().should("have.include", "qalab");
});
