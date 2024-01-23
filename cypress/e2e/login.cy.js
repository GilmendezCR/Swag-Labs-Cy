/// <reference types="cypress"/>

describe("Login Test Suite" , () =>{

before(()=>{
    cy.visit("https://www.saucedemo.com/")
})

it("User is able to login successfully",()=>{
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.contains("Open Menu").click()
    cy.contains("Logout").click()


})




})