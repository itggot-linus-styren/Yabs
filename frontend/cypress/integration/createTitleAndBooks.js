describe('This test will create a title and a book', () => {
  it('Opens the website', () => {
    cy.visit('http://localhost:8080/admin');
  });

  // it('Login with Google'), () => {
  //   cy.get('[id=not_signed_inow8rarn26wvu]')
  // }

  it('Open up the title view', () => {
    cy.get('[data-cy=Titles]').click();
  });

  it('Creates a title and then reset the fields', () => {
    cy.get('[data-cy=name]').type('Book made from Test');
    cy.get('[data-cy=cost]').type('2912');
    cy.get('[data-cy=isbn]').type('420-420');
    cy.get('[data-cy=titleType]').click({force:true});
    cy.get('div').contains('Kurslitteratur').click();
    cy.get('[data-cy=submit]').click();
    cy.get('[data-cy=reset]').click();
  });
    
  // it('Open up the book', () => {
  //   cy.get('[id=ddown1__BV_toggle_]').click();
  //   cy.get('[data-cy=book]').click();
  // });

  // it('Creates a book', () => {
  //   cy.get('[data-cy=titlename]').type('Book made from Test');
  //   cy.get('div').contains('Book made from Test').click();
  //   cy.get('[data-cy=barcode]').click().type('232133131');
  //   cy.get('[data-cy=status]').type('ok');
  //   cy.get('[data-cy=addBook]').click();
  // });

  // it('Creates a book and reset the fields', () => {
  //   cy.get('[data-cy=titlename]').type('Book made from Test');
  //   cy.get('div').contains('Book made from Test').click();
  //   cy.get('[data-cy=barcode]').click().type('232133131');
  //   cy.get('[data-cy=status]').type('ok');
  //   cy.get('[data-cy=resetbookfield]').click();
  // });
});
