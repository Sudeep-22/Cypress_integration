#Cypress test integration and resume templates too:

## 🏁 Setup & Basics
### Install lib
npm install --save-dev cypress

### Add to package.json/scripts
"cy:open": "cypress open"

### Open testing
npm run cy:open
In the opened box click E2E and do the basic setup.

## Go to cypress/e2e/spec.cy.ts
All the tests are written here


## Cypress commands:
describe('My Test Suite', () => {
  before(() => { /* runs once before all tests */ })
  beforeEach(() => { /* runs before each test */ })
  after(() => { /* runs once after all tests */ })
  afterEach(() => { /* runs after each test */ })

  it('should do something', () => {
    // test code here
  })
})

### Navigation
cy.visit('/home')            // Visit a page
cy.reload()                  // Reload current page
cy.go('back') or cy.go(-1)   // Go back one page
cy.go('forward') or cy.go(1) // Go forward

cy.url().should('include', '/dashboard')
cy.location('pathname').should('eq', '/home')

### Getting elements

<button data-cy="submit-btn">Submit</button>

cy.get('[data-cy="submit-btn"]')   // By custom attribute
cy.get('.className')               // By class
cy.get('#idName')                  // By id
cy.contains('button', 'Submit')    // By text inside element
cy.find('input')                   // Find child inside parent

### Actions
cy.get('input[name="email"]').type('test@email.com')
cy.get('input').clear()
cy.get('button').click()
cy.get('input[type="checkbox"]').check()
cy.get('input[type="checkbox"]').uncheck()
cy.get('select').select('Option 1')

cy.get('button').click({ force: true })   // Force click even if hidden
cy.get('input').type('Hello{enter}')      // Press Enter

### Checks

cy.get('h1').should('contain.text', 'Welcome')
cy.get('input').should('have.value', 'Test')
cy.get('.alert').should('be.visible')
cy.get('.loader').should('not.exist')

cy.get('button')
  .should('be.visible')
  .and('have.class', 'btn-primary')

cy.wait(1000)   // Wait 1s (not recommended often)
cy.intercept('/api/data').as('getData')
cy.wait('@getData') // Wait for API call

### 🌐 Network Requests

cy.intercept('GET', '/api/users', { fixture: 'users.json' }).as('users')
cy.visit('/users')
cy.wait('@users').its('response.statusCode').should('eq', 200)