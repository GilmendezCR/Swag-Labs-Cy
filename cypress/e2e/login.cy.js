/// <reference types="cypress"/>

import Login from "../../PageObject/login"
import hamburgerNav from "../../PageObject/hamburger_nav"

describe("Login Test Suite" , () =>{
const login = new Login()
const hamburgerMenu = new hamburgerNav()

before(()=>{
    cy.visit("https://www.saucedemo.com/")
})

it("User is able to login successfully",()=>{
    login.username().type("standard_user")
    login.password().type("secret_sauce")
    login.loginBtn().click()
   
})

after(()=>{
    hamburgerMenu.menuOpen().click()
    hamburgerMenu.logout().click()

})

})