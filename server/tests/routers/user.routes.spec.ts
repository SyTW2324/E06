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

describe("POST /users", () => {
  it("Debe crear un nuevo usuario", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        username: "testuser3",
        name: "New Test User",
        email: "testuser3@gmail.com",
        password: "testuser123",
      })
      .expect(201);

    expect(response.body).to.include({
      username: "testuser3",
      name: "New Test User",
      email: "testuser3@gmail.com",
    });

    const NewTestUser = await User.findOne({
      username: response.body.username,
    });
    expect(NewTestUser).not.to.be.null;
    expect(NewTestUser!.username).to.equal("testuser3");
  });

  it("Debe recibir un error porque el usuario ya existe", async () => {
    await request(app).post("/users").send(testUser).expect(500);
  });
});

describe("PATCH /users/:username", () => {
  it("Debe actualizar el usuario por su nombre de usuario", async () => {
    const response = await request(app)
      .patch("/users/testuser1")
      .send({
        new_user: {
          username: "testuser3",
          name: "New Test User",
          email: "testuser3@gmail.com",
          password: "testuser123",
        },
        current_password: "testuser123",
      })
      .expect(200);

    expect(response.body).to.include({
      username: "testuser3",
      name: "New Test User",
      email: "testuser3@gmail.com",
    });

    const UpdatedUser = await User.findOne({
      username: response.body.username,
    });
    expect(UpdatedUser!.username).to.equal("testuser3");
  });

  it("Debe recibir un error porque la contraseña actual es incorrecta", async () => {
    const response = await request(app)
      .patch("/users/testuser1")
      .send({
        new_user: {
          username: "testuser3",
          name: "New Test User",
          email: "testuser3@gmail.com",
          password: "testuser123",
        },
        current_password: "testuser",
      })
      .expect(400);
  });

  it("Debe recibir un error porque no hay usuarios con ese nombre de usuario", async () => {
    await request(app)
      .patch("/users/testuser5")
      .send({
        new_user: {
          username: "testuser3",
          name: "New Test User",
          email: "testuser3@gmail.com",
          password: "testuser123",
        },
        current_password: "testuser123",
      })
      .expect(404);
  });

  it("Debe recibir un error porque el cuerpo está mal formado", async () => {
    await request(app)
      .patch("/users/testuser1")
      .send({
        username: "testuser3",
        name: "New Test User",
        email: "testuser3@gmail.com",
        password: "testuser123",
      })
      .expect(500);
  });
});

describe("DELETE /users/:username", () => {
  it("Debe borrar el usuario por su nombre de usuario", async () => {
    const response = await request(app).delete("/users/testuser1").expect(200);
    expect(response.body).to.include({
      username: "testuser1",
      name: "Test User",
      email: "testuser1@gmail.com",
    });

    const DeletedUser = await User.findOne({
      username: response.body.username,
    });
    expect(DeletedUser).to.be.null;
  });

  it("Debe recibir un error porque no hay usuarios con ese nombre de usuario", async () => {
    await request(app).delete("/users/testuser5").expect(404);
  });
});
