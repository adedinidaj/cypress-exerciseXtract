const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // Videos will be saved in this path when a test is being ran in the CLI
  videosFolder: 'cypress/videos',
  
  // Any failed tests or anywhere cy.screenshot('filename') is included, a screenshot will be taken of the current state
  screenshotsFolder: 'cypress/screenshots',

  // Any files downloaded during testing will be saved in this path
  downloadsFolder: 'cypress/downloads',

  e2e: {
    baseUrl: "https://xtract360-qa-challenge.s3.eu-west-1.amazonaws.com/index.html",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
