describe('Navigation Check', () => {
  it('passes', () => {
    //To visit any URL
    cy.visit('http://localhost:3000/')
    // To check whether these words are on the screen
    cy.contains(/Hello, from /i)
    //To get and click the link
    cy.get('[test-id="homeLink"]').click()
    cy.contains(/This is the \/home page/i)
    cy.get('[test-id="input-box"]').type("Test Input")
    cy.get('button').click()
    cy.contains(/Test Input/i)
    cy.get('a').click()
    cy.contains(/Hello, from /i)

    cy.contains(/See Resume templates/i)
    cy.get('[test-id="resumeLink"]').click()
    cy.contains(/Template 1/i)
    cy.contains(/Template 2/i)
    cy.get('[test-id="resumeTemplate1"]').click()
    // Check whether URL contains keyword
    cy.url().should('include', 'template1')
    //Go to previous page.
    cy.go('back')

    cy.get('[test-id="resumeTemplate2"]').click()
    // Check whether URL contains keyword
    cy.url().should('include', 'template2')
    cy.contains(/collaborating/i)
  })
})

