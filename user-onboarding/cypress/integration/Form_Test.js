describe ('Form Inputs' , () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
    })
    it('can type a name', () => {
        cy.get('input[name="name"]')
        .type('nathan cowley')
    })
    it('can type an email', () => {
        cy.get('input[name="email"]')
        .type('nathancowley12@gmail.com')
    })
    it('can type a password', () => {
        cy.get('input[name="password"]')
        .type('password')
    })
    it('can check terms of service', () => {
        cy.get('input[name="terms"]').click()
        
    })
})


describe('Submitting Users', () => {
    it('can submit form data', () => {
        cy.visit('http://localhost:3000')

        cy.get('input[name="name"]')
        .type('nathan cowley')

        cy.get('input[name="email"]')
        .type('nathancowley12@gmail.com')

        cy.get('input[name="password"]')
        .type('password')

        cy.get('input[name="terms"]').click()

        cy.get('button.submit').click()
    })
})


describe('Form Validation for empty Form', () => {
    it('wont submit if form is empty', () => {
        cy.visit('http://localhost:3000')
        cy.get('input[name="name"]')
        .type('')
        .should('have.value', '')
        
        .type('nate')
        .should('have.value', 'nate')
        // cy.contains('Name is required').should('exist')
        // cy.get('input[name="name"]').type('')
        // cy.contains('Name is required')
        
    })
})

