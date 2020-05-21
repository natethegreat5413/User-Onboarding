import { v4 as uuid } from 'uuid'

const name = "Nathan"
const email = 'nathancowley12@gmail.com'
const password = 'password'
const service = 'agree'



describe('User Form', () => {
    it('can navigate to the site', () => {
        cy.visit('')
        cy.url().should('include', 'localhost')
    })

    it('can submit a friend (happy path)', () => {
        cy.get('input[name="name"]')
        .type(name)
        .should('have.value', name)

        cy.get('input[name="email"]')
        .type(email)
        .should('have.value', email)

        cy.get(':nth-child(8) > input')
        .type(password)
        .should('have.value', password)

        cy.get(`input[name="${service}"]`)
        .check()
        .should('have.checked')

        cy.get('button')
        .click()
        
    })

    // it('check validation message on invalid input', () => {
    //     cy.get(':nth-child(8) > input')
    //     .type('')
    //     .should('have.value', '')

    //     .type(password)
    //     .should('have.value', password)

        
    // })
})