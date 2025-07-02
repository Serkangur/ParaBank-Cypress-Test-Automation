class LoginPage {
  sendKeysUserName(value) {
    cy.get('[name="username"]').type(value);
    return this;
  }

  sendKeysPassword(value) {
    cy.get('[name="password"]').type(value);
    return this;
  }

  clickLogin() {
    cy.get('[value="Log In"]').click();
    return this;
  }

 errorTextController(text){
    cy.get('[id="rightPanel"] p').should(
      "have.text",
      text
    );
    return this;
 }

}

export default LoginPage; //class'ı dışarı açma işlemi
