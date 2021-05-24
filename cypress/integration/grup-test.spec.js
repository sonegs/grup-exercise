context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8888/grup-exercise')
    })
    it('El enlace de Header lleva al formulario de contacto', () => {
        cy.get('.contacto > a').click()
            .url().should('eq', 'http://localhost:8888/grup-exercise/#ifcontacto');
    })
    it('Carousel: El carousel se mueve si hacemos click en el mismo', () => {
        cy.get('.slider-container > :nth-child(1)').click()
            .get('.slider-container').should('have.css', 'margin-left', '-500px')
    })
    it('Formulario de contacto: Aparece un mensaje de error si intentamos enviar el formulario de contacto vacío', () => {
        cy.get('#ibenviar').click()
            .get('.button-send-container > :nth-child(2)').should('be.visible');
    })
    it('Formulario de contacto: Los mensajes de error no están visibles si no hacemos click en el botón Enviar', () => {
        cy.get('.button-send-container > :nth-child(2)').should('not.exist');
    })
    it('Formulario de contacto: Aparece un mensaje de confirmación si el email se ha enviado correctamente', () => {
        cy.get('#nombre').type('Miguel')
            .get('#iemail').type('emaildeprueba@hotmail.com')
            .get('#message').type('Mensaje de prueba')
            .get('#ilopd').check()
            .get('#ibenviar').click()
            .get('#icorrecto').should('be.visible')
            .get('#ifcontacto').should('not.be.visible')
    })

})