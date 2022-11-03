describe('Home page', () => {
  it('Home page renders', () => {
    cy.visit('http://localhost:3000/')

    cy.get('h1').contains('SunCalcwebspace')
  })
})