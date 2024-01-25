/// <reference types="cypress"/>

class Login {

username(){
    return cy.get('[data-test="username"]')
}
password(){
   return cy.get('[data-test="password"]')
}
loginBtn(){
    return cy.get('[data-test="login-button"]')
}

}
export default Login