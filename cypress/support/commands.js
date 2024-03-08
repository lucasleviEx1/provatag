// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const faker = require('@faker-js/faker')
const newUserJson = require('../fixtures/newUser.json')

Cypress.Commands.add('api_createNewUser', () => {

    let fakerName = faker.fakerPT_BR.person.fullName()
    let fakerEmail = faker.fakerPT_BR.internet.email()

    newUserJson.name = fakerName
    newUserJson.email = fakerEmail

    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        body: newUserJson,
        headers: {
            Authorization: 'Bearer 248925a676467c3c1c399ac011d39d3a9e613e81f28240c63a6b22b5e69e52b1'
        }
    }).then((response) => {
        Cypress.env('idUser', response.body.id)
    })
})

Cypress.Commands.add('api_deleteNewUser', () => {
    let idUser = Cypress.env('idUser')

    cy.request({
        method: 'DELETE',
        url: 'https://gorest.co.in/public/v2/users/' + idUser,
        headers: {
            Authorization: 'Bearer 248925a676467c3c1c399ac011d39d3a9e613e81f28240c63a6b22b5e69e52b1'
        }
    })
})

Cypress.Commands.add('api_getNewUser', () => {
    let idUser = Cypress.env('idUser')

    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users/' + idUser,
        headers: {
            Authorization: 'Bearer 248925a676467c3c1c399ac011d39d3a9e613e81f28240c63a6b22b5e69e52b1'
        }
    })
})

Cypress.Commands.add('realizaLoginSauceDemo', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#header_container > div.primary_header > div.header_label > div').contains('Swag Labs')
})

Cypress.Commands.add('preencheFormulario', () => {

    let fakerName = faker.fakerPT_BR.person.firstName()
    let fakerLastName = faker.fakerPT_BR.person.lastName()

    cy.get('#first-name').type(fakerName)
    cy.get('#last-name').type(fakerLastName)
    cy.get('#postal-code').type('07791210')
    cy.get('#continue').click()
})