describe('Authentication', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Verify that users can successfully login to the website', () => {
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()

        cy.get('.title').should('have.text', 'Products')
    })

    it('Verify that users cannot login with invalid credentials', () => {
        cy.get('#user-name').type("standard")
        cy.get('#password').type("sec_sauce")
        cy.get('#login-button').click()

        cy.get('h3').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
})