beforeEach(() => {
  cy.visit('/')
})

describe('user can add new activity', () => {
  it('should navigate to the add activity form', () => {
    cy.get('[data-cy=activity]').click()
    cy.get('form').contains('Select sports type')
  })

  it('should show a toast message to the user after adding an activity', () => {
    cy.get('[data-cy=activity]').click()
    cy.get('form').contains('Select sports type')
    cy.get('#swim').click({ force: true })
    cy.get('[name="distance"]').type('4')
    cy.get('[data-cy="button"]').click()
    cy.get('[data-cy="toast"]').contains('1.03kg CO2')
  })
})

describe('No updates should happen', () => {
  it('should have a disabled button if user enters a 0', () => {
    cy.get('[data-cy=activity]').click()
    cy.get('form').contains('Select sports type')
    cy.get('#swim').click({ force: true })
    cy.get('[name="distance"]').type('0')
    cy.get('[data-cy="button"]').should('be.disabled')
  })

  it('should have a disabled button if user enters a negative number', () => {
    cy.get('[data-cy=activity]').click()
    cy.get('form').contains('Select sports type')
    cy.get('#swim').click({ force: true })
    cy.get('[name="distance"]').type('-3')
    cy.get('[data-cy="button"]').should('be.disabled')
  })
})
