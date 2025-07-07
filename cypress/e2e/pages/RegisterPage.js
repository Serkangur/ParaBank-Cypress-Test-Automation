class RegisterPage{

sendKeysFirstName(text){
    cy.get('[id="customer.firstName"]').type(text);
    return this;
}

sendKeysLastName(text){
    cy.get('[id="customer.lastName"]').type(text);
    return this;
}

sendKeysStreet(text){
    cy.get('[id="customer.address.street"]').type(text);
    return this;
}

sendKeysCity(text){
    cy.get('[id="customer.address.city"]').type(text);
    return this;
}

sendKeysState(text){
    cy.get('[id="customer.address.state"]').type(text);
    return this;
}

sendKeysZipCode(number){
    cy.get('[id="customer.address.zipCode"]').type(number);
    return this;
}

sendKeysPhoneNumber(number){
     cy.get('[id="customer.phoneNumber"]').type(number);
    return this;
}

sendKeysSSN(text){
     cy.get('[id="customer.ssn"]').type(text);
    return this;
}

sendKeysUserName(username){
     cy.get('[id="customer.username"]').type(username);
    return this;
}

sendKeysPassword(number){
     cy.get('[id="customer.password"]').type("123456789");
    return this;
}

sendKeysRepeatedPassword(number){
     cy.get('[id="repeatedPassword"]').type(number);
    return this;
}

clickToRegister(){
     cy.get('[value="Register"]').click();
    return this;
}

repeatedMessageErrorControl(){
    cy.get('[id="repeatedPassword.errors"]').should('have.text',"Passwords did not match.");
    return this;
}

errorTextController(index,value){
    cy.get('[class="error"]').eq(index).should('have.text',value);
    return this;
}

}

export default RegisterPage;