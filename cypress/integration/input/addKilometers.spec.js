describe('user adds kilometers of last trip', () => {
  it('should update the carbon footprint after submit', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="distance"]').type('3')
    cy.get('[data-cy="addTrip"]').click()
    cy.get('[data-cy="sumFootprint"]').contains('5')
  })
})
