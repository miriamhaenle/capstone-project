describe('user successfully adds kilometers of last trip', () => {
  it('should update the carbon footprint after submit', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#car').click({ force: true })
    cy.get('[name="distance"]').type('3')
    cy.get('[data-cy="addTrip"]').click()
    cy.get('[data-cy="sumFootprint"]').contains('0.77')
  })

  it('should still show the data as before', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#car').click({ force: true })
    cy.get('[name="distance"]').type('30')
    cy.get('[data-cy="addTrip"]').click()
    cy.get('[data-cy="sumFootprint"]').contains('7.72')
    cy.reload()
    cy.get('[data-cy="sumFootprint"]').contains('7.72')
  })
  it('should only allow 7 digits and calculate with these', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#car').click({ force: true })
    cy.get('[name="distance"]').type('1234567892137714')
    cy.get('[data-cy="addTrip"]').click()
    cy.get('[data-cy="sumFootprint"]').contains('3176542.95')
  })
})

describe('No updates should happen', () => {
  it('should not do anything and button should stay disabled', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#car').click({ force: true })
    cy.get('[name="distance"]').type('0')
    cy.get('[data-cy="addTrip"]').should('be.disabled')
  })
  it('should not do anything and button should stay disabled', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#car').click({ force: true })
    cy.get('[name="distance"]').type('-3')
    cy.get('[data-cy="addTrip"]').should('be.disabled')
  })
})
