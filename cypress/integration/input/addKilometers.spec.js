describe('user successfully adds kilometers of last trip', () => {
  it('should update the carbon footprint after submit', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="distance"]').type('3')
    cy.get('[data-cy="addTrip"]').click()
    cy.get('[data-cy="sumFootprint"]').contains('5')
  })
})

describe('user adds 0 as number for kilometers', () => {
  it('should not do anything and button should stay disabled', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="distance"]').type('0')
    cy.get('[data-cy="addTrip"]').should('be.disabled')
  })
})

describe('user adds negative number as kilometers', () => {
  it('should not do anything and button should stay disabled', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="distance"]').type('-3')
    cy.get('[data-cy="addTrip"]').should('be.disabled')
  })
})

describe('user adds more than 7 digits', () => {
  it('should only allow 7 digits and calculate with these', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="distance"]').type('1234567892137714')
    cy.get('[data-cy="addTrip"]').click()

    cy.get('[data-cy="sumFootprint"]').contains('21596563')
  })
})
