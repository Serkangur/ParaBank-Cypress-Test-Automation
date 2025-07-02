import { faker } from "@faker-js/faker";
import HomePage from "../pages/HomePage";
import BaseLibrary from "../base/BaseLibrary";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
/// <reference types="cypress" />

context("Register", () => {
  const baseLibrary = new BaseLibrary();
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const registerPage = new RegisterPage();

  it("basarili kullanici oluşturma", () => {
  

    var usernameRandom = 'username' + baseLibrary.getNumberRandom();

    baseLibrary.visit();
    homePage.clickToRegisterButton();
    registerPage.sendKeysFirstName("serkan")
    .sendKeysLastName("gur")
    .sendKeysStreet("ankara")
    .sendKeysCity("ankara")
    .sendKeysState("ankara")
    .sendKeysZipCode("23100")
    .sendKeysPhoneNumber("05315644578")
    .sendKeysSSN("asd")
    .sendKeysUserName(usernameRandom)
    .sendKeysPassword("123456789")
    .sendKeysRepeatedPassword("123456789")
    .clickToRegister();

    homePage.welcomeTextController("Welcome serkan gur");


  });
});
