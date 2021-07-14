/// <reference types="Cypress" />

describe("Login page functionality", () => {
  before(() => {
    cy.visit("/login");
  });

  it("Should show login form", () => {
    cy.get(".form");
  });

  it("Should allow a user to login", () => {
    cy.intercept({
      method: "POST",
      url: "https://donatello-development.herokuapp.com/login",
    }).as("apiCall");

    cy.get(`[name="email"]`).type("rein@rein.com");
    cy.get(`[name="password"]`).type("abcd1234");
    cy.get(`form`).submit();
    /* eslint-disable */
    cy.wait("@apiCall").then((interception) => {
      expect(interception.request.body.email).to.include("rein@rein.com");
      expect(interception.request.body.password).to.include("abcd1234");
    });
    /* eslint-enable */
  });
});
