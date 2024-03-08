describe('Validando API de Criação de usuário', () => {
    it('Validar criação de usuário com sucesso', () => {
        cy.api_createNewUser()
            .then((response) => {
                expect(response.status).to.equal(201)
                expect(response.body.id).to.be.not.null
                expect(response.body.name).to.be.not.null
                expect(response.body.email).to.be.not.null
                expect(response.body.gender).to.be.not.null
                expect(response.body.status).to.be.not.null
            })
    })
})
