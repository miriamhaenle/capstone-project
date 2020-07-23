describe('user fills out register form', () => {
  beforeEach(() => {
    cy.visit('/signup')
  })

  it('should register a new user if all data is entered correctly', () => {
    cy.get('[name="username"]').type('Jan Frodeno')
    cy.get('[name="email"]').type('jan@frodissimo.com')
    cy.get('[name="passwordOne"]').type('12345678')
    cy.get('[name="passwordTwo"]').type('12345678')
    cy.get('[data-cy="button"]').click()
    cy.location('pathname').should('include', 'home')
  })

  it('should show error messsage if email adress was already used', () => {
    cy.get('[name="username"]').type('Jan Frodeno')
    cy.get('[name="email"]').type('jan@frodissimo.com')
    cy.get('[name="passwordOne"]').type('12345678')
    cy.get('[name="passwordTwo"]').type('12345678')
    cy.get('[data-cy="button"]').click()
    cy.get('[data-cy="errorMessage"]').contains(
      'The email address is already in use by another account.'
    )
  })

  it('should show error messsage if password is too short', () => {
    cy.get('[name="username"]').type('Jan Frodeno')
    cy.get('[name="email"]').type('jan@frodissimo.com')
    cy.get('[name="passwordOne"]').type('1234')
    cy.get('[name="passwordTwo"]').type('1234')
    cy.get('[data-cy="button"]').click()
    cy.get('[data-cy="errorMessage"]').contains(
      'Password should be at least 6 characters'
    )
  })

  it('should have disabled button if not all inputs are filled put', () => {
    cy.get('[name="username"]').type('Jan Frodeno')
    cy.get('[name="passwordOne"]').type('12345678')
    cy.get('[name="passwordTwo"]').type('12345678')
    cy.get('[data-cy="button"]').should('be.disabled')
  })

  it('should have disabled button if email is not formatted correctly', () => {
    cy.get('[name="username"]').type('Jan Frodeno')
    cy.get('[name="email"]').type('janQfrodissimo.com')
    cy.get('[name="passwordOne"]').type('12345678')
    cy.get('[name="passwordTwo"]').type('12345678')
    cy.get('[data-cy="button"]').should('be.disabled')
  })

  it('should have disabled button if passwords dont match', () => {
    cy.get('[name="username"]').type('Jan Frodeno')
    cy.get('[name="email"]').type('jan@frodissimo.com')
    cy.get('[name="passwordOne"]').type('12345678')
    cy.get('[name="passwordTwo"]').type('123456789')
    cy.get('[data-cy="button"]').should('be.disabled')
  })

  it('should show password by click on the eye icon', () => {
    cy.get('[name="username"]').type('Jan Frodeno')
    cy.get('[name="email"]').type('jan@frodissimo.com')
    cy.get('[name="passwordOne"]').type('12345678')
    cy.get('[data-cy="eyeIcon"]').click()
    cy.get('[name="passwordOne"]').should('have.property', 'text')
  })
})
