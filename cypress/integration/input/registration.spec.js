beforeEach(() => {
  cy.visit('/')
})

describe('user fills out register form', () => {
  it('should register a new user if all data is entered correctly', () => {
    cy.get('[name="name"]').type('Jan Frodeno')
    cy.get('[name="email"]').type('jan@frodissimo.com')
    cy.get('[name="password"]').type('12345')
    cy.get('[data-cy="register"]').click()
  })
})
