import { faker } from '@faker-js/faker';
/// <reference types="cypress" />


context("Register", () => {
  it("basarili kullanici oluşturma", () => {
    const username = faker.internet.userName();

    cy.visit("https://parabank.parasoft.com/"); //url giris
    cy.get('[href="register.htm"]').click();
    cy.get('[id="customer.firstName"]').type("serkan");
    cy.get('[id="customer.lastName"]').type("gur");
    cy.get('[id="customer.address.street"]').type("ankara");
    cy.get('[id="customer.address.city"]').type("ankara");
    cy.get('[id="customer.address.state"]').type("ankara");
    cy.get('[id="customer.address.zipCode"]').type("23100");
    cy.get('[id="customer.phoneNumber"]').type("05315644578");
    cy.get('[id="customer.ssn"]').type("asd");
    cy.get('[id="customer.username"]').type(username);
    cy.get('[id="customer.password"]').type("123456789");
    cy.get('[id="repeatedPassword"]').type("123456789");
    cy.get('[value="Register"]').click();
    cy.get('[id="leftPanel"] p').should("have.text", "Welcome serkan gur");
    
  });
});
