/// <reference types="cypress" />

describe("Pagina de Registro", () => {
  beforeEach(() => {
    cy.visit("https://fishing-net.netlify.app/register");
  });

  it("Debería mostrar el formulario de registro", () => {
    cy.get(".user-icon").should("be.visible"); // Icono user
    cy.get("form").should("exist"); // Elemento form

    // Campos de entrada
    cy.get('input[placeholder="Nombre"]').should("be.visible");
    cy.get('input[placeholder="Nombre usuario"]').should("be.visible");
    cy.get('input[placeholder="Contraseña"]').should("be.visible");
    cy.get('input[placeholder="nombre@email.com"]').should("be.visible");

    // Botón de envío y enlace de registro
    cy.get('.btn.btn-primary').should("be.visible").contains("Registrarse");
  });

  it("Debería mostrar un mensaje de error por Usuario existente", () => {
    cy.get('input[placeholder="Nombre"]').type("User");
    cy.get('input[placeholder="Nombre usuario"]').type("testuser");
    cy.get('input[placeholder="Contraseña"]').type("contraseña123");
    cy.get('input[placeholder="nombre@email.com"]').type("user@correo.es");
    cy.get('button[type="submit"]').click();

    // Mensaje de usuario no creado por usuario existente
    cy.on("window:alert", (str) => {
      expect(str).to.equal("El usuario no se pudo crear.");
    });
  });
});