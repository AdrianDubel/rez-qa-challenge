import { filtersPage } from "../locators/filtersPage.cy";

Cypress.Commands.add("getMinimumBedrooms", () => {
  cy.get(filtersPage.minimumBedrooms);
});

Cypress.Commands.add("getMinimumBathrooms", () => {
  cy.get(filtersPage.minimumBathrooms);
});

Cypress.Commands.add("getAmountBeedromsCounter", () => {
  cy.get(filtersPage.amountBeedromsCounter).first();
});

Cypress.Commands.add("getMinusMinimumBedroomsBtn", () => {
  cy.get(filtersPage.minusMinimumBedroomsBtn).first();
});

Cypress.Commands.add("getPlusMinimumBeedroomsBtn", () => {
  cy.get(filtersPage.plusMinimumBeedroomsBtn).first();
});

Cypress.Commands.add("clickPlusMinimumBeedroomsBtn", () => {
  cy.getPlusMinimumBeedroomsBtn().click();
});

Cypress.Commands.add("getPlusMinimumBathdroomsBtn", () => {
  cy.get(filtersPage.plusMinimumBeedroomsBtn).last();
});

Cypress.Commands.add("clickPlusMinimumBathdroomsBtn", () => {
  cy.getPlusMinimumBathdroomsBtn().click();
});

Cypress.Commands.add("getAmountBeedromsCounter", () => {
  cy.get(filtersPage.amountBeedromsCounter).first();
});

Cypress.Commands.add("getAmountBathdromsCounter", () => {
  cy.get(filtersPage.amountBeedromsCounter).last();
});

Cypress.Commands.add("clickCookiesCloseBtn", () => {
  cy.get(filtersPage.cookiesCloseBtn).click();
});

Cypress.Commands.add("clickClearFiltersBtn", () => {
  cy.get(filtersPage.clearFiltersBtn).click();
});

Cypress.Commands.add("clickViewResultsBtn", () => {
  cy.get(filtersPage.viewResultsBtn).click({ force: true });
});

Cypress.Commands.add("clickPlusMinimumBathdroomsBtnMultiple", (number) => {
  Cypress._.times(number, () => {
    cy.clickPlusMinimumBeedroomsBtn();
  });
});

Cypress.Commands.add("getFilterResultsContainer", () => {
  cy.get(filtersPage.filterResultsContainer);
});

Cypress.Commands.add("checkAmountEqualZero", () => {
  cy.getAmountBeedromsCounter().then((amount) => {
    const amountValueText = amount.text();

    if (amountValueText == 0) {
      cy.getMinusMinimumBedroomsBtn().click().should("be.disabled");
    } else {
      cy.getMinusMinimumBedroomsBtn().click().should("be.enabled");
    }
  });
});
