/// <reference types="cypress" />

describe("As a user I want the ability to save properties I’m looking at so they can be reviewed at a later time.", () => {
  beforeEach(() => {
    cy.visit("hub-test-vacation-rentals");
  });

  it("Check if each property on the hub have an easy Favorite on/off button indicating that this property has been saved.", () => {
    cy.getPropertyContainer().each(($el) => {
      cy.getFavoriteBtn().should("be.visible");
    });
  });

  it("Check if hub have an indicator on the number of properties selected as saved", () => {
    // This indicator should show the total count of saved properties.
    cy.clickMultipleFavoriteBtn(0, 1);
    cy.getCounter().should("be.visible").and("have.text", "(2)");

    // When the indicator is clicked the hub should only display saved properties.
    cy.getPropertyTitle()
      .eq(0)
      .then((favorite1Text) => {
        const favorite1Txt = favorite1Text.text();

        cy.getPropertyTitle()
          .eq(2)
          .then((favorite2Text) => {
            const favorite2Txt = favorite2Text.text();

            cy.clickCounter();
            cy.getPropertyContainer()
              .should("be.visible")
              .and("have.length", "2");
            cy.getPropertyTitle()
              .eq(0)
              .then((fav1Text) => {
                const fav1Txt = fav1Text.text();

                cy.getPropertyTitle()
                  .eq(1)
                  .then((fav2Text) => {
                    const fav2Txt = fav2Text.text();

                    expect(fav1Txt).eq(favorite1Txt);
                    expect(fav2Txt).eq(favorite2Txt);
                  });
              });
          });
      });

    // I can un-save a property from the filtered view.

    cy.clickFavBtn(0);
    cy.getPropertyContainer().should("be.visible").and("have.length", "1");
    cy.getCounter().should("have.text", "(1)");
  });

  it("When a property is selected; there should be an indicator showing the property has been saved", () => {
    cy.clickFavoriteBtn(0);
    cy.getCounter().then((counterText) => {
      const mainCounterText = counterText.text();

      cy.clickPropertyContainer(0);
      cy.getSavedIndicator().should("be.visible").and("have.text", "Saved");

      // This indicator can be toggled on or off from the property detail’s view
      cy.clickSavedIndicator();
      cy.getSavedIndicator().should("be.visible").and("have.text", "Save");

      //This change (saved/un-saved) should reflect correctly on the total saved count on the main hub
      cy.go("back");
      cy.getCounter().then((counterTextAfter) => {
        const mainCounterTextAfter = counterTextAfter.text();

        expect(mainCounterTextAfter).not.eq(mainCounterText);
      });
    });
  });
});
