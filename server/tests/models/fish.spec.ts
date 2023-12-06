import request from "supertest";
import { app } from "../../src/app.js";
import { Fish } from "../../src/models/fish.js";

beforeEach(async () => {
  await Fish.deleteMany();
});

describe("Modelo Fish", () => {
  it("Debe recibir un error porque el nombre es obligatorio", async () => {
    await request(app)
      .post("/fishes")
      .send({
        cientific_name: "Testus Fishus",
        description: "A fish for testing",
        minimum_size: 22,
        habitat: "Sea",
        recommended_bait: "Crab",
      })
      .expect(500);
  });

  it("Debe recibir un error porque el nombre científico es obligatorio", async () => {
    await request(app)
      .post("/fishes")
      .send({
        name: "Test Fish",
        description: "A fish for testing",
        minimum_size: 22,
        habitat: "Sea",
        recommended_bait: "Crab",
      })
      .expect(500);
  });

  it("Debe recibir un error porque la descripción es obligatoria", async () => {
    await request(app)
      .post("/fishes")
      .send({
        name: "Test Fish",
        cientific_name: "Testus Fishus",
        minimum_size: 22,
        habitat: "Sea",
        recommended_bait: "Crab",
      })
      .expect(500);
  });

  it("Debe recibir un error porque la talla mínima es obligatoria", async () => {
    await request(app)
      .post("/fishes")
      .send({
        name: "Test Fish",
        cientific_name: "Testus Fishus",
        description: "A fish for testing",
        habitat: "Sea",
        recommended_bait: "Crab",
      })
      .expect(500);
  });

  it("Debe recibir un error porque el la talla mínima tiene un formato incorrecto", async () => {
    await request(app)
      .post("/fishes")
      .send({
        name: "Test Fish",
        cientific_name: "Testus Fishus",
        description: "A fish for testing",
        minimum_size: 0,
        habitat: "Sea",
        recommended_bait: "Crab",
      })
      .expect(500);

    await request(app)
      .post("/fishes")
      .send({
        name: "Test Fish",
        cientific_name: "Testus Fishus",
        description: "A fish for testing",
        minimum_size: -1,
        habitat: "Sea",
        recommended_bait: "Crab",
      })
      .expect(500);
  });
});
