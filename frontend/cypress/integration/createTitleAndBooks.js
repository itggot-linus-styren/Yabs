import baseVisit from '../helper';

describe('This test will create a title and a book', () => {
  it('Goes to the webbpage', () => {
    baseVisit('/admin');
  });

  it('Open up the title view', () => {
    cy.get('[data-cy=Titles]').click();
  });

  it('Creates a title and reset the fields when added', () => {
    cy.get('[data-cy=name]').type('Book made from Test');
    cy.get('[data-cy=cost]').type('2912');
    cy.get('[data-cy=isbn]').type('420-420');
    cy.get('[data-cy=titleType]').click({force:true});
    cy.get('div').contains('Kurslitteratur').click();
    cy.get('[data-cy=submit]').click();
    cy.get('[data-cy=reset]').click();
  });
    
  it('Open up the book view', () => {
    cy.get('[data-cy=Books]').click();
  });

  it('Creates a new book and validates it presence', () => {
    const barcode = '222';
    const bookTitle = 'Alice in Wonderland';
    const status = 'Stolen';

    cy.get('[data-cy=barcode]').click().type(barcode);
    cy.get('[data-cy=chooseTitle]').click();
    cy.get('div').contains(bookTitle).click();
    cy.get('[data-cy=condition]').type(status);
    cy.get('[data-cy=addBook]').click();

    cy.get('[data-jest=search]').type(status);
    cy.get('[data-cy=table]').contains(bookTitle);
    cy.get('[data-cy=table]').contains(barcode);
    cy.get('[data-cy=table]').contains(status);
  });
});
