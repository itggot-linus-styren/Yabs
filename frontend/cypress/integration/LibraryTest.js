import baseVisit from '../helper';

describe('This test checks the rendered content' , () => {
    it('checks the whole page', () => {
      baseVisit('/library');
    });

    it('Checks scan your book barcode card' , () => {
        cy.get('[data-cy=FirstCard]')
        cy.contains('Scan your book barcode')
        cy.contains('Bokens Streckkod')
        cy.contains('Return')  
        
    })

    it('Checks scan the book barcode card' , () => {
        cy.get('[data-cy=SecondCard]')
        cy.contains('Scan the book barcode')
        cy.contains('Bokens Streckkod')
        cy.contains('Låna Ut')    
    })
    
    it('Checks the data tables' , () => {
        cy.get('[data-cy=DataTable]')
        cy.contains('Search')
        cy.contains('Lånad av')
        cy.contains('Utlånad av')
        cy.contains('Boktitel')
        cy.contains('Utgångsdatum')
        cy.contains('Titel')
        cy.contains('Kostnad')
        cy.contains('Typ')
        cy.contains('ISBN')
        
    })
    
    


});
