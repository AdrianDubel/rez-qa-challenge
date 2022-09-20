import { propertyDetails } from "../locators/propertyDetailsPage";

Cypress.Commands.add("getSavedIndicator", () => {
  cy.get(propertyDetails.savedIndicator);
});
Cypress.Commands.add("clickSavedIndicator", () => {
  cy.get(propertyDetails.savedIndicator).click();
});
