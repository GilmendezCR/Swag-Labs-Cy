/// <reference types="cypress"/>

import Login from "../PageObject/login"
import hamburgerNav from "../PageObject/hamburger_nav"
import products from "../PageObject/products"
import checkout from "../PageObject/checkout_page"


describe("Buy a product" , ()=>{
const login = new Login()
const hamburgerMenu = new hamburgerNav()
const product = new products()
const checkoutElements = new checkout()

before(()=>{
    cy.visit("https://www.saucedemo.com/" )
})

it("User is able to login successfully", ()=> {
    login.username().type("standard_user")
    login.password().type("secret_sauce")
    login.loginBtn().click()
    
})

it("User add a product in a cart", async ()=>{
    
    product.add_Sauce_labs_backpack_to_cart().click()

})

it("User is able to click the shopping card", async ()=>{
    cy.get("#shopping_cart_container").click()

})

it("User is able to click the checkout botton for the product",async ()=>{
    checkoutElements.checkout_btn().click()

})   

it("User is able to enter the checkout information", async ()=>{
    checkoutElements.first_name().type("Gilberto")
    checkoutElements.last_name().type("Solano")
    checkoutElements.zip_posta_code().type("40901")
    checkoutElements.continue_btn().click()
    checkoutElements.finish_btn().click()
    checkoutElements.success_message().should('be.visible')


})
after(()=>{
    hamburgerMenu.menuOpen().click()
    hamburgerMenu.logout().click()

})

})