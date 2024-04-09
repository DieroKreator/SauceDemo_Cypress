describe('Checkout', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()
    })

    it('Validate the checkout process from adding items to completing the purchase', () => {
        cy.get('#item_4_title_link').should('have.text', 'Sauce Labs Backpack')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('span[data-test="shopping-cart-badge"]').should('have.text', '1')
        cy.get('a[data-test="shopping-cart-link"]').click()
        cy.get('#checkout').click()

        // Checkout: Your Information
        cy.get('#first-name').type('Freddy')
        cy.get('#last-name').type('Adams')
        cy.get('#postal-code').type('H3J 0C2')
        cy.get('#continue').click()
        cy.get('div[data-test="item-quantity"]').should('have.text', '1')
        cy.get('div[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack')
        cy.get('div[data-test="inventory-item-price"]').should('have.text', '$29.99')
        cy.get('#finish').click()

        cy.get('h2[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
    })
})