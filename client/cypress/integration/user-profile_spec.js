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

    it('allows user can edit their profile', () => {
      cy.get('.edit').click()
      cy.get('.edit_bio').type("Mighty Mouse is an American animated anthropomorphic superhero mouse character created by the Terrytoons studio for 20th Century Fox. The character was originally called Super Mouse, and made his debut in the 1942 short The Mouse of Tomorrow. The name was changed to Mighty Mouse in his eighth film, 1944's The Wreck of the Hesperus, and the character went on to star in 80 theatrical shorts, concluding in 1961 with Cat Alarm.")
      cy.get('.update').click()
      cy.get('.bio_section').find('.bio').should('have.text', "Mighty Mouse is an American animated anthropomorphic superhero mouse character created by the Terrytoons studio for 20th Century Fox. The character was originally called Super Mouse, and made his debut in the 1942 short The Mouse of Tomorrow. The name was changed to Mighty Mouse in his eighth film, 1944's The Wreck of the Hesperus, and the character went on to star in 80 theatrical shorts, concluding in 1961 with Cat Alarm.")
    })
  })
})