import { favoritePage } from "../locators/favoritePage";

Cypress.Commands.add("getPropertyContainer", () => {
  cy.get(favoritePage.propertyContainer);
});

Cypress.Commands.add("clickFavBtn", (number) => {
  cy.get(favoritePage.favBtn).eq(number).click();
});
