/// <reference types="cypress" />

import BaseLibrary from "../base/BaseLibrary";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

context("Login", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const baseLibrary = new BaseLibrary();
  it("basarili kullanici girisi", () => {
    baseLibrary.visit();
    loginPage
      .sendKeysUserName("serkangur")
      .sendKeysPassword("123456789")
      .clickLogin();

    homePage.welcomeTextController("Welcome serkan gur");
  });

  it("basarisiz kullanici girisi", () => {
    baseLibrary.visit();
    loginPage
      .sendKeysUserName("serkangur")
      .sendKeysPassword("234342rdfgfgfgf")
      .clickLogin();
      //.errorTextController("The username and password could not be verified.");
  });

  it("Zorunlu alan kullanici girisi", () => {
    baseLibrary.visit();
    loginPage
      .clickLogin()
      .errorTextController("Please enter a username and password.");

    loginPage
      .sendKeysUserName("serkangur")
      .clickLogin()
      .errorTextController("Please enter a username and password.")
      .sendKeysUserName("serkangur")
      .sendKeysPassword("123456789")
      .clickLogin();

    homePage.welcomeTextController("Welcome serkan gur");
  });
});
