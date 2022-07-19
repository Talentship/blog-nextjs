const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 80000,
  pageLoadTimeout: 90000,
  reporter: 'mochawesome',
  env: {
    test_url: 'https://d3n99xmhopj8he.cloudfront.net/',
  },
  retries: {
    runMode: 1,
  },
  projectId: 'a5zbka',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    experimentalSessionAndOrigin: true,
  },
})
