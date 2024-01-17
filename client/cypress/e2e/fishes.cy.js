/// <reference types="cypress" />

describe("Pagina de Fauna", () => {
  beforeEach(() => {
    cy.visit("https://fishing-net.netlify.app/fishes");
  });

  it("Debería mostrar la pagina de fauna", () => {
    cy.get('input[placeholder="Buscar por nombre..."]').should("be.visible");
    cy.get('button[type="button"]').should("be.visible").contains("Buscar");
    cy.get('.card-container .card').should('have.length.greaterThan', 0);

    // Deberian aparecer al menos el Sargo comun y la salema
    cy.contains('Sargo común').should('be.visible');
    cy.contains('Diplodus sargus').should('be.visible');
    cy.contains('Talla mínima: 15 cm').should('be.visible');

    cy.contains('Salema').should('be.visible');
    cy.contains('Sarpa Salpa').should('be.visible');
    cy.contains('Talla mínima: 15 cm').should('be.visible');
  });

  it("Debería buscar el sargo", () => {
    cy.get('input[placeholder="Buscar por nombre..."]').type("sargo");
    cy.contains('button', 'Buscar').click();

    // Deberian aparecer al menos el Sargo comun 
    cy.contains('Sargo común').should('be.visible');
    cy.contains('Diplodus sargus').should('be.visible');
    cy.contains('Talla mínima: 15 cm').should('be.visible');
  });
});