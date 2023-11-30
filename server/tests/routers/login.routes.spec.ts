import request from "supertest";
import { expect } from "chai";
import { app } from "../../src/app.js";
import { User } from "../../src/models/user.js";

const testUser = {
  username: "testuser1",
  name: "Test User",
  email: "testuser1@gmail.com",
  password: "testuser123",
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(testUser).save();
});

describe("POST /login", () => {
  it("Debe enviar los datos del usuario", async () => {
    const response = await request(app)
      .post("/login")
      .send({
        username: "testuser1",
        password: "testuser123",
      })
      .expect(200);

    expect(response.body).to.include({
      username: "testuser1",
      name: "Test User",
      email: "testuser1@gmail.com",
    });
  });

  it("Debe recibir un error porque la contraseña es incorrecta", async () => {
    await request(app)
      .post("/login")
      .send({
        username: "testuser1",
        password: "testuser",
      })
      .expect(400);
  });

  it("Debe recibir un error porque el usuario no existe", async () => {
    await request(app)
      .post("/login")
      .send({
        username: "testuser5",
        password: "testuser123",
      })
      .expect(404);
  });
});
