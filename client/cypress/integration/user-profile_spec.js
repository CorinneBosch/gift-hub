describe('UserProfile', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/profile/username');
  })

  describe('profile page', () => {
    it('is expected to have a profile picture, bio, gift button', () => {
      cy.get('.bio_section').should('exist')
      cy.get('.profile_pic_section').should('exist')
      cy.get('.payment_section').should('exist')
    })

    it('has a pop up form that allows you to send a message allong with a donation', () => {
      cy.contains('Buy me beer').click()
      cy.get('.gift_form_name').type('Mighty Mouse');
      cy.get('.gift_form_email').type('m1ghty_mouse@example.com');
      cy.get('.gift_form_message').type("Here's a truce gift, Oil Can Harry");
      cy.contains('Send').click();
      cy.get('._modal-close').click();
    })
  })
})