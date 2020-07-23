describe('welcome page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should link to sign up page', () => {
    cy.contains('Sign up').click()
    cy.location('pathname').should('include', 'signup')
  })

  it('should link to sign in page', () => {
    cy.contains('Sign in').click()
    cy.location('pathname').should('include', 'signin')
  })
})
