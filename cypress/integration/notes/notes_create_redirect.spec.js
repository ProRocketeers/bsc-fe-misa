/// <reference types="Cypress" />

context('Actions', () => {

  it('Add button on main page should redirect to create page', () => {
    // go to main page with notes
    cy.visit('');

    // find link button for create note on page and click it
    cy
      .get("a#create")
      .click();

    // check correct location after 1 s
    cy
      .location('pathname')
      .should('eq', '/new');
  });

});
