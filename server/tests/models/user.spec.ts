import request from "supertest";
import { app } from "../../src/app.js";
import { User } from "../../src/models/user.js";

beforeEach(async () => {
  await User.deleteMany();
});

describe("Modelo User", () => {
  it("Debe recibir un error porque el email es obligatorio", async () => {
    await request(app)
      .post("/users")
      .send({
        username: "test_user",
        name: "Test User",
        password: "testuser123",
      })
      .expect(500);
  });

  it("Debe recibir un error porque el email tiene un formato incorrecto", async () => {
    await request(app)
      .post("/users")
      .send({
        username: "test_user",
        name: "Test User",
        email: "test_user",
        password: "testuser123",
      })
      .expect(500);

    await request(app)
      .post("/users")
      .send({
        username: "test_user",
        name: "Test User",
        email: "test_user@.com",
        password: "testuser123",
      })
      .expect(500);

    await request(app)
      .post("/users")
      .send({
        username: "test_user",
        name: "Test User",
        email: "@gmail.com",
        password: "testuser123",
      })
      .expect(500);
  });

  it("Debe recibir un error porque el nombre de usuario es obligatorio", async () => {
    await request(app)
      .post("/users")
      .send({
        name: "Test User",
        email: "test_user@gmail.com",
        password: "testuser123",
      })
      .expect(500);
  });

  it("Debe recibir un error porque el nombre es obligatorio", async () => {
    await request(app)
      .post("/users")
      .send({
        username: "test_user",
        email: "test_user@gmail.com",
        password: "testuser123",
      })
      .expect(500);
  });

  it("Debe recibir un error porque la contraseña es obligatoria", async () => {
    await request(app)
      .post("/users")
      .send({
        username: "test_user",
        name: "Test User",
        email: "test_user@gmail.com",
      })
      .expect(500);
  });

  it("Debe recibir un error porque el la contraseña tiene un formato incorrecto", async () => {
    await request(app)
      .post("/users")
      .send({
        username: "test_user",
        name: "Test User",
        email: "test_user@gmail.com",
        password: "123",
      })
      .expect(500);

    await request(app)
      .post("/users")
      .send({
        username: "test_user",
        name: "Test User",
        email: "test_user@gmail.com",
        password: "testuser",
      })
      .expect(500);
  });
});
