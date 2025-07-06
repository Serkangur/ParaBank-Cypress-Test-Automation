class HomePage{

welcomeTextController(text){
    cy.get('[id="leftPanel"] p').should("have.text", text);
    return this;
}



clickToRegisterButton(){
    cy.get('[href="register.htm"]').click();
}


}

export default HomePage;