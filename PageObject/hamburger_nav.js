/// <reference types="cypress"/>

class hamburgerNav {

menuOpen(){
    return cy.contains("Open Menu")
}
logout(){
    return cy.contains("Logout")

}

}
export default hamburgerNav
