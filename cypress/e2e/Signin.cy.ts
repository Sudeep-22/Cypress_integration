describe("Wisowl SignUp Check ", () => {
  it("passes", () => {
    //To visit any URL
    cy.visit("https://app.wisowl.com/signin");
    // To check whether these words are on the screen
    cy.contains("Sign in to your account");

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
    cy.get('[placeholder="Email"]').clear().type("sudeep@wisowl.com");
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
    cy.get('.text-muted-foreground').contains(/Invalid login credentials/i)
    
    cy.get('[placeholder="Password"]').clear().type("Sudeep@22");
    cy.get("form").submit();

    // Dashboard testing area
    cy.contains(/Welcome Sudeep!/i)

    // Navigate to Jobs page
    cy.contains(/jobs/i)
    cy.get('.space-y-2 > :nth-child(2) > .flex').click()
    
    // Navigate to Resume Builder page
    cy.contains(/Resume Builder/i)
    cy.get(':nth-child(3) > .flex > .ml-3').click()
    cy.contains(/Build Your Perfect Resume/i)

    // Navigate to Profile page
    cy.contains(/My profile/i)
    cy.get('.space-y-2 > :nth-child(4) > .flex').click()
    cy.contains(/sudeep@wisowl.com/i)
    
    // Navigate to Job Board page
    cy.contains(/job board/i)
    cy.get(':nth-child(5) > .flex > .ml-3').click();
    cy.contains(/All Job Opportunities/i)
    
    // Navigate to Support page
    cy.contains(/Support/i)
    cy.get(':nth-child(6) > .flex').click();
    cy.contains(/Support Center/i)

    cy.wait(2000);

    // Logout
    cy.contains(/Sign out/i)
    cy.contains('button', /Sign out/i).click()
    cy.contains(/Sign in to your account/i)
  });
});