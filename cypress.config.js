import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5187",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
     
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
  },
});
