const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fqeeve",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
