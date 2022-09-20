import { hubPage } from "../locators/hubPage";

Cypress.Commands.add("clickFavoriteBtn", (number) => {
  cy.get(hubPage.favoriteBtn).eq(number).click();
});

Cypress.Commands.add("getFavoriteBtn", (number) => {
  cy.get(hubPage.favoriteBtn);
});

Cypress.Commands.add("clickMultipleFavoriteBtn", (number1, number2) => {
  cy.get(hubPage.favoriteBtn).eq(number1).click();
  cy.get(hubPage.favoriteBtn).eq(number2).click();
});

Cypress.Commands.add("getPropertyContainer", () => {
  cy.get(hubPage.propertyContainer);
});

Cypress.Commands.add("clickPropertyContainer", (number) => {
  cy.get(hubPage.propertyContainer).eq(number).click();
});

Cypress.Commands.add("getCounter", () => {
  cy.get(hubPage.counter);
});

Cypress.Commands.add("clickCounter", () => {
  cy.get(hubPage.counter).click();
});

Cypress.Commands.add("getPropertyTitle", () => {
  cy.get(hubPage.propertyTitle);
});

Cypress.Commands.add("getFiltersBtn", () => {
  cy.get(hubPage.filtersBtn).contains("Filters");
});

Cypress.Commands.add("clickFiltersBtn", () => {
  cy.getFiltersBtn().click();
});

Cypress.Commands.add("getTeaserInfo", () => {
  cy.get(hubPage.teaserInfo);
});
