describe('Shopping Cart Management', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()
    })

    it('Validate the ability to add products to the shopping cart', () => {
        cy.get('#item_4_title_link').should('have.text', 'Sauce Labs Backpack')
        cy.get('#add-to-cart-sauce-labs-backpack').click()

        cy.get('span[data-test="shopping-cart-badge"]').should('have.text', '1')
    })

    it('Ensure users can manage items in the shopping cart', () => {
        cy.get('#item_4_title_link').click()
        cy.get('div[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack')
        cy.get('#add-to-cart').click()
        cy.get('span[data-test="shopping-cart-badge"]').should('have.text', '1')
        cy.get('a[data-test="shopping-cart-link"]').click()
        cy.get('div[data-test="item-quantity"]').should('have.text', '1')
        cy.get('#remove-sauce-labs-backpack').click()

        cy.get('div[data-test="item-quantity"]').should('not.exist')
    })
})