describe('user fills out sign in form', () => {
  beforeEach(() => {
    cy.visit('/signin')
  })

  it('should log in an existing user', () => {
    cy.get('[name="email"]').type('jan@frodissimo.com')
    cy.get('[name="password"]').type('12345678')
    cy.get('[data-cy="button"]').click()
    cy.location('pathname').should('include', 'home')
  })
  it('should have disabled button if not all inputs are filled put', () => {
    cy.get('[name="email"]').type('jan@frodissimo.com')
    cy.get('[data-cy="button"]').should('be.disabled')
  })
  it('should have disabled button if email is not formatted correctly', () => {
    cy.get('[name="email"]').type('janQfrodissimo.com')
    cy.get('[data-cy="button"]').should('be.disabled')
  })
  it('should show password by click on the eye icon', () => {
    cy.get('[name="email"]').type('jan@frodissimo.com')
    cy.get('[name="password"]').type('12345678')
    cy.get('[data-cy="eyeIcon"]').click()
    cy.get('[name="password"]').should('have.property', 'text')
  })
})
