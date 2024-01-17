/// <reference types="cypress" />

describe("Pagina de Inicio de Sesión", () => {
  beforeEach(() => {
    cy.visit("https://fishing-net.netlify.app/login");
  });

  it("Debería mostrar el formulario de inicio de sesión", () => {
    cy.get(".user-icon").should("be.visible"); // Icono user
    cy.get("form").should("exist"); // Elemento form

    // Campos de entrada
    cy.get('input[placeholder="Usuario"]').should("be.visible");
    cy.get('input[placeholder="Contraseña"]').should("be.visible");

    // Botón de envío y enlace de registro
    cy.get('button[type="submit"]').should("be.visible").contains("Iniciar sesión");
    cy.get('.btn-register-text').should("be.visible").contains("Registrarse");
  });
  
  it("Debería iniciar sesión con credenciales correctas", () => {
    // Ingresar el nombre de usuario y la contraseña para el usuario de prueba
    cy.get('input[placeholder="Usuario"]').type("testuser");
    cy.get('input[placeholder="Contraseña"]').type("testuser123");

    // Enviar el formulario
    cy.get('button[type="submit"]').click();

    // Mensaje de correcto inicio de sesión
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Usuario autentificado con éxito.");
    });
    cy.url().should("eq", "https://fishing-net.netlify.app/"); // Actualiza la URL esperada después del inicio de sesión
  });

  it("Debería mostrar un mensaje de error por Usuario no encontrado", () => {
    cy.get('input[placeholder="Usuario"]').type("usuarioFalso");
    cy.get('input[placeholder="Contraseña"]').type("contraseña123");
    cy.get('button[type="submit"]').click();

    // Mensaje de usuario no encontrado
    cy.on("window:alert", (str) => {
      expect(str).to.equal("El usuario introducido no existe. Usuario no encontrado");
    });
  });

  it("Debería mostrar un mensaje de error por contraseña incorrecta", () => {
    cy.get('input[placeholder="Usuario"]').type("testuser");
    cy.get('input[placeholder="Contraseña"]').type("contraseña123");
    cy.get('button[type="submit"]').click();

    // Mensaje de Contraseña incorrecta
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Usuario y/o contraseña incorrecto. Contraseña incorrecta");
    });
  });
});