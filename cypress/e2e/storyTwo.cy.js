/// <reference types="cypress" />

describe("As a user I want the ability to filter properties based on the number of bedrooms and bathrooms.", () => {
  beforeEach(() => {
    cy.visit("hub-test-vacation-rentals");
    cy.clickFiltersBtn();
  });

  it("Check if the Filters selection allow the user to select the number of either bedrooms and/or bathrooms.", () => {
    cy.getMinimumBedrooms()
      .should("be.visible")
      .and("have.text", "Minimum Bedrooms");
    cy.getMinimumBathrooms()
      .should("be.visible")
      .and("have.text", "Minimum Bathrooms");

    // The selection should limit the value to an integer with a lower value of 0 (zero).

    // When amount is equal 0 "minus" button should be disabled
    cy.checkAmountEqualZero();

    // When amount is higher than 0 "minus" button should be enabled
    cy.clickPlusMinimumBeedroomsBtn();
    cy.checkAmountEqualZero();
  });

  it("The Clear Filters button should reset both filters to their lower value.", () => {
    cy.clickPlusMinimumBeedroomsBtn();
    cy.clickPlusMinimumBathdroomsBtn();

    cy.getAmountBeedromsCounter().then((amountBeedrooms) => {
      const amountBeedroomsText = amountBeedrooms.text();

      cy.getAmountBathdromsCounter().then((amountBathrooms) => {
        const amountBathdroomsText = amountBathrooms.text();

        expect(amountBeedroomsText).eq("1");
        expect(amountBathdroomsText).eq("1");

        cy.clickCookiesCloseBtn();
        cy.clickClearFiltersBtn();

        cy.getAmountBeedromsCounter().then((amountBeedroomsAfter) => {
          const amountBeedroomsTextAfter = amountBeedroomsAfter.text();

          cy.getAmountBathdromsCounter().then((amountBathroomsAfter) => {
            const amountBathdroomsTextAfter = amountBathroomsAfter.text();

            expect(amountBeedroomsTextAfter).to.not.eq(amountBeedroomsText);
            expect(amountBeedroomsTextAfter).eq("0");

            expect(amountBathdroomsTextAfter).to.not.eq(amountBathdroomsText);
            expect(amountBathdroomsTextAfter).eq("0");
          });
        });
      });
    });
  });

  it("The View Results button should close the Filter Results page and display properties on the hub meeting the criteria.", () => {
    cy.clickPlusMinimumBathdroomsBtnMultiple(6);
    cy.clickViewResultsBtn();
    cy.getFilterResultsContainer().should("not.exist");

    cy.getPropertyContainer().each(($el) => {
      cy.getTeaserInfo().then((teaser) => {
        const teaserText = teaser.text();

        const bedsArray = [
          "Beds: 1 |",
          "Beds: 2 |",
          "Beds: 3 |",
          "Beds: 4 |",
          "Beds: 5 |",
        ];

        bedsArray.forEach((element) =>
          expect(teaserText).not.contains(element)
        );
      });
    });
  });
});
