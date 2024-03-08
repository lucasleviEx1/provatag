describe('Validando API de Exclusão de usuário', () => {
    before('Criando um novo usuário', () => {
        cy.api_createNewUser()
    })

    it('Validar exclusão de usuário com sucesso', () => {
        cy.api_deleteNewUser()
            .then((response) => {
                expect(response.status).to.equal(204)
            })
    })
})
