describe('Validando API de Consulta de usuário', () => {
    before('Criando um novo usuário', () => {
        cy.api_createNewUser()
    })

    it('Validar consulta de usuário com sucesso', () => {
        cy.api_getNewUser()
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.id).to.be.not.null
                expect(response.body.name).to.be.not.null
                expect(response.body.email).to.be.not.null
                expect(response.body.gender).to.be.not.null
                expect(response.body.status).to.be.not.null
            })
    })
})