# Recruitment task

The solution of the task contains two test files:

**1. "storyOne"**

***Story***: *As a user I want the ability to save properties I'm looking at so they can be reviewed at a later time.*

***Tests:***
- Check if each property on the hub have an easy Favorite on / off button indicating that this property has been saved.

- Check if hub have an indicator on the number of properties selected as saved

- When a property is selected; there should be an indicator showing the property has been saved

**2. "storyTwo"**

***Story***: *As a user I want the ability to filter properties based on the number of bedrooms and bathrooms.*

***Tests:***
- Check if the Filters selection allow the user to select the number of either bedrooms and / or bathrooms.

- The Clear Filters button should reset both filters to their lower value.

- The View Results button should close the Filter Results page and display properties on the hub meeting the criteria.

All tests were written using Page Object Pattern and Cypress Commands. In the * "Support" * folder I have created two folders: * "locators" * where all locators used in tests are stored, broken down into individual subpages, and the * "methods" * folder where scripts that perform actions on website during testing.

## Environment:

```
- Windows 10
- Node v16.13.1
- npm v8.1.2
- Cypress v10.8.0
- IDE: Visual Studio Code v1.71.2
```

## Project launch:
To run the project, clone the repository, then go to the "rez-qa-challenge" folder and run the ```npm install``` command in the terminal

## Running the tests:
- Running tests in headless mode: ``` npm run tests:headless```
- Running tests in visual mode: ```npm run tests```
