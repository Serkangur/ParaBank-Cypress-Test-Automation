/// <reference types="cypress" />

context("User Tests", () => {
  it("GET - /v2/user/username User Info", () => {
    cy.request("GET", "https://petstore.swagger.io/v2/user/serkangur");
  });

  it("POST - /v2/user Create New User", () => {
    const BodyPayload = {
      id: 32145685224,
      username: "serkangur",
      firstName: "serkan2olmadı",
      lastName: "gür2",
      email: "denemeSerkan2@gmail.com",
      password: "Deneme-2",
      phone: "5555555227",
      userStatus: 1,
    };

    const headersPayload = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: BodyPayload,
      headers: headersPayload,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message");
    });
  });

  it("PUT - /v2/user Update User", () => {
    const BodyPayload = {
      id: 32145685224,
      username: "serkanguryeni",
      firstName: "olursa",
      lastName: "sorunsitede",
      email: "demiiiiiii@gmail.com",
      password: "deneme-1",
      phone: "5555555555",
      userStatus: 0,
    };

    const headersPayload = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/serkangur",
      body: BodyPayload,
      headers: headersPayload,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message");
    });
  });

  it("DELETE - /v2/user/username Delete User", () => {
    cy.request("DELETE", "https://petstore.swagger.io/v2/user/serkanguryeni");
  });

  it("GET - /v2/user/login Login User", () => {
    const queryPayLoad = {
      username: "nesringurr",
      password: "Deneme-2",
    };

    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/login",
      body: queryPayLoad,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("GET - /v2/user/logout Logout User", () => {
    cy.request("GET", "https://petstore.swagger.io/v2/user/logout");
  });
});
