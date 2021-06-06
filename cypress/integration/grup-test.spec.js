context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234/')
    })
    it('El enlace de Header lleva al formulario de contacto', () => {
        cy.get('.contacto > a').click()
            .url().should('eq', 'http://localhost:1234/#ifcontacto');
    })
    it('Formulario de contacto: Aparece un mensaje de error si intentamos enviar el formulario de contacto vacío', () => {
        cy.get('#ibenviar').click()
            .get('.button-send-container > :nth-child(2)').should('be.visible');
    })
    it('Formulario de contacto: Los mensajes de error no están visibles si no hacemos click en el botón Enviar', () => {
        cy.get('.button-send-container > :nth-child(2)').should('not.exist');
    })

})