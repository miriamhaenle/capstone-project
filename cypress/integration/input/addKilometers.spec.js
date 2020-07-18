beforeEach(() => {
  cy.visit('/')
})

describe('user successfully adds kilometers of last trip', () => {
  it('should update the carbon footprint after submit', () => {
    cy.get('#car').click({ force: true })
    cy.get('[name="distance"]').type('3')
    cy.get('[data-cy="addTrip"]').click()
    cy.get('[data-cy="sumFootprint"]').contains('0.77')
  })

  it('should still show the data as before', () => {
    cy.get('#car').click({ force: true })
    cy.get('[name="distance"]').type('30')
    cy.get('[data-cy="addTrip"]').click()
    cy.get('[data-cy="sumFootprint"]').contains('7.72')
    cy.reload()
    cy.get('[data-cy="sumFootprint"]').contains('7.72')
  })
  it('should only allow 7 digits and calculate with these', () => {
    cy.get('#car').click({ force: true })
    cy.get('[name="distance"]').type('1234567892137714')
    cy.get('[data-cy="addTrip"]').click()
    cy.get('[data-cy="sumFootprint"]').contains('3176542.95')
  })
})

describe('No updates should happen', () => {
  it('should have a disabled button if user enters a 0 as number', () => {
    cy.get('#car').click({ force: true })
    cy.get('[name="distance"]').type('0')
    cy.get('[data-cy="addTrip"]').should('be.disabled')
  })
  it('should have a disabled button if user enters a negative number', () => {
    cy.get('#car').click({ force: true })
    cy.get('[name="distance"]').type('-3')
    cy.get('[data-cy="addTrip"]').should('be.disabled')
  })
})
