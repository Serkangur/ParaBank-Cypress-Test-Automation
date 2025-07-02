class BaseLibrary{

visit(){
     cy.visit("https://parabank.parasoft.com/"); 
}

getNumberRandom(){
     return Math.floor(Math.random() * 1000000);
}

}

export default BaseLibrary; 