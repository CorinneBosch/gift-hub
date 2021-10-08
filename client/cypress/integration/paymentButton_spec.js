describe('paymentButton', () => {
  it('display the payment button on each profile page and can be clicked', () => {
    cy.visit('http://localhost:3000/profile/username')
    cy.contains('Coffee').click()

  })
  it('displays a thank you message after the button is clicked', () => {
    cy.visit('http://localhost:3000/profile/username')
    cy.contains('Coffee').click()
    
  })

}

)