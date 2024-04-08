describe('Authentication', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()
    })

    it('should be able to login successfully', () => {
        cy.get('.title').should('have.text', 'Products')
    
    })
})