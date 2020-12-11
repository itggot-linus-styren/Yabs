const baseURL = 'localhost'

export default function baseVisit(url = '/') {
    if (Cypress.env('env') == 'test') { cy.visit(`${baseURL}:3000${url}`)}
    else { cy.visit(`${baseURL}:8080${url}`); } 
}