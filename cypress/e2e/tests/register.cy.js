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


it("parola karşılaştırma kontrol", () => {
  
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
    .sendKeysRepeatedPassword("asd")
    .clickToRegister()
    .repeatedMessageErrorControl()
    .sendKeysPassword("123456789")
    .sendKeysRepeatedPassword("123456789")
    .clickToRegister(); 
  

    homePage.welcomeTextController("Welcome serkan gur");
    

  });

  it.only("boş karakter kontrol", () => {
  
    var usernameRandom = 'username' + baseLibrary.getNumberRandom();

    baseLibrary.visit();
    homePage.clickToRegisterButton();
    registerPage.clickToRegister();
    registerPage.errorTextController(0, "First name is required.")
    .errorTextController(1,"Last name is required.")
    .errorTextController(2,"Address is required.")
    .errorTextController(3,"City is required.")
    .errorTextController(4,"State is required.")
    .errorTextController(5,"Zip Code is required.")
    .errorTextController(6,"Social Security Number is required.")
    .errorTextController(7,"Username is required.")
    .errorTextController(8,"Password is required.")
    .errorTextController(9,"Password confirmation is required.");

    registerPage.sendKeysFirstName("serkan")
    .sendKeysLastName("gur")
    .sendKeysStreet("ankara")
    .sendKeysCity("ankara")
    .sendKeysState("ankara")
    .sendKeysZipCode("23100")
    .sendKeysSSN("asd")
    .sendKeysUserName(usernameRandom)
    .sendKeysPassword("123456789")
    .sendKeysRepeatedPassword("asd")
    .clickToRegister()
    .repeatedMessageErrorControl()
    .sendKeysPassword("123456789")
    .sendKeysRepeatedPassword("123456789")
    .clickToRegister(); 

    homePage.welcomeTextController("Welcome serkan gur");
    
  

    
    

  });


});
