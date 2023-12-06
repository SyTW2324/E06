import request from "supertest";
import { expect } from "chai";
import { app } from "../../src/app.js";
import { Fish } from "../../src/models/fish.js";

const testFish = {
  name: "Test Fish",
  cientific_name: "Testus Fishus",
  description: "A fish for testing",
  minimum_size: 22,
  habitat: "Sea",
  recommended_bait: "Crab",
};

beforeEach(async () => {
  await Fish.deleteMany();
  await new Fish(testFish).save();
});

describe("POST /fishes", () => {
  it("Debe crear un nuevo pez", async () => {
    const response = await request(app)
      .post("/fishes")
      .send({
        name: "New Test Fish",
        cientific_name: "Testusus Fishusus",
        description: "A fish for testing",
        minimum_size: 22,
        habitat: "Sea",
        recommended_bait: "Crab",
      })
      .expect(201);

    expect(response.body).to.include({
      name: "New Test Fish",
      cientific_name: "Testusus Fishusus",
      description: "A fish for testing",
      minimum_size: 22,
      habitat: "Sea",
      recommended_bait: "Crab",
    });

    const NewTestFish = await Fish.findOne({
      cientific_name: response.body.cientific_name,
    });
    expect(NewTestFish).not.to.be.null;
    expect(NewTestFish!.cientific_name).to.equal("Testusus Fishusus");
  });

  it("Debe recibir un error porque el pez ya existe", async () => {
    await request(app).post("/fishes").send(testFish).expect(500);
  });
});

describe("GET /fishes/:cientific_name", () => {
  it("Debe encontrar los datos del pez por su nombre científico", async () => {
    const response = await request(app)
      .get("/fishes/Testus Fishus")
      .expect(200);

    expect(response.body).to.include({
      name: "Test Fish",
      cientific_name: "Testus Fishus",
      description: "A fish for testing",
      minimum_size: 22,
      habitat: "Sea",
      recommended_bait: "Crab",
    });
  });

  it("Debe recibir un error porque no hay peces con ese nombre nombre científico", async () => {
    await request(app).get("/fishes/Testusus Fishusus").expect(404);
  });
});

describe("PATCH /fishes/:cientific_name", () => {
  it("Debe actualizar el pez por su nombre científico", async () => {
    const response = await request(app)
      .patch("/fishes/Testus Fishus")
      .send({
        name: "New Test Fish",
        cientific_name: "Testusus Fishusus",
        description: "A fish for testing",
        minimum_size: 35,
        habitat: "River",
        recommended_bait: "Tuna",
      })
      .expect(200);

    expect(response.body).to.include({
      name: "New Test Fish",
      cientific_name: "Testusus Fishusus",
      description: "A fish for testing",
      minimum_size: 35,
      habitat: "River",
      recommended_bait: "Tuna",
    });

    const UpdatedFish = await Fish.findOne({
      cientific_name: response.body.cientific_name,
    });
    expect(UpdatedFish!.cientific_name).to.equal("Testusus Fishusus");
  });

  it("Debe recibir un error porque no hay peces con ese nombre científico", async () => {
    await request(app)
      .patch("/fishes/Testus Tunas")
      .send({
        name: "New Test Fish",
        cientific_name: "Testusus Fishusus",
        description: "A fish for testing",
        minimum_size: 35,
        habitat: "River",
        recommended_bait: "Tuna",
      })
      .expect(404);
  });

  it("Debe recibir un error porque el cuerpo está mal formado", async () => {
    await request(app)
      .patch("/fishes/Testus Fishus")
      .send({
        id: "test",
        password: "Test",
      })
      .expect(400);
  });
});

describe("DELETE /fishes/:cientific_name", () => {
  it("Debe borrar el pez por su nombre científico", async () => {
    const response = await request(app)
      .delete("/fishes/Testus Fishus")
      .expect(200);
    expect(response.body).to.include({
      name: "Test Fish",
      cientific_name: "Testus Fishus",
      description: "A fish for testing",
      minimum_size: 22,
      habitat: "Sea",
      recommended_bait: "Crab",
    });

    const DeletedFish = await Fish.findOne({
      cientific_name: response.body.cientific_name,
    });
    expect(DeletedFish).to.be.null;
  });

  it("Debe recibir un error porque no hay peces con ese nombre científico", async () => {
    await request(app).delete("/fishes/Testusus Fishusus").expect(404);
  });
});
