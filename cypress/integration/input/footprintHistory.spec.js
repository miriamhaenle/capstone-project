describe('Footprint history page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should switch to history page', () => {
    cy.get('[data-cy="sumFootprint"]').click()
    cy.get('p').contains('No data yet. Start tracking your trips!')
  })
  it('should render no chart when no data was entered', () => {
    cy.get('[data-cy="sumFootprint"]').click()
    cy.get('p').contains('No data yet. Start tracking your trips!')
  })
  it('should render the chart if data was entered', () => {
    cy.get('#car').click({ force: true })
    cy.get('[name="distance"]').type('3')
    cy.get('[data-cy="addTrip"]').click()
    cy.get('[data-cy="sumFootprint"]').click()
    cy.get('svg')
  })
  it('should render the labels for the chart if data was entered', () => {
    cy.get('#bus').click({ force: true })
    cy.get('[name="distance"]').type('30')
    cy.get('[data-cy="addTrip"]').click()
    cy.get('[data-cy="sumFootprint"]').click()
    cy.get('li').contains('bus')
  })
})
