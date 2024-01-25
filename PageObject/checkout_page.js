/// <reference types="cypress"/>

class checkout{

    checkout_btn(){
    
    return cy.get('[data-test="checkout"]')
    
    }
    
    first_name(){
        
        return cy.get('[data-test="firstName"]')

    }

    last_name(){

        return cy.get('[data-test="lastName"]')

    }

    zip_posta_code(){

        return cy.get('[data-test="postalCode"]')

    }
    
    continue_btn(){

        return cy.get('[data-test="continue"]')
    }
    finish_btn(){

        return cy.get('[data-test="finish"]')
    }
    success_message(){

        return cy.contains("Thank you for your order!")
        
    }
    }
    export default checkout