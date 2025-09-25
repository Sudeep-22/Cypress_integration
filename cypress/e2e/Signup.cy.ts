// describe('Navigation Check', () => {
//   it('passes', () => {
//     //To visit any URL
//     cy.visit('http://localhost:3000/')
//     // To check whether these words are on the screen
//     cy.contains(/Hello, from /i)
//     //To get and click the link
//     cy.get('[test-id="homeLink"]').click()
//     cy.contains(/This is the \/home page/i)
//     cy.get('[test-id="input-box"]').type("Test Input")
//     cy.get('button').click()
//     cy.contains(/Test Input/i)
//     cy.get('a').click()
//     cy.contains(/Hello, from /i)

//     cy.contains(/See Resume templates/i)
//     cy.get('[test-id="resumeLink"]').click()
//     cy.contains(/Template 1/i)
//     cy.contains(/Template 2/i)
//     cy.get('[test-id="resumeTemplate1"]').click()
//     // Check whether URL contains keyword
//     cy.url().should('include', 'template1')
//     //Go to previous page.
//     cy.go('back')

//     cy.get('[test-id="resumeTemplate2"]').click()
//     // Check whether URL contains keyword
//     cy.url().should('include', 'template2')
//     cy.contains(/collaborating/i)
//   })
// })

describe("Wisowl SignUp Check ", () => {
  it("passes", () => {
    //To visit any URL
    cy.visit("https://app.wisowl.com/signup");
    // To check whether these words are on the screen
    cy.contains("Create your account");

    // ✅ Email field: required (empty)
    cy.get("form").submit();
    cy.get('[placeholder="Email"]').then(($el) => {
      expect(($el[0] as HTMLInputElement).validity.valueMissing).to.be.true;
    });

    // ✅ Email field: invalid format – missing @
    cy.get('[placeholder="Email"]').type("testexample.com");
    cy.get("form").submit();
    cy.get('[placeholder="Email"]').then(($el) => {
      expect(($el[0] as HTMLInputElement).validity.typeMismatch).to.be.true;
    });

    // ✅ Email field: valid email
    cy.get('[placeholder="Email"]').clear().type("test@example.com");
    cy.get("form").submit();
    cy.get('[placeholder="Email"]').then(($el) => {
      expect(($el[0] as HTMLInputElement).checkValidity()).to.be.true;
    });

    // ✅ Password field: required (empty)
    cy.get("form").submit();
    cy.get('[placeholder="Password"]').then(($el) => {
      expect(($el[0] as HTMLInputElement).validity.valueMissing).to.be.true;
    });

    // ✅ Password field: valid password
    cy.get('[placeholder="Password"]').clear().type("Test@1234");
    cy.get("form").submit();
    cy.get('[placeholder="Password"]').then(($el) => {
      expect(($el[0] as HTMLInputElement).checkValidity()).to.be.true;
    });

    cy.get('[id="terms"]').click();
    // cy.get('button').click()
  });
});
