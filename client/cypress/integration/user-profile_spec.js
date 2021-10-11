describe('UserProfile', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/profile/username');
  })

  describe('profile page', () => {
    it('is expected to have a profile picture, bio, gift button', () => {
      cy.get('.bio').should('exist')
      cy.get('.profile_pic').should('exist')
      cy.get('.gift_button').should('exist')
    })
  })
})