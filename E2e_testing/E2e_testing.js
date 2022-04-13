// const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps/index");

// const { Then } = require("cypress-cucumber-preprocessor/steps/index")

// const { Then } = require("cypress-cucumber-preprocessor/steps/index")

// const { When, And, Then } = require("cypress-cucumber-preprocessor/steps/index")

Given("User visit to url", () => {
  cy.visit("http://qalab.pl.tivixlabs.com/");
});
When("User select country", () => {
  cy.get("#country").should("be.visible").select("France");
});
And("User select city", () => {
  cy.get("#city").select("Berlin");
});

And("User select model", () => {
  cy.get("#model").should("be.visible").type("toyato");
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
  cy.get("#search-results")
    .children()
    .first()
    .find("th")
    .should("have.length", 7)
    .as("ColumnNames");
  cy.get("@ColumnNames").each((el) => {
    let arr = [
      "#",
      "Company",
      "Model",
      "License plate",
      "Price",
      "Price per day",
      "Action",
    ];
    expect(arr.indexOf(el.text())).to.be.greaterThan(-1);
    // for checking arr elemnt is equal to text of column heading
  });
});

Then("User click on car rent button", () => {
  cy.get("#search-results")
    .children()
    .last()
    .find("tr")
    .as("SelectedElement")
    .should("have.length", 25);
  cy.get("@SelectedElement").eq(2).find("td").last().click();
  cy.contains("Howard, Richardson and Rubio").should("be.visible");
  cy.get(".btn.btn-primary").click();
});

Then("User click on Rent button", () => {
  cy.get(".btn.btn-primary").should("be.visible").click();
});

Then("User navigate to car specification page", () => {
  cy.get("#name").should("be.visible").type("Govind");
  cy.get("#last_name").should("be.visible").type("kumar");
  cy.get("#card_number").should("be.visible").type(12342242);
  cy.get("#email").should("be.visible").type("test@gmail.com");
  cy.get(".btn-primary").should("be.visible").click();
});
