describe('Validando compra com sucesso no SauceDemo', () => {
    before('Fazendo login com sucesso', () => {
        cy.realizaLoginSauceDemo()
    })

    it('Validar compra de produto com sucesso', () => {
        cy.get('#item_4_title_link > div').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#back-to-products').click()
        cy.get('#item_0_title_link > div').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#shopping_cart_container > a').click()
        cy.get('#checkout').click()
        cy.preencheFormulario()
        cy.get('#finish').click()
        cy.get('#checkout_complete_container > h2').contains('Thank you for your order!')
    })
})

SELECT * FROM Produtos WHERE Fornecedor = 'FornecedorTagPlus'