/// <reference types="cypress" />

describe("Pagina Principal", () => {
  beforeEach(() => {
    cy.visit("https://fishing-net.netlify.app/");
  });

  it("Debería mostrar la pagina principal", () => {
    cy.contains("TU").should("be.visible");
    cy.contains("página de pesca").should("be.visible");
    
    // Enlace de registro
    cy.get('.btn.btn-primary').should("be.visible").contains("Regístrate");
  });
});