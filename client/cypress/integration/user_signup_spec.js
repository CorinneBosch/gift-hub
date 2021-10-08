describe('Signup submit Form', () => {
    it('allows user to create an acoount', () => {
      cy.visit('http://localhost:3000/signup')
      cy.get(':nth-child(1) > input').type('queenB')
      cy.get(':nth-child(2) > input').type('queen@gmail.com')
      cy.get(':nth-child(3) > input').type('queen1234')
      cy.get('form > :nth-child(4)').click()
    })
  })