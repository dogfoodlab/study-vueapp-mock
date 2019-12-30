describe('Vuetify', () => {
  it('Visits the Vuetify welcome page', () => {
    cy.visit('/vuetify')
    cy.contains('h1', 'Welcome to Vuetify')
  })
})
