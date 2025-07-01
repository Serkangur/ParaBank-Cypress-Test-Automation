/// <reference types="cypress" />

context("Login", () => {
  it("basarili kullanici girisi", () => {
    cy.visit("https://parabank.parasoft.com/"); //url giris
    cy.get('[name="username"]').type("serkangur");
    cy.get('[name="password"]').type("123456789");
    cy.get('[value="Log In"]').click();
    cy.get('[id="leftPanel"] p').should("have.text", "Welcome serkan g�r");
  });

  it("basarisiz kullanici girisi", () => {
    cy.visit("https://parabank.parasoft.com/"); //url giris
    cy.get('[name="username"]').type("serkangur");
    cy.get('[name="password"]').type("123456");
    cy.get('[value="Log In"]').click();
    cy.get('[id="rightPanel"] p').should("have.text", "An internal error has occurred and has been logged.");
  });

   it("Zorunlu alan kullanici girisi", () => {
    cy.visit("https://parabank.parasoft.com/"); //url giris
    cy.get('[value="Log In"]').click();
    cy.get('[id="rightPanel"] p').should("have.text", "Please enter a username and password.");
    cy.get('[name="username"]').type("serkangur");
    cy.get('[value="Log In"]').click();
    cy.get('[id="rightPanel"] p').should("have.text", "Please enter a username and password.");
    cy.get('[name="username"]').type("serkangur");
    cy.get('[name="password"]').type("123456789");
    cy.get('[value="Log In"]').click();
    cy.get('[id="leftPanel"] p').should("have.text", "Welcome serkan g�r");
  });
});
