describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  })
  it('should display the title', () => {
    cy.get('h1').contains('My React App');
  })
})